
// Vanilla JS for interactivity & animations (no external libs)

const sampleCourses = [
  { id: 'c1', title: 'Foundations of Computer Science', author: 'Vagif', length: '12h 40m', level:'Beginner', tag:'Web', rating:4.8, desc:'Basics of CS, algorithms and problem solving.'},
  { id: 'c2', title: 'Practical Web Development', author: 'Team Learn', length: '22h 10m', level:'Intermediate', tag:'Web', rating:4.6, desc:'HTML, CSS, JS and building real projects.'},
  { id: 'c3', title: 'Machine Learning Essentials', author: 'AI Collective', length: '18h 5m', level:'Advanced', tag:'AI', rating:4.7, desc:'Supervised and unsupervised learning fundamentals.'},
  { id: 'c4', title: 'Data Science with Python', author: 'Data Lab', length: '16h', level:'Intermediate', tag:'Data', rating:4.5, desc:'Pandas, visualization and model evaluation.'},
  { id: 'c5', title: 'Intro to Cybersecurity', author: 'Sec Team', length: '8h 30m', level:'Beginner', tag:'Security', rating:4.4, desc:'Security basics, web vulnerabilities and defenses.'},
  { id: 'c6', title: 'Deep Learning Practical', author: 'AI Collective', length: '24h', level:'Advanced', tag:'AI', rating:4.9, desc:'Neural nets, CNNs, transfer learning.'},
  { id: 'c7', title: 'React from Scratch', author: 'Frontend Pros', length: '14h', level:'Intermediate', tag:'Web', rating:4.6, desc:'Modern React, hooks, and state management.'},
  { id: 'c8', title: 'SQL for Analysts', author: 'DB Academy', length: '6h 20m', level:'Beginner', tag:'Data', rating:4.3, desc:'SQL querying patterns for analysis.'},
];

// Utility: create course card DOM
function makeCard(c){
  const div = document.createElement('article');
  div.className = 'course-card';
  div.innerHTML = `
    <div class="course-thumb">
      <svg viewBox="0 0 800 120" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="cg${c.id}" x1="0" x2="1"><stop offset="0" stop-color="#ff9a8b"/><stop offset="1" stop-color="#ff6a88"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#cg${c.id})"></rect><text x="50%" y="55%" font-size="28" text-anchor="middle" fill="#fff">${c.title}</text></svg>
    </div>
    <div class="course-info">
      <div>
        <div class="course-title">${c.title}</div>
        <div class="course-meta">${c.author} • ${c.level}</div>
      </div>
      <div class="course-meta">${c.length}</div>
    </div>
    <button class="btn primary preview" data-id="${c.id}">Preview</button>
  `;
  return div;
}

// Render featured on index
function renderFeatured(){
  const featured = document.getElementById('featured-list');
  if(!featured) return;
  const top = sampleCourses.slice(0,6);
  featured.innerHTML = '';
  top.forEach(c => {
    const el = makeCard(c);
    featured.appendChild(el);
    // tiny entrance animation
    el.style.opacity = 0;
    setTimeout(()=> el.style.opacity = 1, 80 * Math.random());
  });
}

// Render courses on courses page with filters/pagination
function renderCourses(filterTag='All', sort='popular', page=1, per=6){
  const grid = document.getElementById('coursesGrid');
  if(!grid) return;
  let list = sampleCourses.slice();
  if(filterTag && filterTag !== 'All') list = list.filter(x=> x.tag === filterTag);
  if(sort === 'new') list = list.slice().reverse();
  if(sort === 'length') list = list.slice().sort((a,b)=> parseFloat(a.length) - parseFloat(b.length));
  // pagination
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / per));
  page = Math.min(page, pages);
  const start = (page-1)*per;
  const pageItems = list.slice(start, start+per);

  grid.innerHTML = '';
  pageItems.forEach(c=> grid.appendChild(makeCard(c)));

  // pager
  const pager = document.getElementById('pager');
  if(pager){
    pager.innerHTML = '';
    for(let i=1;i<=pages;i++){
      const b = document.createElement('button');
      b.textContent = i;
      if(i===page) b.classList.add('active');
      b.addEventListener('click', ()=> renderCourses(filterTag, sort, i, per));
      pager.appendChild(b);
    }
  }
}

// modal controls
function openModal(title, desc){
  const modal = document.getElementById('playerModal');
  if(!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  const t = document.getElementById('modalTitle');
  const d = document.getElementById('modalDesc');
  if(t) t.textContent = title;
  if(d) d.textContent = desc;
}
function closeModal(){
  const modal = document.getElementById('playerModal');
  if(!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

// wire preview buttons (delegation)
document.addEventListener('click', (e)=>{
  const p = e.target.closest('.preview');
  if(p){
    const id = p.dataset.id;
    const course = sampleCourses.find(x=> x.id === id);
    openModal(course.title, course.desc);
  }
  if(e.target.matches('.play')){
    const title = e.target.dataset.course || 'Preview';
    const course = sampleCourses.find(x=> x.title === title);
    openModal(course ? course.title : title, course ? course.desc : 'Preview video');
  }
  if(e.target.matches('.modal-close')) closeModal();
  if(e.target.closest('.modal') && e.target.classList.contains('modal')) closeModal();
});

// search (site header)
const searchInput = document.getElementById('search');
if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const q = e.target.value.trim().toLowerCase();
    if(window.location.pathname.endsWith('courses.html')){
      // on courses page use dedicated search box
      const sc = document.getElementById('searchCourses');
      if(sc) sc.value = q;
      renderCourses('All','popular',1,6);
    } else {
      // simple filter of featured
      const featured = document.getElementById('featured-list');
      if(!featured) return;
      const children = featured.querySelectorAll('.course-card');
      children.forEach(card=>{
        const title = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
        card.style.display = title.includes(q) ? '' : 'none';
      });
    }
  });
}

// courses page search/filter listeners
const sc = document.getElementById('searchCourses');
if(sc){
  sc.addEventListener('input', (e)=>{
    const q = e.target.value.trim().toLowerCase();
    const filtered = sampleCourses.filter(c => c.title.toLowerCase().includes(q) || c.author.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q));
    const grid = document.getElementById('coursesGrid');
    if(grid){ grid.innerHTML = ''; filtered.forEach(c=> grid.appendChild(makeCard(c))); }
    const pager = document.getElementById('pager'); if(pager) pager.innerHTML='';
  });
}

// chips and sort
document.addEventListener('DOMContentLoaded', ()=>{
  renderFeatured();
  renderCourses();

  document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const tag = chip.dataset.tag;
      const sort = document.getElementById('sortSelect')?.value || 'popular';
      renderCourses(tag, sort, 1, 6);
    });
  });
  const sort = document.getElementById('sortSelect');
  if(sort) sort.addEventListener('change', ()=>{
    const tag = document.querySelector('.chip.active')?.dataset.tag || 'All';
    renderCourses(tag, sort.value, 1, 6);
  });

  // contact form
  const contact = document.getElementById('contactForm');
  if(contact){
    contact.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const status = document.getElementById('contactStatus');
      status.textContent = 'Sending...';
      setTimeout(()=>{
        status.textContent = 'Thanks — we received your message!';
        contact.reset();
      }, 900);
    });
  }

  // login form
  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      alert('Signed in (demo) — redirecting to courses');
      window.location.href = 'courses.html';
    });
  }

  // small animation: gently pulse featured card
  const fc = document.getElementById('featured-card');
  if(fc){
    setInterval(()=>{ fc.animate([{transform:'translateY(0)'},{transform:'translateY(-6px)'},{transform:'translateY(0)'}],{duration:2500,iterations:1}).onfinish=()=>{}; },4000);
  }
});




// --- Interactive Learn Page Logic ---
const lessons = [
  {
    id: 'n1', title: 'What is an IP address?', topic:'Networking', level:'Beginner',
    content: `An <strong>IP address</strong> is a numeric label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions: <em>identification</em> and <em>location addressing</em>.<br><br>
    IPv4 addresses look like <code>192.168.0.1</code>. IPv6 is longer and written as hex strings separated by colons.`,
    hints: ['Think of IP like a postal address for your computer.','There are IPv4 and IPv6 formats.'],
    quiz: {
      q: 'Which of these is an IPv4 address?',
      options: ['2001:0db8:85a3::8a2e:0370:7334','192.168.1.5','fe80::1ff:fe23:4567:890a','ggg.111.22.33'],
      answer: 1,
      explanation: 'IPv4 uses four decimal numbers 0-255 separated by dots; IPv6 uses hex and colons.'
    }
  },
  {
    id: 'n2', title: 'DNS — Domain Name System', topic:'Networking', level:'Beginner',
    content: `The <strong>Domain Name System (DNS)</strong> translates human-readable domain names (like <code>example.com</code>) into IP addresses that computers use.<br><br> It works like a phonebook — you ask a DNS resolver to find the IP for a domain.`,
    hints: ['DNS maps names to numbers.','Caching makes DNS fast.'],
    quiz: {
      q: 'What does DNS do?',
      options: ['Encrypts network traffic','Resolves domain names to IPs','Assigns MAC addresses','Blocks malicious websites'],
      answer: 1,
      explanation: 'DNS resolves domain names to the corresponding IP addresses.'
    }
  },
  {
    id: 's1', title: 'Intro to Cybersecurity — CIA Triad', topic:'Cybersecurity', level:'Beginner',
    content: `Cybersecurity fundamentals include the <strong>CIA triad</strong>: <em>Confidentiality</em>, <em>Integrity</em>, and <em>Availability</em>. These guide how systems are designed and protected.`,
    hints: ['Confidentiality = secrecy','Integrity = correctness','Availability = uptime'],
    quiz: {
      q: 'Which part of CIA refers to ensuring data is not altered?',
      options: ['Confidentiality','Integrity','Availability','Authentication'],
      answer: 1,
      explanation: 'Integrity ensures data is accurate and unmodified.'
    }
  },
  {
    id: 'o1', title: 'Operating Systems — What is a kernel?', topic:'OS', level:'Beginner',
    content: `The <strong>kernel</strong> is the core part of an operating system, managing resources, scheduling processes, and handling hardware interaction. It acts as a bridge between software and hardware.`,
    hints: ['Kernel handles system calls','Monolithic vs microkernels are designs.'],
    quiz: {
      q: 'The kernel runs in which privilege level?',
      options: ['User mode','Kernel mode (supervisor)','Guest mode','VM mode'],
      answer: 1,
      explanation: 'The kernel runs in privileged (kernel) mode with full system access.'
    }
  }
];

// localStorage keys
const LS_POINTS = 'learnflow_points_v1';
const LS_PROGRESS = 'learnflow_progress_v1';

function getPoints(){ return Number(localStorage.getItem(LS_POINTS) || 0); }
function addPoints(n){ localStorage.setItem(LS_POINTS, getPoints()+n); updatePoints(); }
function updatePoints(){ const el = document.getElementById('points'); if(el) el.textContent = 'Points: ' + getPoints(); }

// render lesson list
function renderLessonList(){
  const list = document.getElementById('lessonList');
  if(!list) return;
  list.innerHTML = '';
  lessons.forEach((l, idx) => {
    const btn = document.createElement('button');
    btn.className = 'lesson-chip';
    btn.dataset.id = l.id;
    btn.innerHTML = `<div class="chip-title">${l.title}</div><div class="chip-meta muted">${l.topic} • ${l.level}</div>`;
    btn.addEventListener('click', ()=> openLesson(l.id));
    list.appendChild(btn);
  });
}

// open lesson
function openLesson(id){
  const lesson = lessons.find(x=> x.id === id);
  if(!lesson) return;
  const title = document.getElementById('lessonTitle');
  const meta = document.getElementById('lessonMeta');
  const body = document.getElementById('lessonBody');
  if(title) title.textContent = lesson.title;
  if(meta) meta.textContent = lesson.topic + ' • ' + lesson.level;

  if(body){
    body.innerHTML = '';
    // reading card
    const read = document.createElement('div');
    read.className = 'read-card';
    read.innerHTML = `<div class="read-text">${lesson.content}</div>
      <div class="read-actions">
        <button class="btn outline reveal">Show hints</button>
        <button class="btn ghost mark-done">Mark done</button>
      </div>
      <div class="hints" aria-hidden style="display:none"></div>`;
    body.appendChild(read);

    // reveal hints
    read.querySelector('.reveal').addEventListener('click', (e)=>{
      const hints = read.querySelector('.hints');
      if(hints.style.display === 'none'){
        hints.style.display = 'block';
        hints.innerHTML = '<ul>' + lesson.hints.map(h=>'<li>'+h+'</li>').join('') + '</ul>';
        e.target.textContent = 'Hide hints';
      } else {
        hints.style.display = 'none';
        e.target.textContent = 'Show hints';
      }
    });

    // mark done
    read.querySelector('.mark-done').addEventListener('click', ()=>{
      markLessonDone(lesson.id);
      animateProgressFill();
    });

    // flashcard
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.innerHTML = `<div class="card-front">Quick fact</div><div class="card-back">${lesson.content}</div><button class="btn outline flip">Flip</button>`;
    body.appendChild(card);
    card.querySelector('.flip').addEventListener('click', ()=>{
      card.classList.toggle('flipped');
    });

    // quiz
    const quizWrap = document.createElement('div');
    quizWrap.className = 'quiz-wrap';
    quizWrap.innerHTML = `<h3>Quiz: ${lesson.quiz.q}</h3><div class="options"></div><div class="quiz-result muted" aria-live="polite"></div>`;
    const opts = quizWrap.querySelector('.options');
    lesson.quiz.options.forEach((opt, i)=>{
      const b = document.createElement('button');
      b.className = 'chip';
      b.textContent = opt;
      b.addEventListener('click', ()=>{
        // disable options
        opts.querySelectorAll('button').forEach(x=> x.disabled = true);
        const correct = i === lesson.quiz.answer;
        const res = quizWrap.querySelector('.quiz-result');
        if(correct){
          res.innerHTML = '<strong>Correct!</strong> ' + lesson.quiz.explanation;
          addPoints(10);
          markLessonDone(lesson.id);
        } else {
          res.innerHTML = '<strong>Not quite.</strong> ' + lesson.quiz.explanation;
          addPoints(2);
        }
        animateProgressFill();
      });
      opts.appendChild(b);
    });
    body.appendChild(quizWrap);

    // smooth entrance animation
    body.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}], {duration:350, easing:'ease-out'});
  }

  // update progress bar
  updateLessonProgressUI(id);
}

// mark lesson done
function markLessonDone(id){
  const progress = JSON.parse(localStorage.getItem(LS_PROGRESS) || '{}');
  progress[id] = true;
  localStorage.setItem(LS_PROGRESS, JSON.stringify(progress));
  updateLessonProgressUI(id);
}

// update progress UI: percent fill
function updateLessonProgressUI(currentId){
  const progress = JSON.parse(localStorage.getItem(LS_PROGRESS) || '{}');
  const doneCount = Object.keys(progress).length;
  const pct = Math.round((doneCount / lessons.length) * 100);
  const fill = document.getElementById('lessonProgress');
  if(fill) fill.style.width = pct + '%';
  updatePoints();
  // highlight completed lessons
  document.querySelectorAll('.lesson-chip').forEach(ch=>{
    const id = ch.dataset.id;
    if(progress[id]) ch.classList.add('completed'); else ch.classList.remove('completed');
  });
  // animate points when current lesson completed
  const pts = document.getElementById('points');
  if(pts) pts.classList.add('pulse'); setTimeout(()=> pts.classList.remove('pulse'), 800);
}

// next / prev
function findIndexById(id){ return lessons.findIndex(x=> x.id === id); }
document.addEventListener('click', (e)=>{
  if(e.target.id === 'nextLesson'){
    const cur = document.getElementById('lessonTitle').textContent;
    const idx = lessons.findIndex(x=> x.title === cur);
    const nxt = lessons[(idx+1) % lessons.length];
    openLesson(nxt.id);
  }
  if(e.target.id === 'prevLesson'){
    const cur = document.getElementById('lessonTitle').textContent;
    const idx = lessons.findIndex(x=> x.title === cur);
    const prev = lessons[(idx-1 + lessons.length) % lessons.length];
    openLesson(prev.id);
  }
});

// small animation helper
function animateProgressFill(){
  const fill = document.getElementById('lessonProgress');
  if(!fill) return;
  fill.animate([{transform:'scaleX(0.98)'},{transform:'scaleX(1.02)'},{transform:'scaleX(1)'}],{duration:500});
}

// initialize learn page if present
document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('lessonList')){
    renderLessonList();
    updateLessonProgressUI();
    updatePoints();
    // open first lesson by default
    openLesson(lessons[0].id);
  }

  // --- Networking Course Navigation ---
  const courseSquares = document.getElementById('course-squares');
  if(courseSquares){
    courseSquares.addEventListener('click', function(e) {
      const el = e.target.closest('.course-square');
      if(!el) return;
      const courseKey = el.getAttribute('data-course');
      if(courseKey === 'networking') {
        window.location.href = 'networking_course.html';
        return;
      }
      if(courseKey === 'os') {
        window.location.href = 'os_course.html';
        return;
      }
      if(courseKey === 'frontend') {
        window.location.href = 'frontend_course.html';
        return;
      }
      if(courseKey === 'backend') {
        window.location.href = 'backend_course.html';
        return;
      }
      // You can add navigation for other courses here
    });

    // Progress bar and Start Learning button logic
    const courseKeys = ['networking','os','frontend','backend'];
    courseKeys.forEach(key => {
      const square = courseSquares.querySelector('.course-square[data-course="'+key+'"]');
      if(square) {
        // Progress bar
        let progressBar = square.querySelector('.course-progress-bar');
        let progressFill = square.querySelector('#progress-' + key);
        let progressLabel = square.querySelector('#progress-label-' + key);
        let progress = 0;
        let lessons = window.courses?.[key]?.lessons?.length || 1;
        try {
          const stored = localStorage.getItem('learnProgress_' + key);
          if(stored) {
            const arr = JSON.parse(stored);
            progress = Math.round((arr.filter(Boolean).length / lessons) * 100);
          }
        } catch(e) {}
        if(progressFill) progressFill.style.width = progress + '%';
        if(progressLabel) progressLabel.textContent = progress + '%';
        // Start Learning button
        let btn = square.querySelector('.start-learning-btn');
        if(btn) {
          btn.onclick = function(e){
            e.stopPropagation();
            square.click();
          };
        }
      }
    });
  }
});
