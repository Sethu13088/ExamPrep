let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */

let userAnswers = [];

//Array Reasons 

let reasons = [{

reason: "Immersion refers to the objective quality of the system, while Presence is the subjective feeling of actually being there. High graphics alone do not guarantee Presence."

},{

reason: "Place Illusion collapses when tracking latency breaks the 1-to-1 correlation between physical movement and virtual movement."

},{

reason: "Plausibility Illusion is strengthened when the virtual world reacts naturally and believably to the user's actions."

},{

reason: "Embodiment Illusion occurs when users perceive a virtual body or body part as belonging to themselves."

},{

reason: "Imagination allows users to mentally accept and engage with stylized or unrealistic environments as if they were real."

},{

reason: "Interaction is essential in VR because users must be able to manipulate or affect the virtual environment."

},{

reason: "Field of View (FOV) determines how much of the virtual world is visible and strongly impacts immersion."

},{

reason: "The Sword of Damocles introduced the first computer-connected head-mounted display with head tracking."

},{

reason: "Directly moving the Main Camera breaks the physical tracking relationship and causes severe vestibular mismatch."

},{

reason: "The XR Origin should be moved instead of the Main Camera so physical head tracking remains accurate."

},{

reason: "Stereopsis becomes ineffective at long distances because binocular disparity is too small for the brain to detect."

},{

reason: "Motion Parallax occurs when nearby objects move faster across vision than distant objects during head movement."

},{

reason: "The Vergence-Accommodation Conflict happens because the eyes converge at one depth while focusing at another."

},{

reason: "Foveated Rendering saves GPU power by rendering only the user's focal point in high detail."

},{

reason: "Interaural Time Difference (ITD) helps determine sound direction by measuring arrival time differences between ears."

},{

reason: "Visual Dominance occurs when the brain prioritizes visual information over auditory information."

},{

reason: "Peripheral vision contains many rods for motion detection but few cones for color and detail recognition."

},{

reason: "Dark Adaptation is the biological process where eyes gradually adjust to low-light conditions."

},{

reason: "Spatial Blend set to 1.0 enables full 3D spatial audio and HRTF directional sound processing."

},{

reason: "The Doppler Effect changes the perceived pitch of moving sound sources based on relative motion."

},{

reason: "Sensory Conflict Theory states that mismatched sensory signals trigger nausea because the brain interprets them as poisoning."

},{

reason: "Teleportation avoids continuous motion and acceleration, eliminating vestibular mismatch entirely."

},{

reason: "Dynamic tunneling vignettes reduce peripheral motion, minimizing sensory conflict during artificial locomotion."

},{

reason: "Judder occurs when frame rates are too low, causing image stuttering and latency smear during head movement."

},{

reason: "Snap Turning avoids continuous rotational movement, greatly reducing VR motion sickness."

},{

reason: "A static frame of reference such as a cage helps stabilize vision and reduce discomfort."

},{

reason: "Blink transitions hide sudden spatial jumps and eliminate visible optical flow during teleportation."

},{

reason: "Instant acceleration is generally less nauseating than gradual acceleration because it minimizes prolonged vestibular mismatch."

},{

reason: "Guardian systems keep users safe by warning them when they approach real-world physical boundaries."

},{

reason: "Physical climbing aligns visual movement with proprioceptive feedback, resolving sensory conflict."

}];


/* QUESTION ARRAY */

let questions = [

/* Question 1 */

{
question: "Question 1<br><br>The client complains that while the graphics (resolution and polygon count) of AeroMech VR are incredibly lifelike, users do not feel like they are actually 'standing on the platform.' According to Jerald's theories, what is the client describing?<br>"+
"<br>A. The simulation has achieved high Immersion but is failing to establish Presence.<br>"+
"<br>B. The simulation has achieved high Presence but is failing to establish Immersion.<br>"+
"<br>C. The simulation is suffering from a lack of Interaction Fidelity.<br>"+
"<br>D. The simulation is triggering the 'Poison Hypothesis'.<br>",

answer:"A"
},

/* Question 2 */

{
question: "Question 2<br><br>A user is inspecting the jet engine. When they physically lean forward to look inside the turbine, the camera inside the simulation lags behind their physical movement by 80 milliseconds. The user immediately states they no longer feel like they are in the hangar. Which specific illusion of presence has just collapsed?<br>"+
"<br>A. Place Illusion<br>"+
"<br>B. Plausibility Illusion<br>"+
"<br>C. Embodiment Illusion<br>"+
"<br>D. Vestibular Illusion<br>",

answer:"A"
},

/* Question 3 */

{
question: "Question 3<br><br>You add a virtual AI assistant to the platform. If the user waves at the AI, the AI looks at the user and waves back. By ensuring the virtual world acknowledges the user's actions, which illusion of presence are you actively strengthening?<br>"+
"<br>A. Place Illusion<br>"+
"<br>B. Plausibility Illusion<br>"+
"<br>C. Embodiment Illusion<br>"+
"<br>D. The Rubber Hand Illusion<br>",

answer:"B"
},

/* Question 4 */

{
question: "Question 4<br><br>The user looks down and sees highly detailed virtual gloves that perfectly track their real-world finger movements. They report feeling a strong sense that these virtual hands are their own physical hands. Which illusion of presence has been achieved?<br>"+
"<br>A. Embodiment Illusion<br>"+
"<br>B. Place Illusion<br>"+
"<br>C. Plausibility Illusion<br>"+
"<br>D. Vestibular Illusion<br>",

answer:"A"
},

/* Question 5 */

{
question: "Question 5<br><br>The jet engine isn't photorealistic; it is stylized with a low-poly, cel-shaded aesthetic to save performance. However, users still feel fully engaged and treat the engine as if it were real. According to the 'Three I's' of VR, which concept explains this willingness to accept the stylized world?<br>"+
"<br>A. Imagination<br>"+
"<br>B. Immersion<br>"+
"<br>C. Interaction<br>"+
"<br>D. Iteration<br>",

answer:"A"
},

/* Question 6 */

{
question: "Question 6<br><br>If a user can look around the jet engine in full 360 degrees and hear the spatial audio perfectly, but they cannot pick up any tools, push any buttons, or alter the environment in any way, which of the 'Three I's' of VR is completely missing from this experience?<br>"+
"<br>A. Interaction<br>"+
"<br>B. Immersion<br>"+
"<br>C. Imagination<br>"+
"<br>D. Isolation<br>",

answer:"A"
},

/* Question 7 */

{
question: "Question 7<br><br>A user complains that looking through the training headset feels like looking through a narrow scuba mask, reducing their sense of immersion. What technical objective property of the headset hardware is responsible for this limitation?<br>"+
"<br>A. Field of View (FOV)<br>"+
"<br>B. Refresh Rate<br>"+
"<br>C. Interpupillary Distance (IPD)<br>"+
"<br>D. Motion-to-Photon Latency<br>",

answer:"A"
},

/* Question 8 */

{
question: "Question 8<br><br>During a presentation, you explain that the standalone headset your students are using traces its conceptual roots back to 1968, when Ivan Sutherland created a massive, ceiling-suspended rig. What was the critical innovation of this 'Sword of Damocles'?<br>"+
"<br>A. It was the first head-mounted display (HMD) to feature real-time head tracking connected to a computer display.<br>"+
"<br>B. It was the first mechanical booth to introduce wind, smell, and vibration.<br>"+
"<br>C. It was the first commercial VR headset sold for home entertainment.<br>"+
"<br>D. It introduced wireless, standalone processing.<br>",

answer:"A"
},

/* Question 9 */

{
question: "Question 9<br><br>During setup, the junior developer writes a script that automatically moves the Unity 'Main Camera' 5 meters into the air so the user can see the top of the engine. Why is this a severe technical violation of VR design rules?<br>"+
"<br>A. Moving the camera via script disables the headset's physical display screens.<br>"+
"<br>B. It breaks the tracking correlation between the physical user and the virtual head, resulting in severe vestibular mismatch and nausea.<br>"+
"<br>C. It prevents the Unity physics engine from calculating gravity on the camera.<br>"+
"<br>D. It causes the Spatial Audio listener to mute all sounds.<br>",

answer:"B"
},

/* Question 10 */

{
question: "Question 10<br><br>To fix the camera height issue mentioned previously, how should you correctly elevate the user to view the top of the jet engine in Unity?<br>"+
"<br>A. Translate the position of the XR Origin (or teleport the user) to a higher platform, leaving the Main Camera untouched.<br>"+
"<br>B. Attach a Rigidbody to the Main Camera and apply an upward force.<br>"+
"<br>C. Increase the 'Camera Offset' Y-value to 5 meters.<br>"+
"<br>D. Disable 6DOF tracking and rely on 3DOF rotation only.<br>",

answer:"A"
},

/* Question 11 */

{
question: "Question 11<br><br>The user drops a wrench off the platform. As it falls toward the ground 500 meters below, the user watches it disappear. At this extreme distance, why is the user's brain no longer relying on 'Stereopsis' to perceive the wrench's depth?<br>"+
"<br>A. Stereopsis requires the object to be moving horizontally, not vertically.<br>"+
"<br>B. Because the distance between the user's eyes (IPD) is too small to calculate binocular disparity for objects further than ~10 meters away.<br>"+
"<br>C. Because the VR headset's field of view (FOV) is too narrow to track falling objects.<br>"+
"<br>D. Because falling objects trigger the vergence-accommodation conflict, blinding the depth sensors.<br>",

answer:"B"
},

/* Question 12 */

{
question: "Question 12<br><br>A user sways their head left and right while looking at the engine. The engine components directly in front of their face appear to move quickly in the opposite direction, while the distant hangar walls barely move at all. What physiological depth cue is providing this volumetric data?<br>"+
"<br>A. Binocular Disparity<br>"+
"<br>B. Vergence-Accommodation<br>"+
"<br>C. Motion Parallax<br>"+
"<br>D. Linear Perspective<br>",

answer:"C"
},

/* Question 13 */

{
question: "Question 13<br><br>A user complains of a severe headache after reading the virtual repair manual for 30 minutes. The manual is held virtually 15cm from their face. The headset screens are physically 2cm from their eyes, but the lenses focus the light at an optical distance of 2 meters. What biological conflict is causing the headache?<br>"+
"<br>A. The Vergence-Accommodation Conflict (VAC).<br>"+
"<br>B. Vestibular Mismatch.<br>"+
"<br>C. The McGurk Effect.<br>"+
"<br>D. Foveal Rendering Strain.<br>",

answer:"A"
},

/* Question 14 */

{
question: "Question 14<br><br>To save GPU power, the simulation uses eye-tracking hardware to render the exact bolt the user is looking at in crisp 4K resolution, while the edges of the screen drop to a blurry 480p. What is this visual optimization technique called?<br>"+
"<br>A. Foveated Rendering<br>"+
"<br>B. Occlusion Culling<br>"+
"<br>C. Mipmapping<br>"+
"<br>D. Dynamic Vignetting<br>",

answer:"A"
},

/* Question 15 */

{
question: "Question 15<br><br>A warning klaxon sounds on the far right side of the platform. The sound wave hits the user's right ear a fraction of a millisecond before it hits their left ear. What specific auditory localization cue is the brain using here to determine the sound's direction?<br>"+
"<br>A. Interaural Time Difference (ITD)<br>"+
"<br>B. Interaural Level Difference (ILD)<br>"+
"<br>C. The Doppler Effect<br>"+
"<br>D. Acoustic Attenuation<br>",

answer:"A"
},

/* Question 16 */

{
question: "Question 16<br><br>An alarm is physically playing from a spatialized Audio Source directly behind the user. However, a massive red warning light is flashing directly in front of them. The user's brain mistakenly believes the sound is coming from the flashing light. What psychological phenomenon explains this?<br>"+
"<br>A. Visual Dominance (The McGurk Effect)<br>"+
"<br>B. Auditory Masking<br>"+
"<br>C. The Plausibility Illusion<br>"+
"<br>D. Vestibular Mismatch<br>",

answer:"A"
},

/* Question 17 */

{
question: "Question 17<br><br>A small, dark drone flies into the extreme left edge of the user's field of view. The user immediately notices its movement, but cannot tell what color it is or identify its shape until they turn their head to look at it directly. Why does this happen?<br>"+
"<br>A. Peripheral vision has a high concentration of rods (sensitive to motion) but very few cones (sensitive to color and detail).<br>"+
"<br>B. The headset's tracking sensors are weaker at the edges.<br>"+
"<br>C. Stereopsis fails at the edges of the screen.<br>"+
"<br>D. The vergence-accommodation conflict blurs the edges.<br>",

answer:"A"
},

/* Question 18 */

{
question: "Question 18<br><br>The user is repairing an engine in a bright virtual daylight setting. They suddenly teleport inside a pitch-black fuel tank and complain they cannot see the UI menu for several minutes. What biological process did the developers fail to account for in their level transition?<br>"+
"<br>A. Dark Adaptation<br>"+
"<br>B. Motion Parallax<br>"+
"<br>C. The Midas Touch<br>"+
"<br>D. Foveal Rendering<br>",

answer:"A"
},

/* Question 19 */

{
question: "Question 19<br><br>The user is standing under the jet engine. A steam pipe bursts behind them and slightly to their left. To ensure the user instantly knows the exact 3D location of the burst without turning around, how must the Unity audio be configured?<br>"+
"<br>A. The Audio Source must have a Logarithmic Rolloff applied.<br>"+
"<br>B. The Audio Source must utilize the Doppler Effect.<br>"+
"<br>C. The Audio Source must have its Spatial Blend set to 1.0 (3D) to utilize HRTF processing.<br>"+
"<br>D. The Main Camera must have multiple Audio Listeners attached.<br>",

answer:"C"
},

/* Question 20 */

{
question: "Question 20<br><br>Another jet flies rapidly past the hangar. The sound of its engines starts at a high pitch, and as it passes the user, the pitch noticeably drops. What auditory effect is being simulated to enhance plausibility?<br>"+
"<br>A. The Doppler Effect<br>"+
"<br>B. Interaural Time Difference (ITD)<br>"+
"<br>C. Spatial Attenuation<br>"+
"<br>D. Acoustic Occlusion<br>",

answer:"A"
},

/* Question 21 */

{
question: "Question 21<br><br>The visual simulation shows the platform suddenly plummeting in a free-fall toward the ground, but the user is physically standing still in the lab. According to the 'Sensory Conflict' theory, what is the brain's likely physiological response?<br>"+
"<br>A. The brain will trigger the 'Embodiment Illusion' to brace for impact.<br>"+
"<br>B. The brain will temporarily shut off the optic nerve to protect the user.<br>"+
"<br>C. The brain will interpret the sensory dissonance as a sign of neurotoxin ingestion and induce nausea to purge the stomach.<br>"+
"<br>D. The brain will rely on proprioception to override the visual input, causing zero discomfort.<br>",

answer:"C"
},

/* Question 22 */

{
question: "Question 22<br><br>You need the user to navigate from the jet engine to a toolbench 20 meters away. To guarantee 100% comfort and completely avoid vestibular mismatch, which locomotion strategy must you implement in the Unity Locomotion System?<br>"+
"<br>A. Smooth continuous movement using the controller joystick.<br>"+
"<br>B. A smooth, automated camera rail that flies the user to the bench over 5 seconds.<br>"+
"<br>C. A Teleportation Provider with a parabolic curve and instant transition.<br>"+
"<br>D. Continuous movement with an inverted Y-axis.<br>",

answer:"C"
},

/* Question 23 */

{
question: "Question 23<br><br>The client insists that users must be able to walk smoothly around the engine using the joystick. To mitigate the inevitable motion sickness caused by this continuous artificial movement, what specific rendering technique should you apply?<br>"+
"<br>A. A dynamic tunneling vignette that blacks out the user's peripheral vision while they are moving.<br>"+
"<br>B. A motion blur post-processing effect applied to the entire screen.<br>"+
"<br>C. Foveated rendering applied to the center of the screen.<br>"+
"<br>D. A Depth of Field blur applied to objects further than 5 meters away.<br>",

answer:"A"
},

/* Question 24 */

{
question: "Question 24<br><br>While the user is navigating the engine, the application experiences a massive frame rate drop (down to 30 FPS). The user turns their physical head quickly, but the virtual image stutters, smears, and updates sluggishly. What specific term describes this visual artifact?<br>"+
"<br>A. Vection<br>"+
"<br>B. Z-Fighting<br>"+
"<br>C. Judder (or Latency smear)<br>"+
"<br>D. Stereo Blindness<br>",

answer:"C"
},

/* Question 25 */

{
question: "Question 25<br><br>To prevent the user from tangling the headset cable around their physical legs, you implement an artificial turning mechanic. To maximize user comfort and avoid rotational sickness, how should the XR Turn Provider be configured?<br>"+
"<br>A. Continuous Smooth Turn at a high velocity.<br>"+
"<br>B. Snap Turn, rotating the user in instant 45-degree increments.<br>"+
"<br>C. Continuous Smooth Turn at a very low velocity.<br>"+
"<br>D. A script that rolls the camera upside down when they turn around.<br>",

answer:"B"
},

/* Question 26 */

{
question: "Question 26<br><br>The user is standing on a small, open platform that is rising smoothly at 5 meters per second. They report feeling dizzy. You add a virtual metal safety cage around the platform. The user suddenly reports feeling much more comfortable. Why did the cage work?<br>"+
"<br>A. The cage increased the frame rate by blocking the distant geometry.<br>"+
"<br>B. The cage provided a static, fixed frame of reference that grounded the user's vision.<br>"+
"<br>C. The cage blocked the spatial audio of the wind, reducing auditory overload.<br>"+
"<br>D. The cage altered the focal distance, eliminating the vergence-accommodation conflict.<br>",

answer:"B"
},

/* Question 27 */

{
question: "Question 27<br><br>The user points their VR controller at a glowing teleportation anchor next to the turbine and presses the trigger. Before they are instantly moved, the screen quickly fades to black, moves the player, and fades back in. Why is this 'Blink' transition widely used in VR?<br>"+
"<br>A. It hides the fact that the Unity engine takes 5 seconds to load the new area.<br>"+
"<br>B. It forces the user to physically close their eyes.<br>"+
"<br>C. It prevents the user from seeing a sudden 1-frame visual 'jump', reducing spatial disorientation and entirely avoiding optical flow.<br>"+
"<br>D. It resets the headset's tracking sensors.<br>",

answer:"C"
},

/* Question 28 */

{
question: "Question 28<br><br>During an emergency scenario, you need to forcefully move the user away from an exploding engine. If you must use artificial physics to throw the player backwards, what is the most critical rule regarding their camera acceleration to minimize nausea?<br>"+
"<br>A. Apply the acceleration instantly (an impulse), reaching maximum velocity immediately, rather than using a slow ease-in curve.<br>"+
"<br>B. Slowly build up the acceleration over 5 seconds to ease them into the movement.<br>"+
"<br>C. Spin the camera 360 degrees while throwing them backward.<br>"+
"<br>D. Ensure the frame rate drops to 30 FPS during the explosion.<br>",

answer:"A"
},

/* Question 29 */

{
question: "Question 29<br><br>You notice that users are tripping over real-world furniture while walking around the virtual engine. You need to implement a 'Chaperone' or 'Guardian' system. What is the fundamental purpose of this system?<br>"+
"<br>A. To track the user's eye movements and render the graphics more efficiently.<br>"+
"<br>B. To project a visible grid or boundary into the virtual world when the user physically approaches the edge of their safe real-world play space.<br>"+
"<br>C. To automatically teleport the user back to the center of the virtual room.<br>"+
"<br>D. To monitor the user's heart rate and warn them of motion sickness.<br>",

answer:"B"
},

/* Question 30 */

{
question: "Question 30<br><br>In the original design, the user had to push a virtual joystick forward to climb a massive ladder to the jet wing. Playtesters felt sick. You changed the interaction so the user must physically reach up, grab a rung, and pull the world down past them to climb. The sickness vanished. Why?<br>"+
"<br>A. By linking the visual motion directly to 1-to-1 physical arm movements, the user's proprioceptive system confirmed the motion, resolving the sensory conflict.<br>"+
"<br>B. The grabbing mechanic increased the frame rate of the application.<br>"+
"<br>C. The ladder blocked the user's peripheral vision, acting like a vignette.<br>"+
"<br>D. The joystick caused the Vergence-Accommodation Conflict, but the hands did not.<br>",

answer:"A"
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
