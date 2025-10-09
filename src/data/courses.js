export const sampleCourses = [
    {
        id: 'c1',
        title: 'Foundations of Computer Science',
        author: 'Vagif',
        length: '12h 40m',
        level: 'Beginner',
        tag: 'Web',
        rating: 4.8,
        desc: 'Basics of CS, algorithms and problem solving.'
    },
    {
        id: 'c2',
        title: 'Practical Web Development',
        author: 'Team Learn',
        length: '22h 10m',
        level: 'Intermediate',
        tag: 'Web',
        rating: 4.6,
        desc: 'HTML, CSS, JS and building real projects.'
    },
    {
        id: 'c3',
        title: 'Machine Learning Essentials',
        author: 'AI Collective',
        length: '18h 5m',
        level: 'Advanced',
        tag: 'AI',
        rating: 4.7,
        desc: 'Supervised and unsupervised learning fundamentals.'
    },
    {
        id: 'c4',
        title: 'Data Science with Python',
        author: 'Data Lab',
        length: '16h',
        level: 'Intermediate',
        tag: 'Data',
        rating: 4.5,
        desc: 'Pandas, visualization and model evaluation.'
    },
    {
        id: 'c5',
        title: 'Intro to Cybersecurity',
        author: 'Sec Team',
        length: '8h 30m',
        level: 'Beginner',
        tag: 'Security',
        rating: 4.4,
        desc: 'Security basics, web vulnerabilities and defenses.'
    },
    {
        id: 'c6',
        title: 'Deep Learning Practical',
        author: 'AI Collective',
        length: '24h',
        level: 'Advanced',
        tag: 'AI',
        rating: 4.9,
        desc: 'Neural nets, CNNs, transfer learning.'
    },
    {
        id: 'c7',
        title: 'React from Scratch',
        author: 'Frontend Pros',
        length: '14h',
        level: 'Intermediate',
        tag: 'Web',
        rating: 4.6,
        desc: 'Modern React, hooks, and state management.'
    },
    {
        id: 'c8',
        title: 'SQL for Analysts',
        author: 'DB Academy',
        length: '6h 20m',
        level: 'Beginner',
        tag: 'Data',
        rating: 4.3,
        desc: 'SQL querying patterns for analysis.'
    }
];

export const lessons = [
    {
        id: 'n1',
        title: 'What is an IP address?',
        topic: 'Networking',
        level: 'Beginner',
        content: `An <strong>IP address</strong> is a numeric label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions: <em>identification</em> and <em>location addressing</em>.<br><br>
    IPv4 addresses look like <code>192.168.0.1</code>. IPv6 is longer and written as hex strings separated by colons.`,
        hints: ['Think of IP like a postal address for your computer.', 'There are IPv4 and IPv6 formats.'],
        quiz: {
            q: 'Which of these is an IPv4 address?',
            options: ['2001:0db8:85a3::8a2e:0370:7334', '192.168.1.5', 'fe80::1ff:fe23:4567:890a', 'ggg.111.22.33'],
            answer: 1,
            explanation: 'IPv4 uses four decimal numbers 0-255 separated by dots; IPv6 uses hex and colons.'
        }
    },
    {
        id: 'n2',
        title: 'DNS — Domain Name System',
        topic: 'Networking',
        level: 'Beginner',
        content: `The <strong>Domain Name System (DNS)</strong> translates human-readable domain names (like <code>example.com</code>) into IP addresses that computers use.<br><br> It works like a phonebook — you ask a DNS resolver to find the IP for a domain.`,
        hints: ['DNS maps names to numbers.', 'Caching makes DNS fast.'],
        quiz: {
            q: 'What does DNS do?',
            options: ['Encrypts network traffic', 'Resolves domain names to IPs', 'Assigns MAC addresses', 'Blocks malicious websites'],
            answer: 1,
            explanation: 'DNS resolves domain names to the corresponding IP addresses.'
        }
    },
    {
        id: 's1',
        title: 'Intro to Cybersecurity — CIA Triad',
        topic: 'Cybersecurity',
        level: 'Beginner',
        content: `Cybersecurity fundamentals include the <strong>CIA triad</strong>: <em>Confidentiality</em>, <em>Integrity</em>, and <em>Availability</em>. These guide how systems are designed and protected.`,
        hints: ['Confidentiality = secrecy', 'Integrity = correctness', 'Availability = uptime'],
        quiz: {
            q: 'Which part of CIA refers to ensuring data is not altered?',
            options: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
            answer: 1,
            explanation: 'Integrity ensures data is accurate and unmodified.'
        }
    },
    {
        id: 'o1',
        title: 'Operating Systems — What is a kernel?',
        topic: 'OS',
        level: 'Beginner',
        content: `The <strong>kernel</strong> is the core part of an operating system, managing resources, scheduling processes, and handling hardware interaction. It acts as a bridge between software and hardware.`,
        hints: ['Kernel handles system calls', 'Monolithic vs microkernels are designs.'],
        quiz: {
            q: 'The kernel runs in which privilege level?',
            options: ['User mode', 'Kernel mode (supervisor)', 'Guest mode', 'VM mode'],
            answer: 1,
            explanation: 'The kernel runs in privileged (kernel) mode with full system access.'
        }
    }
];