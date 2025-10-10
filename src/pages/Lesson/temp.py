import os
from pathlib import Path

# This file is to generate the placeholder files for all the lessons we got so far lel

cwd = Path(__file__).parent
paths = ["html", "css", "js"]
for path in paths:
    module_path = f"{cwd}/{path}/"
    lessons = os.listdir(module_path)
    for i in range(1,11):
        lesson_path = f"{module_path}/lesson{i}"
        print(f"Writing into {lesson_path}...")
        if f"lesson{i}" not in lessons:
            os.mkdir(lesson_path)
        with open(f"{lesson_path}/Lesson{i}.jsx", "w") as f:
            f.write(f"""import "./Lesson{i}.css"
                    
const Lesson{i} = () => {{
    return <div>
        <p>This is lesson {i} from {path}</p>
        <p>This lesson is probably not done yet</p>
    </div>
}}

export default Lesson{i};
            """)
        with open(f"{lesson_path}/Lesson{i}.css", "w") as f:
            pass
print("Done")