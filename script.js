//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var oneScore = 0;
var twoScore = 0;
var threeScore = 0;
var fourScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", one);
q1a2.addEventListener("click", two);
q1a3.addEventListener("click", three);
q1a4.addEventListener("click", four);

q2a1.addEventListener("click", one);
q2a2.addEventListener("click", two);
q2a3.addEventListener("click", three);
q2a4.addEventListener("click", four);

q3a1.addEventListener("click", one);
q3a2.addEventListener("click", two);
q3a3.addEventListener("click", three);
q3a4.addEventListener("click", four);

//#TODO: Define quiz functions here
function one() {
  oneScore += 1;
  questionCount += 1;
  //#alert("one point to dog");
  if (questionCount >= 3) {
    updateResult();
    //#create an updateResult function
  }
}
function two() {
  twoScore += 1;
  questionCount += 1;
  //#alert("one point to cat");
  if (questionCount >= 3) {
    updateResult();
    //#create an updateResult function
  }
}
function three() {
  threeScore += 1;
  questionCount += 1;
  //#alert("one point to horse");
  if (questionCount >= 3) {
    updateResult();
    //#create an updateResult function
  }
}
function four() {
  fourScore += 1;
  questionCount += 1;
  //#alert("one point to dolphin");
  if (questionCount >= 3) {
    updateResult();
    //#create an updateResult function
  }
}
function updateResult() {
  if (oneScore >= 2) {
    result.innerHTML = "Wow! You know a good amount of information about the protests! Head to next page to see what you can do to help. Reload the page if you want to retake the quiz.";
  }
  else {
    result.innerHTML = "Hmm.. It seems like you don't know much about the issue. Head to the About section of the website to learn more! Reload the page if you want to retake the quiz.";
  }
}