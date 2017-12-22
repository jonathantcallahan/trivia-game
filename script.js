// create innerhtml in js variables for different questions
// add id='correct-answer' for correct answers
// when correct or incorrect answer selected it should trigger score iterator
// create array with all variables holding inner html 
// create question count variable to allow counter to select the next question
// when all questions have been answered questionCounter === 8 or w/e innerhtml would display final scores


// inside the function run by the timeout the question count should iterate and the questions div innerhtml should be set to questions[questionCount]
// the correct question and incorrect question should have an onclick event that 1. stops the timeout from running 2. adds to the question counter

$(document).ready(function(){ 

var triviaGame = {

	correctAnswerCount: 0,
	questionCounter: 0,

	questionArray: ["<h1>1: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>", "<h1>2: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>","<h1>3: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>"],

	correctAnswer: ["<h1>The corrct anser was:</h1><div>Correct answer</div>"]

}


function nextQuestion(){
	$("#questions").html(triviaGame.questionArray[triviaGame.questionCounter])
	newQuestionTimer = setTimeout(nextQuestion, 10000);
	triviaGame.questionCounter++;

	$("#correct-answer").click(function(){
		alert("Correct answer chosen");
		triviaGame.correctAnswerCount++;
	});

}


$("#confirm-answer").click(function(){
	clearTimeout(newQuestionTimer);
	$("#questions").html(triviaGame.correctAnswer[0])
	var confirmNext = setTimeout(nextQuestion, 1500);
});




console.log(triviaGame.questionArray[0])

nextQuestion();

});