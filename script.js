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
	remainingSeconds: 20,
	confirmCounter: 0,

	questionArray: ["<h1>1: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>", "<h1>2: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>","<h1>3: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>"],

	correctAnswer: ["<h1>The correct answer was:</h1><div>Correct answer</div>"]

}

function deprecateTimer(){

	triviaGame.remainingSeconds--;
	$("#remaining-seconds").text(triviaGame.remainingSeconds)
}

function timerTrigger(){
	if(triviaGame.questionCounter > 2){
		return;
	}
	timer = setInterval(deprecateTimer, 1000)
}


var timer;

function nextQuestion(){

	triviaGame.confirmCounter = 0;

	if(triviaGame.questionCounter === triviaGame.questionArray.length){
		$("#questions").html("<h1>Final Score</h1><h2>Correct Answers : <span id='correct-answers'></span></h2><h2>Wrong Answers: <span id='wrong-answers'></span></h2>");
		$("#correct-answers").text(triviaGame.correctAnswerCount);
		$("#rem-sec-holder").empty();
		return;
	}
	triviaGame.remainingSeconds = 20;
	clearInterval(timer);
	timerTrigger();

	$("#questions").html(triviaGame.questionArray[triviaGame.questionCounter])
	newQuestionTimer = setTimeout(nextQuestion, 20000);

	triviaGame.questionCounter++;

	$("#correct-answer").click(function(){
		triviaGame.correctAnswerCount++;
		console.log(triviaGame.correctAnswerCount)
	});

}

$(".answers").click(function(){
	$(this).removeClass("answers").addClass("chosen-answer")
	console.log("change answer class")
})

$(".chosen-answer").click(function(){
	$(this).removeClass("chosen-answer").addClass("answers")
})



$("#confirm-answer").click(function(){
	if(triviaGame.confirmCounter === 1){
		clearTimeout(confirmNext);
		nextQuestion();
		return;
	}
	triviaGame.confirmCounter++;
	clearTimeout(newQuestionTimer);
	$("#questions").html(triviaGame.correctAnswer[0])
	var confirmNext = setTimeout(nextQuestion, 1500);
});




console.log(triviaGame.questionArray[0])

nextQuestion();

});