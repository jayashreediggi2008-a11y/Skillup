/* ---------- DATA ---------- */
var skills = {
    web: {
        icon: "💻", title: "Web Development",
        desc: "Learn to build websites using HTML, CSS and JavaScript.",
        level: "Beginner", duration: "6 weeks",
        topics: ["HTML basics", "CSS styling", "JavaScript basics", "Responsive design", "GitHub Pages"]
    },
    java: {
        icon: "☕", title: "Java Programming",
        desc: "Understand Java basics and object-oriented programming.",
        level: "Beginner to Intermediate", duration: "8 weeks",
        topics: ["Variables and data types", "Loops and conditions", "Classes and objects", "Inheritance", "Exception handling"]
    },
    python: {
        icon: "🐍", title: "Python Programming",
        desc: "Start coding with simple and powerful Python.",
        level: "Beginner", duration: "5 weeks",
        topics: ["Syntax and variables", "Lists and dictionaries", "Functions", "File handling", "Small projects"]
    },
    comm: {
        icon: "🗣️", title: "Communication Skills",
        desc: "Improve speaking, writing and confidence.",
        level: "All levels", duration: "4 weeks",
        topics: ["Public speaking", "Email writing", "Body language", "Interview skills"]
    },
    design: {
        icon: "🎨", title: "Graphic Design",
        desc: "Create attractive designs and visuals.",
        level: "Beginner", duration: "5 weeks",
        topics: ["Colors and fonts", "Layout basics", "Logo design", "Poster design"]
    }
};

var questions = [
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], answer: 0 },
    { q: "Which language is used for styling web pages?", options: ["Java", "CSS", "Python"], answer: 1 },
    { q: "Which symbol starts a comment in Python?", options: ["#", "//", "<!--"], answer: 0 },
    { q: "Which keyword creates a class in Java?", options: ["function", "class", "define"], answer: 1 },
    { q: "Which is a good habit for public speaking?", options: ["Speaking very fast", "Making eye contact", "Avoiding practice"], answer: 1 }
];

/* ---------- SAVE / LOAD (browser storage) ---------- */
function loadProgress() {
    try { return JSON.parse(localStorage.getItem("skillupProgress")) || {}; }
    catch (e) { return {}; }
}

function saveProgress(data) {
    try { localStorage.setItem("skillupProgress", JSON.stringify(data)); }
    catch (e) {}
}

/* ---------- MENU ---------- */
function toggleMenu() {
    var menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
}

/* ---------- PAGE SWITCHING ---------- */
function showPage() {
    var id = window.location.hash.replace("#", "") || "home";
    var pages = document.querySelectorAll(".page");
    var found = false;

    pages.forEach(function (p) {
        if (p.id === id) {
            p.classList.add("active");
            found = true;
        } else {
            p.classList.remove("active");
        }
    });

    if (!found) {
        document.getElementById("home").classList.add("active");
    }

    document.getElementById("navLinks").classList.remove("show");
    window.scrollTo(0, 0);

    if (id === "learning") { renderLearning(); }
}

/* ---------- EXPLORE SKILLS ---------- */
function renderSkills() {
    var html = "";
    for (var key in skills) {
        var s = skills[key];
        html += '<div class="skill-card">' +
                '<div class="skill-icon">' + s.icon + '</div>' +
                '<h3>' + s.title + '</h3>' +
                '<p>' + s.desc + '</p>' +
                '<button class="primary-btn btn-plain btn-small" onclick="openSkill(\'' + key + '\')">Learn More</button>' +
                '</div>';
    }
    document.getElementById("skillsList").innerHTML = html;
}

function openSkill(key) {
    var s = skills[key];
    document.getElementById("mIcon").textContent = s.icon;
    document.getElementById("mTitle").textContent = s.title;
    document.getElementById("mDesc").textContent = s.desc;
    document.getElementById("mLevel").textContent = s.level;
    document.getElementById("mDuration").textContent = s.duration;

    var list = "";
    s.topics.forEach(function (t) { list += "<li>" + t + "</li>"; });
    document.getElementById("mTopics").innerHTML = list;

    var btn = document.getElementById("mStartBtn");
    var progress = loadProgress();
    btn.textContent = (key in progress) ? "Already in My Learning" : "Start Learning";
    btn.onclick = function () { startSkill(key); };

    document.getElementById("skillModal").classList.add("open");
}

function closeModal() {
    document.getElementById("skillModal").classList.remove("open");
}

function startSkill(key) {
    var progress = loadProgress();
    if (!(key in progress)) {
        progress[key] = 0;
        saveProgress(progress);
    }
    closeModal();
    window.location.hash = "#learning";
}

/* ---------- MY LEARNING ---------- */
function renderLearning() {
    var progress = loadProgress();
    var html = "";
    var count = 0;

    for (var key in progress) {
        if (!skills[key]) { continue; }
        count++;
        var s = skills[key];
        var p = progress[key];
        html += '<div class="skill-card">' +
                '<div class="skill-icon">' + s.icon + '</div>' +
                '<h3>' + s.title + '</h3>' +
                '<p>Progress: ' + p + '%</p>' +
                '<div class="progress-bar"><div class="progress-fill" style="width:' + p + '%"></div></div>' +
                '<button class="primary-btn btn-plain btn-small" onclick="addProgress(\'' + key + '\')">' +
                (p >= 100 ? "Completed 🎉" : "+10% Progress") + '</button>' +
                '</div>';
    }

    if (count === 0) {
        html = '<div class="empty-box">You have not started any skill yet.<br><br>' +
               '<a href="#skills" class="primary-btn">Explore Skills</a></div>';
    }

    document.getElementById("learningList").innerHTML = html;
}

function addProgress(key) {
    var progress = loadProgress();
    if (progress[key] < 100) {
        progress[key] = Math.min(100, progress[key] + 10);
        saveProgress(progress);
        renderLearning();
    }
}

/* ---------- QUIZ ---------- */
function renderQuiz() {
    var html = "";
    questions.forEach(function (item, i) {
        html += '<h3 class="quiz-q">' + (i + 1) + '. ' + item.q + '</h3>';
        item.options.forEach(function (opt, j) {
            html += '<p><label><input type="radio" name="q' + i + '" value="' + j + '"> ' + opt + '</label></p>';
        });
    });
    document.getElementById("quizBox").innerHTML = html;
}

function checkQuiz() {
    var score = 0;
    var answered = 0;

    questions.forEach(function (item, i) {
        var chosen = document.querySelector('input[name="q' + i + '"]:checked');
        if (chosen) {
            answered++;
            if (parseInt(chosen.value, 10) === item.answer) { score++; }
        }
    });

    var result = document.getElementById("quizResult");

    if (answered < questions.length) {
        result.textContent = "Please answer all " + questions.length + " questions.";
        return;
    }

    var message = score === questions.length ? "Excellent! 🏆" :
                  score >= 3 ? "Good job! 👍" : "Keep practicing! 💪";
    result.textContent = "Your score: " + score + " / " + questions.length + " - " + message;
}

/* ---------- LOGIN ---------- */
function updateLoginButton() {
    var name = "";
    try { name = localStorage.getItem("skillupUser") || ""; } catch (e) {}
    var btn = document.getElementById("loginBtn");
    btn.textContent = name ? "Hi, " + name : "Login";
}

function loginUser() {
    var name = document.getElementById("userName").value.trim();
    var pass = document.getElementById("userPass").value;
    var msg = document.getElementById("loginMsg");

    if (name === "" || pass === "") {
        msg.textContent = "Please enter your name and password.";
        return;
    }

    try { localStorage.setItem("skillupUser", name); } catch (e) {}
    msg.textContent = "Welcome, " + name + "! You are logged in.";
    updateLoginButton();
}

/* ---------- START ---------- */
window.addEventListener("hashchange", showPage);

document.getElementById("skillModal").addEventListener("click", function (e) {
    if (e.target === this) { closeModal(); }
});

renderSkills();
renderQuiz();
updateLoginButton();
showPage();