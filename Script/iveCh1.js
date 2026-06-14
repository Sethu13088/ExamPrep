let score = 0;
let currentQuestion = 0;

/* STORE USER ANSWERS */
let userAnswers = [];

//Array Reasons 
let reasons = [

{ reason: "Parameters allow data to be passed into a function so it can operate dynamically instead of using fixed values." },

{ reason: "Kotlin Playground is an online tool used to practice and run Kotlin code in the browser." },

{ reason: "The main function is the entry point of a Kotlin program where execution begins." },

{ reason: "Functions help break code into reusable blocks, making programs easier to manage and maintain." },

{ reason: "A Double variable stores decimal (floating-point) numbers such as 3.14 or 10.5." },

{ reason: "A named argument allows you to pass values by explicitly specifying the parameter name." },

{ reason: "Data types define what kind of data a variable can store, such as Int, String, or Boolean." },

{ reason: "Kotlin function names use camel case to improve readability and follow coding conventions." },

{ reason: "A String variable stores text such as words, sentences, or characters." },

{ reason: "The correct Kotlin function syntax is: fun functionName() { } where 'fun' defines a function." }

];

/* QUESTION ARRAY */
let questions = [

{
question: "Question 1<br><br>What is the purpose of specifying parameters in a function?<br><br>A. To make the function harder to understand<br>B. To slow down program execution<br>C. To define the function name<br>D. To pass data into the function for it to use<br>",
answer: "D"
},

{
question: "Question 2<br><br>Which tool is used in the codelab to practice the basics of the Kotlin language?<br><br>A. IntelliJ IDEA<br>B. Kotlin Playground<br>C. Android Studio<br>D. Eclipse<br>",
answer: "B"
},

{
question: "Question 3<br><br>What is the purpose of the main function in a Kotlin program?<br><br>A. To handle user input<br>B. To define the program's entry point<br>C. To declare variables<br>D. To display messages to the user<br>",
answer: "B"
},

{
question: "Question 4<br><br>What is the purpose of functions in programming?<br><br>A. To complicate the code<br>B. To break up code into reusable pieces<br>C. To slow down program execution<br>D. To make the code harder to read<br>",
answer: "B"
},

{
question: "Question 5<br><br>What kind of data can be stored in a variable of type Double?<br><br>A. Text<br>B. Decimal numbers<br>C. Integer numbers<br>D. Boolean values<br>",
answer: "B"
},

{
question: "Question 6<br><br>What is a named argument in Kotlin?<br><br>A. An argument passed with the parameter name specified<br>B. An argument passed without specifying the parameter name<br>C. An argument with a special name<br>D. An argument with a default value specified<br>",
answer: "A"
},

{
question: "Question 7<br><br>What is the purpose of specifying data types for variables?<br><br>A. To limit the functionality of the program<br>B. To slow down program execution<br>C. To increase program complexity<br>D. To define the kind of data that can be stored in the variable<br>",
answer: "D"
},

{
question: "Question 8<br><br>Which of the following statements is true about Kotlin function names?<br><br>A. Function names should be nouns.<br>B. Function names should be separated by spaces.<br>C. Function names should be in camel case.<br>D. Function names should start with an uppercase letter.<br>",
answer: "C"
},

{
question: "Question 9<br><br>What kind of data can be stored in a variable of type String?<br><br>A. Decimal numbers<br>B. Integer numbers<br>C. Boolean values<br>D. Text<br>",
answer: "D"
},

{
question: "Question 10<br><br>What is the correct syntax for defining a function in Kotlin?<br><br>A. fun functionName() { }<br>B. fun main { }<br>C. function main() { }<br>D. def function() { }<br>",
answer: "A"
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
        <a href="../ExamPrep.html">
            <button class="home-btn">
                Go Back Home
            </button>
        </a>
    </div>
`;
    document.getElementById("quiz").innerHTML = results;
}

