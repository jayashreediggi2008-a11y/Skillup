
const courses = {
    Python: {
        description: "Python is a beginner-friendly programming language.",
        lessons: [
            ["Introduction to Python", "Python is used to build websites, applications and AI systems.", 'print("Hello World")'],
            ["Variables", "Variables store information.", 'name = "Bhagya"\nage = 20\nprint(name)'],
            ["Data Types", "Python has data types like string, integer and float.", 'name = "Bhagya"\nage = 20\nprice = 25.5'],
            ["If Else", "If else is used to make decisions.", 'age = 18\nif age >= 18:\n    print("Eligible")\nelse:\n    print("Not eligible")'],
            ["Loops", "Loops repeat a block of code.", 'for i in range(1, 6):\n    print(i)']
        ],
        quiz: [
            {q: "Which function displays output?", o: ["input()", "print()", "scan()"], a: 1},
            {q: "Which symbol is used for comments?", o: ["#", "//", "@"], a: 0},
            {q: "Which data type stores whole numbers?", o: ["int", "str", "list"], a: 0},
            {q: "Which keyword checks a condition?", o: ["for", "if", "def"], a: 1},
            {q: "Which loop repeats over a sequence?", o: ["for", "print", "input"], a: 0}
        ]
    },

    C: {
        description: "C is a programming language used to understand programming basics.",
        lessons: [
            ["Introduction to C", "C is a general-purpose programming language.", '#include <stdio.h>\nint main() {\n printf("Hello World");\n return 0;\n}'],
            ["Variables", "Variables store data values.", 'int age = 20;\nfloat price = 10.5;'],
            ["Data Types", "C includes int, float, char and double.", 'int number = 10;\nchar grade = \'A\';'],
            ["If Else", "If else helps make decisions.", 'if (age >= 18) {\n printf("Adult");\n} else {\n printf("Minor");\n}'],
            ["Loops", "Loops repeat statements.", 'for(int i = 1; i <= 5; i++) {\n printf("%d", i);\n}']
        ],
        quiz: [
            {q: "Who developed C?", o: ["Dennis Ritchie", "James Gosling", "Guido"], a: 0},
            {q: "Which function is used for output?", o: ["scanf()", "printf()", "input()"], a: 1},
            {q: "Which symbol ends a C statement?", o: [".", ";", ":"], a: 1},
            {q: "Which header is used for printf?", o: ["stdio.h", "math.h", "string.h"], a: 0},
            {q: "Which data type stores integers?", o: ["int", "char", "float"], a: 0}
        ]
    },

    Java: {
        description: "Java is used for application and software development.",
        lessons: [
            ["Introduction to Java", "Java is an object-oriented programming language.", 'class Main {\n public static void main(String[] args) {\n  System.out.println("Hello");\n }\n}'],
            ["Variables", "Variables store values.", 'int age = 20;\nString name = "Bhagya";'],
            ["Data Types", "Java has int, float, char, boolean and more.", 'int number = 10;\nboolean status = true;'],
            ["If Else", "If else is used for decisions.", 'if (age >= 18) {\n System.out.println("Adult");\n} else {\n System.out.println("Minor");\n}'],
            ["Loops", "Loops repeat code.", 'for(int i = 1; i <= 5; i++) {\n System.out.println(i);\n}']
        ],
        quiz: [
            {q: "Java was developed by?", o: ["James Gosling", "Dennis Ritchie", "Guido"], a: 0},
            {q: "Which keyword creates a class?", o: ["class", "define", "function"], a: 0},
            {q: "Which statement prints output?", o: ["print()", "System.out.println()", "echo"], a: 1},
            {q: "Which data type stores true or false?", o: ["int", "boolean", "char"], a: 1},
            {q: "Which keyword is used for inheritance?", o: ["extends", "repeat", "include"], a: 0}
        ]
    },

    HTML: {
        description: "HTML is used to create the structure of web pages.",
        lessons: [
            ["Introduction to HTML", "HTML stands for HyperText Markup Language.", '<h1>Hello World</h1>'],
            ["Headings", "HTML has six heading levels.", '<h1>Main Heading</h1>\n<h2>Sub Heading</h2>'],
            ["Paragraphs", "The p tag creates a paragraph.", '<p>This is a paragraph.</p>'],
            ["Links", "The a tag creates a link.", '<a href="https://example.com">Visit Website</a>'],
            ["Images", "The img tag displays an image.", '<img src="photo.jpg" alt="My Photo">']
        ],
        quiz: [
            {q: "What does HTML stand for?", o: ["HyperText Markup Language", "High Text Machine Language", "Home Tool Markup"], a: 0},
            {q: "Which tag creates a heading?", o: ["<p>", "<h1>", "<img>"], a: 1},
            {q: "Which tag creates a paragraph?", o: ["<p>", "<a>", "<br>"], a: 0},
            {q: "Which tag creates a link?", o: ["<img>", "<a>", "<h1>"], a: 1},
            {q: "Which tag displays an image?", o: ["<image>", "<picture>", "<img>"], a: 2}
        ]
    },

    CSS: {
        description: "CSS is used to style and design web pages.",
        lessons: [
            ["Introduction to CSS", "CSS stands for Cascading Style Sheets.", 'h1 {\n color: blue;\n}'],
            ["Colors", "CSS can change text and background colors.", 'p {\n color: red;\n background-color: yellow;\n}'],
            ["Fonts", "CSS controls text appearance.", 'p {\n font-size: 20px;\n font-family: Arial;\n}'],
            ["Margins", "Margins create space outside elements.", 'div {\n margin: 20px;\n}'],
            ["Background", "CSS can add background colors.", 'body {\n background-color: lightblue;\n}']
        ],
        quiz: [
            {q: "What does CSS stand for?", o: ["Cascading Style Sheets", "Computer Style System", "Creative Style Sheet"], a: 0},
            {q: "Which property changes text color?", o: ["font", "color", "background"], a: 1},
            {q: "Which symbol selects a class?", o: ["#", ".", "*"], a: 1},
            {q: "Which property changes text size?", o: ["font-size", "text-color", "size"], a: 0},
            {q: "Which property adds outside space?", o: ["padding", "margin", "border"], a: 1}
        ]
    },

    JavaScript: {
        description: "JavaScript makes websites interactive.",
        lessons: [
            ["Introduction to JavaScript", "JavaScript adds behaviour to web pages.", 'console.log("Hello World");'],
            ["Variables", "Variables store values.", 'let name = "Bhagya";\nconst age = 20;'],
            ["Functions", "Functions are reusable blocks of code.", 'function greet() {\n alert("Hello");\n}\ngreet();'],
            ["If Else", "If else checks conditions.", 'let age = 18;\nif (age >= 18) {\n alert("Adult");\n} else {\n alert("Minor");\n}'],
            ["Loops", "Loops repeat code.", 'for(let i = 1; i <= 5; i++) {\n console.log(i);\n}']
        ],
        quiz: [
            {q: "JavaScript is used for?", o: ["Styling only", "Adding interactivity", "Creating images only"], a: 1},
            {q: "Which keyword declares a variable?", o: ["let", "print", "int"], a: 0},
            {q: "Which function displays an alert?", o: ["alert()", "show()", "display()"], a: 0},
            {q: "Which symbol is used for strict equality?", o: ["=", "===", "+"], a: 1},
            {q: "Which keyword declares a function?", o: ["function", "method", "create"], a: 0}
        ]
    }
};

let progress = JSON.parse(localStorage.getItem("skillUpProgress") || "{}");
let selectedCourses = [];

function saveProgress() {
    localStorage.setItem("skillUpProgress", JSON.stringify(progress));
}

function getCourseProgress(name) {
    if (!progress[name]) {
        progress[name] = {lessons: [], passed: false};
    }
    return progress[name];
}

function initialize() {
    const list = document.getElementById("languageList");

    list.innerHTML = Object.keys(courses).map(name => `
        <label class="language-option">
            <input type="checkbox" value="${name}">
            ${name}
        </label>
    `).join("");

    updateProgress();
}

function startLearning() {
    selectedCourses = Array.from(
        document.querySelectorAll("#languageList input:checked")
    ).map(input => input.value);

    if (selectedCourses.length === 0) {
        alert("Please select at least one programming language.");
        return;
    }

    document.getElementById("courseArea").innerHTML = "";

    selectedCourses.forEach(name => showCourse(name));

    document.getElementById("courseArea").scrollIntoView({behavior: "smooth"});
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function showCourse(name) {
    const course = courses[name];
    const courseProgress = getCourseProgress(name);

    let html = `
        <div class="course-card">
            <h2>${escapeHTML(name)} Course</h2>
            <p>${escapeHTML(course.description)}</p>
            <h3>Lessons</h3>
    `;

    course.lessons.forEach((lesson, index) => {
        const checked = courseProgress.lessons.includes(index);

        html += `
            <div class="lesson">
                <h3>${index + 1}. ${escapeHTML(lesson[0])}</h3>
                <p>${escapeHTML(lesson[1])}</p>
                <pre>${escapeHTML(lesson[2])}</pre>
                <label>
                    <input type="checkbox"
                        ${checked ? "checked" : ""}
                        onchange="toggleLesson('${name}', ${index}, this.checked)">
                    Mark lesson as completed
                </label>
            </div>
        `;
    });

    html += `
        <div id="quiz-${name}">
            <h3>Quiz - ${escapeHTML(name)}</h3>
            <p>Complete all five lessons before starting the quiz.</p>
            <button class="btn" onclick="showQuiz('${name}')">Start Quiz</button>
        </div>
        </div>
    `;

    document.getElementById("courseArea").insertAdjacentHTML("beforeend", html);
}

function toggleLesson(name, index, checked) {
    const courseProgress = getCourseProgress(name);

    if (checked) {
        if (!courseProgress.lessons.includes(index)) {
            courseProgress.lessons.push(index);
        }
    } else {
        courseProgress.lessons = courseProgress.lessons.filter(i => i !== index);
        courseProgress.passed = false;
    }

    saveProgress();
    updateProgress();

    const quizArea = document.getElementById("quiz-" + name);
    if (quizArea) {
        quizArea.innerHTML = `
            <h3>Quiz - ${escapeHTML(name)}</h3>
            <p>Complete all five lessons before starting the quiz.</p>
            <button class="btn" onclick="showQuiz('${name}')">Start Quiz</button>
        `;
    }
}

function showQuiz(name) {
    const courseProgress = getCourseProgress(name);

    if (courseProgress.lessons.length !== 5) {
        alert("Please complete all five lessons first.");
        return;
    }

    const quiz = courses[name].quiz;
    let html = `<h3>${escapeHTML(name)} Quiz</h3><form id="form-${name}">`;

    quiz.forEach((question, index) => {
        html += `
            <div class="quiz-question">
                <p><strong>${index + 1}. ${escapeHTML(question.q)}</strong></p>
        `;

        question.o.forEach((option, optionIndex) => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${optionIndex}">
                    ${escapeHTML(option)}
                </label>
            `;
        });

        html += `</div>`;
    });

    html += `
        <button type="button" class="btn" onclick="submitQuiz('${name}')">
            Submit Quiz
        </button>
        </form>
        <p id="result-${name}"></p>
    `;

    document.getElementById("quiz-" + name).innerHTML = html;
}

function submitQuiz(name) {
    const form = document.getElementById("form-" + name);
    const quiz = courses[name].quiz;
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);

        if (!answer) {
            alert("Please answer all questions.");
            return;
        }

        if (Number(answer.value) === quiz[i].a) {
            score++;
        }
    }

    const percentage = (score / quiz.length) * 100;
    const courseProgress = getCourseProgress(name);

    if (percentage >= 60) {
        courseProgress.passed = true;
        document.getElementById("result-" + name).innerHTML =
            `Congratulations! You scored ${percentage}%. Quiz passed!`;
    } else {
        courseProgress.passed = false;
        document.getElementById("result-" + name).innerHTML =
            `You scored ${percentage}%. Please try again.`;
    }

    saveProgress();
    updateProgress();
}

function updateProgress() {
    let totalLessons = 0;
    let completedLessons = 0;
    let passedQuizzes = 0;

    Object.keys(courses).forEach(name => {
        const courseProgress = getCourseProgress(name);
        totalLessons += 5;
        completedLessons += courseProgress.lessons.length;

        if (courseProgress.passed) {
            passedQuizzes++;
        }
    });

    const totalTasks = totalLessons + Object.keys(courses).length;
    const completedTasks = completedLessons + passedQuizzes;
    const percentage = Math.round((completedTasks / totalTasks) * 100);

    document.getElementById("progressText").textContent =
        percentage + "% Completed";

    document.getElementById("progressFill").style.width =
        percentage + "%";

    document.getElementById("courseProgress").innerHTML =
        Object.keys(courses).map(name => {
            const p = getCourseProgress(name);
            const complete = p.lessons.length === 5 && p.passed;

            return `
                <p>${escapeHTML(name)}: ${p.lessons.length}/5 lessons |
                Quiz: ${p.passed ? "Passed" : "Not passed"} |
                ${complete ? "Course completed" : "In progress"}</p>
            `;
        }).join("");

    updateCertificateOptions();
}

function updateCertificateOptions() {
    const select = document.getElementById("certificateCourse");
    const previousValue = select.value;

    select.innerHTML = `<option value="">Select completed course</option>`;

    Object.keys(courses).forEach(name => {
        const p = getCourseProgress(name);

        if (p.lessons.length === 5 && p.passed) {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        }
    });

    if ([...select.options].some(option => option.value === previousValue)) {
        select.value = previousValue;
    }
}

function generateCertificate() {
    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("certificateCourse").value;
    const message = document.getElementById("certificateMessage");
    const area = document.getElementById("certificateArea");

    if (!name) {
        message.textContent = "Please enter your name.";
        return;
    }

    if (!course) {
        message.textContent =
            "Complete all five lessons and pass a course quiz first.";
        return;
    }

    const p = getCourseProgress(course);

    if (p.lessons.length !== 5 || !p.passed) {
        message.textContent = "Complete the progress first.";
        return;
    }

    message.textContent = "Your certificate is ready!";

    area.innerHTML = `
        <div class="certificate">
            <h2>SkillUp</h2>
            <h3>Certificate of Completion</h3>
            <p>This certificate is proudly presented to</p>
            <h2>${escapeHTML(name)}</h2>
            <p>For successfully completing the course</p>
            <h3>${escapeHTML(course)}</h3>
            <p>Learn. Grow. Succeed.</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
        <button class="btn" onclick="window.print()">Print Certificate</button>
    `;

    area.scrollIntoView({behavior: "smooth"});
}

initialize();
