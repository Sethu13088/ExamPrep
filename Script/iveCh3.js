let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */

let userAnswers = [];

//Array Reasons 

let reasons = [{

reason: "According to the Poison Hypothesis, the brain treats conflicting sensory information as if a neurotoxin has been consumed and triggers nausea to protect the body."

},{

reason: "Sensory Conflict occurs when the eyes detect movement while the vestibular system in the inner ear senses that the body is stationary."

},{

reason: "Teleportation avoids continuous motion and acceleration, eliminating vestibular mismatch and reducing motion sickness."

},{

reason: "A visible cockpit provides a stable frame of reference that helps the brain interpret movement more comfortably."

},{

reason: "A dynamic vignette reduces peripheral motion during movement, which lowers sensory conflict and motion sickness."

},{

reason: "Motion-to-photon latency should stay below about 20 milliseconds to maintain comfort and prevent VR sickness."

},{

reason: "Snap turning avoids continuous rotational movement, greatly reducing vestibular discomfort and nausea."

},{

reason: "Pitch and roll movements are especially uncomfortable because they strongly conflict with signals from the vestibular system."

},{

reason: "Vection is the illusion of self-motion created entirely through visual stimulation."

},{

reason: "Judder or ghosting happens when the frame rate is lower than the display refresh rate, causing duplicated or smeared images."

}];


/* QUESTION ARRAY */

let questions = [

/* Question 1 */

{
question: "Question 1<br><br>According to the evolutionary 'Poison Hypothesis,' why does vestibular mismatch cause nausea and vomiting?<br>"+
"<br>A. The inner ear physically swells when it cannot detect motion, causing stomach discomfort.<br>"+
"<br>B. The brain interprets the conflicting sensory signals as a sign of having ingested a neurotoxin, triggering a reflex to empty the stomach.<br>"+
"<br>C. The optic nerve gets overstimulated by VR lenses, which directly stimulates the digestive tract.<br>"+
"<br>D. The brain reduces blood flow to the stomach to prioritize visual processing.<br>",

answer:"B"
},

/* Question 2 */

{
question: "Question 2<br><br>Which of the following best describes the 'Sensory Conflict' theory of motion sickness in VR?<br>"+
"<br>A. The eyes perceive motion while the inner ear's vestibular system perceives the body as stationary.<br>"+
"<br>B. The headset refresh rate does not match the frame rate of the application.<br>"+
"<br>C. The virtual environment is too brightly lit, causing severe eye strain.<br>"+
"<br>D. The user's physical play space is too small for room-scale tracking.<br>",

answer:"A"
},

/* Question 3 */

{
question: "Question 3<br><br>Why is 'Teleportation' considered one of the most comfortable VR locomotion strategies?<br>"+
"<br>A. It maintains a constant, smooth velocity that the inner ear prefers.<br>"+
"<br>B. It completely eliminates optical flow and acceleration, preventing vestibular mismatch.<br>"+
"<br>C. It forces the user to physically walk around their room.<br>"+
"<br>D. It increases the frame rate of the application during movement.<br>",

answer:"B"
},

/* Question 4 */

{
question: "Question 4<br><br>Why are users generally more comfortable in a VR driving or flight simulator than in a VR walking simulator with smooth movement?<br>"+
"<br>A. Vehicles in VR naturally move slower than walking speeds.<br>"+
"<br>B. Simulators do not use 3D graphics, relying on 360-degree video instead.<br>"+
"<br>C. The visible cockpit provides a static, fixed frame of reference that grounds the user's vision.<br>"+
"<br>D. The vestibular system naturally shuts off when the brain thinks it is driving.<br>",

answer:"C"
},

/* Question 5 */

{
question: "Question 5<br><br>If a VR application must use smooth, artificial joystick movement, what design technique can be used to significantly reduce motion sickness?<br>"+
"<br>A. Increasing the field of view (FOV) to 200 degrees to match human vision.<br>"+
"<br>B. Adding a realistic motion blur effect to the camera.<br>"+
"<br>C. Applying a dynamic vignette (tunneling) to restrict peripheral vision during movement.<br>"+
"<br>D. Making the virtual environment extremely dark.<br>",

answer:"C"
},

/* Question 6 */

{
question: "Question 6<br><br>To maintain comfort and prevent sickness, what is the generally accepted maximum threshold for 'motion-to-photon' latency in a VR headset?<br>"+
"<br>A. 20 milliseconds<br>"+
"<br>B. 60 milliseconds<br>"+
"<br>C. 100 milliseconds<br>"+
"<br>D. 250 milliseconds<br>",

answer:"A"
},

/* Question 7 */

{
question: "Question 7<br><br>When designing turning mechanics for users who are seated or facing forward, which approach is the safest for comfort?<br>"+
"<br>A. Smooth turning, where the camera slowly rotates continuously via a joystick.<br>"+
"<br>B. Snap turning, where the camera instantly rotates in fixed increments (e.g., 45 degrees).<br>"+
"<br>C. Inverted turning, where pushing left turns the camera right.<br>"+
"<br>D. Head-locked turning, where the user must physically spin their chair.<br>",

answer:"B"
},

/* Question 8 */

{
question: "Question 8<br><br>Which type of artificial camera movement is statistically the most dangerous for inducing severe motion sickness?<br>"+
"<br>A. Pitch and Roll (tilting the horizon line up/down or sideways).<br>"+
"<br>B. Linear forward acceleration.<br>"+
"<br>C. Vertical upward movement (like an elevator).<br>"+
"<br>D. Instantaneous teleportation.<br>",

answer:"A"
},

/* Question 9 */

{
question: "Question 9<br><br>In VR terminology, what does 'Vection' refer to?<br>"+
"<br>A. The delay between moving your head and the screen updating.<br>"+
"<br>B. The process of teleporting from one location to another.<br>"+
"<br>C. The illusion of self-motion induced solely by visual stimulation.<br>"+
"<br>D. The blurring of objects in the peripheral vision.<br>",

answer:"C"
},

/* Question 10 */

{
question: "Question 10<br><br>What visual artifact occurs when an application's frame rate drops below the headset's physical refresh rate (e.g., running at 45 FPS on a 90Hz display)?<br>"+
"<br>A. Chromatic aberration, where colors separate at the edges of lenses.<br>"+
"<br>B. Judder or ghosting, where the image appears to smear or double.<br>"+
"<br>C. Screen-door effect, where the gaps between pixels become visible.<br>"+
"<br>D. Z-fighting, where two textures flicker rapidly over each other.<br>",

answer:"B"
}

];


/* LOAD QUESTION FUNCTION */

function loadQuestionn(){

let questionElement = document.getElementById("question");

questionElement.style.animation = "none";

setTimeout(() => {
questionElement.style.animation = "fadeIn 0.5s ease";
},10);

questionElement.innerHTML = questions[currentQuestion].question;

document.getElementById("answerBox").value = "";
}

loadQuestionn();


/* NEXT QUESTION FUNCTION */

function nextQuestion(){

let userAnswer = document.getElementById("answerBox").value.trim().toUpperCase();

/* SAVE USER ANSWER */

userAnswers.push(userAnswer);

if(userAnswer === questions[currentQuestion].answer){

score = score + 1;

}

if(document.getElementById("answerBox").value === ""){

alert("Please submit your answer first");

}else{

currentQuestion = currentQuestion + 1;

if(currentQuestion < questions.length){

loadQuestionn();

}else{

document.getElementById("question").innerHTML ="";
document.getElementById("answerBox").style.display = "none";
document.getElementById("button").style.display = "none";

}

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
