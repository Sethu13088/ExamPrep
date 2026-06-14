let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */

let userAnswers = [];

//Array Reasons 

let reasons = [{

reason: "Low Fidelity (Magical) interaction allows users to manipulate objects unrealistically, such as grabbing items from a distance instantly."

},{

reason: "Tracked Device Graphic Raycaster allows XR ray interactors to interact with World Space UI canvases."

},{

reason: "Lazy Follow menus reduce nausea by smoothly drifting into view instead of being rigidly attached to the user's head."

},{

reason: "Menus slightly below eye level are ergonomically comfortable and reduce neck strain."

},{

reason: "Instantaneous movement teleports the object directly into the hand without physical dragging or collision."

},{

reason: "Haptic feedback substitutes for missing physical resistance by vibrating the controllers."

},{

reason: "World Space canvases must be scaled down dramatically because Unity's default size is extremely large in 3D space."

},{

reason: "Greyboxing (or Whiteboxing) is the process of using simple placeholder geometry to prototype layouts and scale."

},{

reason: "Standalone Meta Quest applications are deployed as Android APK files."

},{

reason: "XR Grab Interactable enables objects to become interactable and grabbable in XR."

},{

reason: "Bitmap fonts lose clarity when enlarged because they are fixed-resolution raster images."

},{

reason: "Realtime lighting is expensive because every shadow-casting light increases rendering workload dramatically."

},{

reason: "Requiring an intentional grip press prevents accidental interactions known as the Midas Touch problem."

},{

reason: "Dark mode reduces glare, lens reflections, and eye strain caused by bright UI surfaces close to the eyes."

},{

reason: "Diegetic UI exists naturally inside the game world itself, such as indicators built into equipment."

},{

reason: "Curved canvases maintain consistent viewing angles and readability across large VR interfaces."

},{

reason: "Isomorphic manipulation means virtual movement matches real-world movement exactly 1-to-1."

},{

reason: "Signed Distance Field fonts used by TextMeshPro remain crisp and scalable at any distance."

},{

reason: "Baked lighting stores lighting information in textures ahead of time, eliminating runtime calculations."

},{

reason: "A Draw Call is a CPU instruction telling the GPU to render a specific mesh and material."

},{

reason: "Affordances are visual or physical properties that naturally suggest how an object should be used."

},{

reason: "Developers should silently observe users during playtesting to identify usability and comfort issues naturally."

},{

reason: "At 72 FPS, each frame must complete within approximately 13.8 milliseconds."

},{

reason: "Velocity Tracking allows grabbed objects to collide physically with the environment instead of clipping through it."

},{

reason: "Static Batching combines non-moving objects into fewer rendering operations to reduce draw calls."

},{

reason: "Screen Space Overlay bypasses stereoscopic rendering, making it incompatible with VR depth perception."

},{

reason: "The Midas Touch problem occurs when users accidentally interact with nearby objects unintentionally."

},{

reason: "Overdraw occurs when transparent layers force the GPU to repeatedly render the same pixels."

},{

reason: "Interaction Layer Masks prevent Ray Interactors from targeting unwanted objects like holstered items."

},{

reason: "Thermal Throttling occurs when the headset overheats and automatically reduces performance to lower temperature."

}];


/* QUESTION ARRAY */

let questions = [

/* Question 1 */

{
question: "Question 1<br><br>A player needs a key resting on a high bookshelf. They point their controller at the key, a laser beam appears, they press the trigger, and the key instantly teleports into their hand. How would this interaction be classified on the Interaction Fidelity spectrum?<br>"+
"<br>A. Low Fidelity (Magical)<br>"+
"<br>B. High Fidelity Simulation<br>"+
"<br>C. Isomorphic Manipulation<br>"+
"<br>D. Physical Realism<br>",

answer:"A"
},

/* Question 2 */

{
question: "Question 2<br><br>To allow the player to click on the 'World Space' inventory Canvas using their laser pointer (Ray Interactor), what component must replace the default Graphic Raycaster on the Canvas?<br>"+
"<br>A. Tracked Device Graphic Raycaster<br>"+
"<br>B. Box Collider 2D<br>"+
"<br>C. Audio Reverb Zone<br>"+
"<br>D. Locomotion System<br>",

answer:"A"
},

/* Question 3 */

{
question: "Question 3<br><br>If you want an inventory menu to follow the player around without causing the nausea of a 'Head-Locked HUD', what is the safest alternative design approach?<br>"+
"<br>A. A floor-locked menu that stays firmly planted beneath the user's feet.<br>"+
"<br>B. A menu that flashes rapidly in the center of the screen.<br>"+
"<br>C. A 'Lazy Follow' (or body-locked) UI that floats in the world and smoothly drifts into the user's view only after they finish turning their head.<br>"+
"<br>D. Hiding the menu entirely and forcing the user to guess their inventory.<br>",

answer:"C"
},

/* Question 4 */

{
question: "Question 4<br><br>The player complains of neck pain because the inventory menu is placed high above their head. According to VR UI ergonomics, where is the most comfortable placement for a recurring menu?<br>"+
"<br>A. Slightly below eye level (15-20 degrees downwards).<br>"+
"<br>B. Directly above the user's head (90 degrees upwards).<br>"+
"<br>C. Flat on the floor (90 degrees downwards).<br>"+
"<br>D. Locked directly to the center of their face.<br>",

answer:"A"
},

/* Question 5 */

{
question: "Question 5<br><br>When the user points the laser at the key, they want it to snap directly into their palm without dragging through the air or colliding with objects. What 'Movement Type' on the XR Grab Interactable enables this?<br>"+
"<br>A. Instantaneous<br>"+
"<br>B. Velocity Tracking<br>"+
"<br>C. Kinematic<br>"+
"<br>D. Direct Movement<br>",

answer:"A"
},

/* Question 6 */

{
question: "Question 6<br><br>Because the VR hardware cannot physically stop a user's real hand from moving through the wooden desk, what feedback mechanism is commonly used to substitute for the missing sense of physical resistance?<br>"+
"<br>A. Foveated rendering<br>"+
"<br>B. Screen flashing<br>"+
"<br>C. Haptic vibration in the controllers<br>"+
"<br>D. Changing the background music<br>",

answer:"C"
},

/* Question 7 */

{
question: "Question 7<br><br>To fix the inventory menu, you change the Canvas Render Mode to 'World Space'. However, the menu appears 1000 meters wide, the size of a mountain. What specific Canvas setting must be adjusted in Unity to fix this?<br>"+
"<br>A. Change the resolution to 4K.<br>"+
"<br>B. Change the Scale of the Rect Transform to roughly 0.001.<br>"+
"<br>C. Delete the Event System.<br>"+
"<br>D. Change the text color to black.<br>",

answer:"B"
},

/* Question 8 */

{
question: "Question 8<br><br>Before building the final 3D models for the potion tables, you placed simple Unity Cubes in the room to quickly test if the tables were the correct height. What is this prototyping process called?<br>"+
"<br>A. Greyboxing<br>"+
"<br>B. Texture Baking<br>"+
"<br>C. Occlusion Mapping<br>"+
"<br>D. Retopology<br>",

answer:"A"
},

/* Question 9 */

{
question: "Question 9<br><br>The escape room is complete. You need to deploy it directly to the Meta Quest 3 headset so the client can play it without a PC connected. In Unity's Build Settings, what specific file format must you generate?<br>"+
"<br>A. .apk<br>"+
"<br>B. .exe<br>"+
"<br>C. .unitypackage<br>"+
"<br>D. .fbx<br>",

answer:"A"
},

/* Question 10 */

{
question: "Question 10<br><br>To make the potion bottles and the key functional, which core component MUST be added to their 3D models in Unity so the user can pick them up?<br>"+
"<br>A. XR Grab Interactable<br>"+
"<br>B. Audio Listener<br>"+
"<br>C. Reflection Probe<br>"+
"<br>D. NavMesh Agent<br>",

answer:"A"
},

/* Question 11 */

{
question: "Question 11<br><br>The ancient scrolls use a standard Unity Bitmap font. Why does this font become incredibly blurry and pixelated when the user leans in 5 centimeters away to read a clue?<br>"+
"<br>A. Bitmaps can only display text in black and white.<br>"+
"<br>B. Because bitmaps are raster images (made of a fixed grid of pixels), zooming in ruins their resolution, destroying legibility in 3D space.<br>"+
"<br>C. Bitmaps automatically translate the text into the wrong language.<br>"+
"<br>D. Bitmaps trigger motion sickness by spinning uncontrollably.<br>",

answer:"B"
},

/* Question 12 */

{
question: "Question 12<br><br>The room is lit by 10 flickering candles. Setting all 10 lights to 'Realtime' with soft shadows enabled instantly crashes the frame rate. Why is Realtime lighting a massive problem for Mobile VR?<br>"+
"<br>A. Realtime shadows require the scene to be rendered multiple times per frame per light source, completely overwhelming the mobile GPU's limited processing power.<br>"+
"<br>B. Realtime lights consume too much battery power from the controllers.<br>"+
"<br>C. Mobile VR headsets do not support Realtime lights natively.<br>"+
"<br>D. Realtime lights conflict with the XR Tracking systems.<br>",

answer:"A"
},

/* Question 13 */

{
question: "Question 13<br><br>To fix the Midas Touch problem with the books, you configure the 'XR Grab Interactable' script. What is the standard design solution to ensure the user only interacts with what they intend to?<br>"+
"<br>A. Set the Rigidbody mass of all objects to 10,000 so they cannot be moved.<br>"+
"<br>B. Require explicit confirmation by forcing the user to press a specific 'Grip' button while their virtual hand collider is intersecting the object.<br>"+
"<br>C. Disable the colliders on the user's virtual hands entirely.<br>"+
"<br>D. Force the user to use Raycasting exclusively.<br>",

answer:"B"
},

/* Question 14 */

{
question: "Question 14<br><br>The initial UI scrolls feature a bright white parchment background. Why is it generally recommended to design VR menus using 'Dark Mode' (dark backgrounds with light text) instead?<br>"+
"<br>A. Dark mode makes the application run twice as fast on the CPU.<br>"+
"<br>B. White backgrounds are copyrighted by mobile phone companies.<br>"+
"<br>C. Large bright white canvases act like lightbulbs close to the eyes, causing intense glare, lens reflections (god rays), and eye strain.<br>"+
"<br>D. Dark mode automatically translates text into 3D objects.<br>",

answer:"C"
},

/* Question 15 */

{
question: "Question 15<br><br>To display the player's remaining 'Magic Energy,' you texture a glowing crystal into the back of their virtual glove that dims as energy is used. What type of UI design is this?<br>"+
"<br>A. Diegetic UI<br>"+
"<br>B. Screen Space UI<br>"+
"<br>C. Non-Diegetic HUD<br>"+
"<br>D. Overlay UI<br>",

answer:"A"
},

/* Question 16 */

{
question: "Question 16<br><br>The final puzzle involves a massive flat wall covered in runes that is 4 meters wide. When the user stands in the center and looks at the edges, the runes become blurry and hard to click with the laser pointer. What is the ergonomic solution to this UI problem?<br>"+
"<br>A. Curve the Canvas into a cylinder around the user.<br>"+
"<br>B. Move the Canvas 10 meters away from the user.<br>"+
"<br>C. Force the user to use Direct Interaction (hands) instead of Raycasting.<br>"+
"<br>D. Change the UI to a Head-Locked HUD.<br>",

answer:"A"
},

/* Question 17 */

{
question: "Question 17<br><br>To manipulate puzzle objects smoothly, the system uses 'Isomorphic' manipulation. What does this mean in the context of VR?<br>"+
"<br>A. A strict 1-to-1 mapping where moving the physical hand 10cm moves the virtual hand exactly 10cm.<br>"+
"<br>B. A scaled interaction where moving the hand 1cm moves the virtual object 10m.<br>"+
"<br>C. The use of a joystick to rotate the camera.<br>"+
"<br>D. The ability to pause time while interacting with an object.<br>",

answer:"A"
},

/* Question 18 */

{
question: "Question 18<br><br>To ensure the text on the scrolls remains perfectly crisp and readable at any distance, what technology must you use instead of Bitmap fonts?<br>"+
"<br>A. High-Resolution JPEGs<br>"+
"<br>B. Signed Distance Field (SDF) Fonts via TextMeshPro<br>"+
"<br>C. Foveated Rendering Texts<br>"+
"<br>D. Dynamic Resolution Scaling<br>",

answer:"B"
},

/* Question 19 */

{
question: "Question 19<br><br>To fix the lighting performance, you change the lights to 'Baked' mode and generate Lightmaps. How does this solve the frame rate issue?<br>"+
"<br>A. It disables all shadows in the game, saving GPU power.<br>"+
"<br>B. It forces the lights to render on the CPU instead of the GPU.<br>"+
"<br>C. It calculates the complex shadow math once on your PC during development and paints the shadows directly into the textures, costing the headset zero calculation time at runtime.<br>"+
"<br>D. It replaces the 3D lights with 2D sprites.<br>",

answer:"C"
},

/* Question 20 */

{
question: "Question 20<br><br>The room features a massive library with 300 individual books on the shelves. In the Unity Profiler, you see the CPU is choking on over 400 'Draw Calls' per frame. What exactly is a Draw Call?<br>"+
"<br>A. A function used to draw UI text on the screen.<br>"+
"<br>B. A command sent from the CPU to the GPU instructing it to render a specific mesh and material.<br>"+
"<br>C. A script that allows the user to draw on whiteboards in VR.<br>"+
"<br>D. The audio triggered when a user selects a menu item.<br>",

answer:"B"
},

/* Question 21 */

{
question: "Question 21<br><br>The user sees a glowing blue potion bottle with a distinct, hourglass-shaped neck. Without any instructions, they instinctively know to wrap their virtual hand around the neck to pick it up. According to Don Norman, what design principle is operating here?<br>"+
"<br>A. Affordance<br>"+
"<br>B. Occlusion<br>"+
"<br>C. Overdraw<br>"+
"<br>D. Foveation<br>",

answer:"A"
},

/* Question 22 */

{
question: "Question 22<br><br>With the APK deployed to the headset, you bring in a completely naive user (who has never played VR) for the final 'Learn' stage of the iterative cycle. What is the most important rule for you as the developer during this playtest?<br>"+
"<br>A. Explain exactly how every puzzle works before they put the headset on.<br>"+
"<br>B. Observe silently and watch their physical reactions (wobbling, sweating, hesitation) to see where the UX or comfort mechanics fail.<br>"+
"<br>C. Take the headset away from them if they don't solve the first puzzle in 2 minutes.<br>"+
"<br>D. Ensure the frame rate is locked to 30 FPS to test their endurance.<br>",

answer:"B"
},

/* Question 23 */

{
question: "Question 23<br><br>To maintain a flawless 72 FPS on the Meta Quest and prevent sickness, the CPU and GPU must complete all physics, logic, and rendering calculations within a strict 'Frame Budget'. What is this time limit?<br>"+
"<br>A. 13.8 milliseconds<br>"+
"<br>B. 20 milliseconds<br>"+
"<br>C. 5 milliseconds<br>"+
"<br>D. 1 second<br>",

answer:"A"
},

/* Question 24 */

{
question: "Question 24<br><br>When the user grabs the heavy iron cauldron, you want it to collide with the table legs if they try to pull it through the furniture, rather than magically clipping through the wood. Which 'Movement Type' should you select on the XR Grab Interactable?<br>"+
"<br>A. Velocity Tracking<br>"+
"<br>B. Instantaneous<br>"+
"<br>C. Kinematic<br>"+
"<br>D. Static<br>",

answer:"A"
},

/* Question 25 */

{
question: "Question 25<br><br>Assuming the player cannot interact with or move the 300 library books, what is the most efficient optimization technique to reduce those 300 draw calls down to just 1?<br>"+
"<br>A. Set the books to 'Kinematic' Rigidbodies.<br>"+
"<br>B. Apply an Occlusion Culling volume to the library.<br>"+
"<br>C. Check the 'Static' flag on all the books to enable Static Batching.<br>"+
"<br>D. Reduce the texture resolution of the books.<br>",

answer:"C"
},

/* Question 26 */

{
question: "Question 26<br><br>A junior developer creates an inventory menu using a standard Unity Canvas set to 'Screen Space - Overlay'. When tested in the headset, the menu renders incorrectly, pasting over both eyes in a warped fashion. Why did this fail?<br>"+
"<br>A. The font size was too small for the Quest lenses.<br>"+
"<br>B. The canvas was not curved into a cylinder.<br>"+
"<br>C. Screen Space Overlays render directly to the 2D screen buffer, bypassing the VR camera's stereoscopic depth rendering entirely.<br>"+
"<br>D. The XR Interaction Toolkit requires a mouse click for Overlay canvases.<br>",

answer:"C"
},

/* Question 27 */

{
question: "Question 27<br><br>When a user reaches for a specific potion on the cluttered desk, their virtual hand accidentally brushes against a stack of books, sending them flying across the room and ruining the puzzle. What classic VR interaction problem is occurring here?<br>"+
"<br>A. The Midas Touch Problem<br>"+
"<br>B. Occlusion Culling<br>"+
"<br>C. Thermal Throttling<br>"+
"<br>D. Vergence Conflict<br>",

answer:"A"
},

/* Question 28 */

{
question: "Question 28<br><br>The cauldron emits dense, semi-transparent magical smoke. Looking directly through the multiple layers of smoke causes massive GPU strain due to 'Overdraw.' What is Overdraw?<br>"+
"<br>A. When the CPU issues too many Draw Calls to the GPU.<br>"+
"<br>B. When the GPU is forced to draw the exact same pixel multiple times because several semi-transparent layers are stacked on top of each other.<br>"+
"<br>C. When a texture resolution is higher than 4K.<br>"+
"<br>D. When the user draws outside the Chaperone boundaries.<br>",

answer:"B"
},

/* Question 29 */

{
question: "Question 29<br><br>When the player tries to teleport across the room using their Ray Interactor, the laser keeps snapping to their own holstered wand, preventing them from moving. How do you solve this in the Unity XR Interaction Toolkit?<br>"+
"<br>A. Use Interaction Layer Masks. Set the wand to a 'Belt' layer, and uncheck the 'Belt' layer in the Ray Interactor's mask so it ignores the wand.<br>"+
"<br>B. Change the wand's Movement Type from Kinematic to Velocity Tracking.<br>"+
"<br>C. Remove the XR Grab Interactable script from the wand.<br>"+
"<br>D. Turn off the Ray Interactor completely.<br>",

answer:"A"
},

/* Question 30 */

{
question: "Question 30<br><br>Because 'The Alchemist's Study' runs natively on the Meta Quest 3, it relies on a mobile processor. During a 15-minute playtest, the headset gets incredibly hot. Suddenly, the frame rate drops from 72 FPS to 35 FPS. What hardware-level event has occurred?<br>"+
"<br>A. Thermal Throttling<br>"+
"<br>B. Dynamic Occlusion<br>"+
"<br>C. Texture Compression<br>"+
"<br>D. Motion Prediction<br>",

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
