let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */
let userAnswers = [];

/* STORE ANSWERS + QUESTIONS (UNCHANGED) */
let reasons = [

{ reason: "The Rubber Hand Illusion demonstrates Embodiment Illusion because the brain accepts a fake body part as part of the body." },
{ reason: "In VR development, you should move the XR Origin instead of the Main Camera to avoid tracking problems." },
{ reason: "Immersion refers to the technology, while presence is the psychological feeling of being inside the virtual world." },
{ reason: "Imagination is important because users must mentally accept the virtual environment as real." },
{ reason: "XR Origin connects the user's physical movement and height to the virtual environment." },
{ reason: "The Three I's of Virtual Reality are Immersion, Interaction, and Imagination." },
{ reason: "VR headsets need at least 72–90 FPS to reduce motion sickness and keep the experience smooth." },
{ reason: "Place Illusion gives users the feeling that they are physically inside the virtual world." },
{ reason: "Plausibility Illusion becomes stronger when virtual characters respond naturally to user actions." },
{ reason: "The Sword of Damocles was the first VR headset connected to a computer with real-time head tracking." }

];

let questions = [

{
question: "Question 1<br><br>The 'Rubber Hand Illusion' is a famous psychological experiment often used to explain which VR concept?<br><br>A. Embodiment Illusion<br><br>B. Vestibular Mismatch<br><br>C. Spatial Audio<br><br>D. Teleportation Providers<br>",
answer: "A"
},

{
question: "Question 2<br><br>What is the 'Golden Rule' regarding camera movement when setting up a VR scene in Unity?<br><br>A. Always move the Main Camera directly via script to ensure smooth cinematic transitions.<br><br>B. Never move the Main Camera directly; always move the parent XR Origin instead.<br><br>C. Attach a Rigidbody to the Main Camera so gravity affects the player's vision.<br><br>D. The camera must always be locked at a height of exactly 1.5 meters.<br>",
answer: "B"
},

{
question: "Question 3<br><br>According to VR design principles, what is the primary distinction between 'Immersion' and 'Presence'?<br><br>A. Immersion relates to graphics while presence relates to audio.<br><br>B. Immersion is the technology while presence is the feeling of being there.<br><br>C. Immersion is storytelling while presence is hardware.<br><br>D. There is no difference between the two.<br>",
answer: "B"
},

{
question: "Question 4<br><br>Why is 'Imagination' considered one of the three critical pillars of VR?<br><br>A. Because the user must psychologically accept the digital world.<br><br>B. Because VR cannot render graphics.<br><br>C. Because developers imagine code before writing it.<br><br>D. Because the headset reads thoughts.<br>",
answer: "A"
},

{
question: "Question 5<br><br>In Unity XR Toolkit, what is the primary purpose of the XR Origin component?<br><br>A. It calculates physics collisions.<br><br>B. It bakes lighting and shadows.<br><br>C. It maps the user's movement and height to the virtual camera.<br><br>D. It automatically writes teleportation scripts.<br>",
answer: "C"
},

{
question: "Question 6<br><br>Which elements make up the Three I's of Virtual Reality?<br><br>A. Immersion, Interaction, Imagination<br><br>B. Immersion, Interfaces, Integration<br><br>C. Illustration, Interaction, Intuition<br><br>D. Immersion, Iteration, Implementation<br>",
answer: "A"
},

{
question: "Question 7<br><br>Modern VR headsets require the rendering loop to run at what minimum speed?<br><br>A. 24 to 30 FPS<br><br>B. 60 FPS<br><br>C. 72 to 90 FPS<br><br>D. 144 to 240 FPS<br>",
answer: "C"
},

{
question: "Question 8<br><br>Which illusion gives the sensation of physically being inside the virtual environment?<br><br>A. Plausibility Illusion<br><br>B. Embodiment Illusion<br><br>C. Place Illusion<br><br>D. Foveal Illusion<br>",
answer: "C"
},

{
question: "Question 9<br><br>If a user waves at a virtual character and the character waves back, which illusion becomes stronger?<br><br>A. Place Illusion<br><br>B. Plausibility Illusion<br><br>C. Embodiment Illusion<br><br>D. Optical Illusion<br>",
answer: "B"
},

{
question: "Question 10<br><br>What was the Sword of Damocles famous for being?<br><br>A. The first sensory booth with wind and smells.<br><br>B. The first commercial VR headset.<br><br>C. The first VR game ever created.<br><br>D. The first head-mounted display connected to a computer with real-time head tracking.<br>",
answer: "D"
}

];

/* LOAD QUESTION */
function loadQuestionn() {
    let questionElement = document.getElementById("question");

    questionElement.style.animation = "none";

    setTimeout(() => {
        questionElement.style.animation = "fadeIn 0.5s ease";
    }, 10);

    questionElement.innerHTML = questions[currentQuestion].question;
    document.getElementById("answerBox").value = "";
}

loadQuestionn();

/* NEXT QUESTION */
function nextQuestion() {

    let userAnswer = document.getElementById("answerBox").value.trim().toUpperCase();

    if (userAnswer === "") {
        alert("Please submit your answer first");
        return;
    }

    userAnswers.push(userAnswer);

    if (userAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestionn();
    } else {
        document.getElementById("question").innerHTML = "";
        document.getElementById("answerBox").style.display = "none";
        document.getElementById("button").style.display = "none";

        /* SHOW CENTERED SUBMIT BUTTON */
        document.getElementById("button2").style.display = "block";
        document.getElementById("button2").style.margin = "20px auto";
    }
}

/* SUBMIT */
function submit() {

    let results = "";

    for (let i = 0; i < questions.length; i++) {

        results +=
            questions[i].question +

            "<br><br>Your answer: <span style='color:red'>" +
            userAnswers[i] +
            "</span><br>" +

            "Correct answer: <span style='color:green'>" +
            questions[i].answer +
            "<br><br>" +

            reasons[i].reason +

           "</span><br><br>" + "<br><hr><br>";
    }

    results += `
    <h2>Total Score: ${score}/${questions.length}</h2>

    <br>

    <div class="home-btn-container">
      <a href="../index.html">
            <button class="home-btn">
                Go Back Home
            </button>
        </a>
    </div>
`;
    document.getElementById("quiz").innerHTML = results;
}
