let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */

let userAnswers = [];

//Array Reasons 

let reasons = [{

reason: "Peripheral vision is extremely sensitive to motion and flicker, so latency at the edges of VR lenses can quickly cause discomfort and nausea."

},{

reason: "The Vergence-Accommodation Conflict occurs because the eyes focus on a nearby physical screen while simultaneously converging on virtual objects that appear far away."

},{

reason: "Foveated Rendering improves performance by rendering the center of the user's gaze in high detail while reducing detail in peripheral areas."

},{

reason: "Setting Spatial Blend to 1.0 makes the Audio Source fully 3D so the sound appears to come from a specific location in space."

},{

reason: "Floor mode aligns the virtual world with the user's real standing height and movement for room-scale VR experiences."

},{

reason: "Stereopsis only works effectively at shorter distances because binocular disparity becomes too small to detect for distant objects."

},{

reason: "The Doppler Effect changes the perceived pitch of sound depending on whether the sound source is moving toward or away from the listener."

},{

reason: "Modern VR headsets typically provide about a 100° field of view, while natural human vision is closer to 200°."

},{

reason: "Motion Parallax is a monocular depth cue where nearby objects appear to move faster than distant objects as the user moves."

},{

reason: "HRTF simulates how sound waves interact with the ears, head, and shoulders to create realistic spatial audio in VR."

}];


/* QUESTION ARRAY */

let questions = [

/* Question 1 */

{
question: "Question 1<br><br>Why is flicker or latency particularly nauseating when it occurs at the edges of the VR lenses?<br>"+
"<br>A. Because peripheral vision is highly sensitive to motion.<br>"+
"<br>B. Because foveal vision only sees in black and white.<br>"+
"<br>C. Because the edges of the lenses have the highest resolution.<br>"+
"<br>D. Because human eyes cannot focus on the center of a screen.<br>",

answer:"A"
},

/* Question 2 */

{
question: "Question 2<br><br>What causes the Vergence-Accommodation Conflict (VAC) in virtual reality?<br>"+
"<br>A. The user's eyes cannot decide which object to look at.<br>"+
"<br>B. The screen refresh rate does not match the game's frame rate.<br>"+
"<br>C. The eyes focus on the physical screen inches away, but rotate to look at a virtual object meters away.<br>"+
"<br>D. The headset's IPD (Interpupillary Distance) is adjusted incorrectly.<br>",

answer:"C"
},

/* Question 3 */

{
question: "Question 3<br><br>What optimization technique renders the center of the user's gaze at high resolution while blurring the edges?<br>"+
"<br>A. Vergence-Accommodation<br>"+
"<br>B. Motion Parallax<br>"+
"<br>C. Foveated Rendering<br>"+
"<br>D. Stereopsis<br>",

answer:"C"
},

/* Question 4 */

{
question: "Question 4<br><br>In Unity, what setting must be applied to an Audio Source to make it sound like it exists in a specific location in 3D space?<br>"+
"<br>A. Set Volume to 1.0<br>"+
"<br>B. Set Spatial Blend to 1.0<br>"+
"<br>C. Set Pitch to 0.0<br>"+
"<br>D. Set Stereo Pan to 0.5<br>",

answer:"B"
},

/* Question 5 */

{
question: "Question 5<br><br>When configuring the XR Origin for a room-scale VR experience where the user will be standing and walking, what should the 'Tracking Origin Mode' generally be set to?<br>"+
"<br>A. Device<br>"+
"<br>B. Floor<br>"+
"<br>C. Main Camera<br>"+
"<br>D. Center<br>",

answer:"B"
},

/* Question 6 */

{
question: "Question 6<br><br>Binocular disparity (Stereopsis) is a powerful depth cue, but it has a physical limitation in VR. What is it?<br>"+
"<br>A. It only works for objects further than 100 meters away.<br>"+
"<br>B. It only works effectively for objects up to approximately 10 meters away.<br>"+
"<br>C. It requires a 3DOF headset to function correctly.<br>"+
"<br>D. It only works if the user closes one eye.<br>",

answer:"B"
},

/* Question 7 */

{
question: "Question 7<br><br>Which auditory effect causes a sound's pitch to increase as it approaches the user and decrease as it moves away?<br>"+
"<br>A. The Doppler Effect<br>"+
"<br>B. Spatial Attenuation<br>"+
"<br>C. The McGurk Effect<br>"+
"<br>D. Logarithmic Rolloff<br>",

answer:"A"
},

/* Question 8 */

{
question: "Question 8<br><br>What is the approximate horizontal Field of View (FOV) of a typical modern VR headset compared to natural human vision?<br>"+
"<br>A. VR is 200°, Human is 100°<br>"+
"<br>B. VR is 100°, Human is 200°<br>"+
"<br>C. Both are 200°<br>"+
"<br>D. Both are 100°<br>",

answer:"B"
},

/* Question 9 */

{
question: "Question 9<br><br>Which of the following is a monocular depth cue that causes close objects to appear to move faster than far objects when you move your head side-to-side?<br>"+
"<br>A. Motion Parallax<br>"+
"<br>B. Texture Gradient<br>"+
"<br>C. Convergence<br>"+
"<br>D. Linear Perspective<br>",

answer:"A"
},

/* Question 10 */

{
question: "Question 10<br><br>How do VR audio engines simulate the way sound is filtered by the physical shape of a human's ears, head, and shoulders?<br>"+
"<br>A. Inverse Square Law (ISL)<br>"+
"<br>B. Head Related Transfer Function (HRTF)<br>"+
"<br>C. Doppler Effect Filtering (DEF)<br>"+
"<br>D. Interaural Time Difference (ITD)<br>",

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


/* SUBMIT FUNCTION */

function submit(){

document.getElementById("scoreDisplay").innerHTML =
"Quiz finished!! Final Score: " + score + "/" + questions.length;

let results = "";

document.getElementById("question").innerHTML ="";
document.getElementById("answerBox").style.display = "none";
document.getElementById("button").style.display = "none";

for(let i = 0; i < questions.length; i++){

results += questions[i].question +

"<br>Your answer is: <span style='color:red'>" +

userAnswers[i] +

"</span><br>" +

"<br>The correct answer is: <span style='color:green'>" +

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
