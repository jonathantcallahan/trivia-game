$(document).ready(function(){
//suspect that question sequence errors are coming from how the nextQuestion function is being called

	var correctAnswerCount = 0;
	var wrongAnswerCount = 0;

	// Used in the nextQuestion function to move to the next element in the questionArray
	var questionCounter = 0;

	var confirmCounter;

	var remaingingSeconds = "cheese";

	var answerSelected = false;
	var correctAnswer = false;
	var wrongAnswer = false;

	var timer;

	var timerText = "<h4 id='rem-sec-holder'>Seconds Remaining: <span id='remaining-seconds'></span></span></h4>"

	var confirmAnswer = "<div id='confirm-answer'>Confirm</div>"

	var questionArray = [timerText + "<h1>1: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div>" + confirmAnswer, timerText + "<h1>2: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div><div id='confirm-answer'>Confirm</div>", timerText + "<h1>3: What is the answer to this question?</h1><div id='wrong-answer' class='answers'>Wrong answer</div><div id='correct-answer' class='answers'>Correct answer</div><div id='confirm-answer'>Confirm</div>"]

	var answerArray = ["<h3>The correct answer was:</h3><div>Correct answer</div>"]

	var finalScreen = "<h1>Final Score</h1><h2>Correct Answers : <span id='correct-answers'></span></h2><h2>Wrong Answers: <span id='wrong-answers'></span></h2>"

	var startScreen = "<h2>Press START to begin the game</h2><div class='start-button' id='start'>START</div>"

	$("#questions").html(startScreen);

	function deprecateTimer(){
		if(questionCounter>3){
			console.log("test2")
			$("#questions").html("<img src='https://i.amz.mshcdn.com/R9W_YTladVpWShfFUQ4Ja6vLZI4=/1200x630/2016%2F09%2F22%2Fb5%2F592857175_640.73223.jpg'>")
			$("#correct-answers").text(correctAnswerCount);
			$("#wrong-answers").text(wrongAnswerCount);
			return;
		}
		if(remaingingSeconds<1){
			console.log("remaingingSecondstest")
			$("#questions").html(answerArray[0])
			setTimeout(nextQuestion, 3000);
			remaingingSeconds = 23;
			return;
		} 
	
		remaingingSeconds--;
		$("#remaining-seconds").text(remaingingSeconds)
		
	}

	function timerTrigger(){
		timer = setInterval(deprecateTimer, 1000)
	}


	function nextQuestion(){

		if(correctAnswer){
			correctAnswerCount++;
		}

		if(wrongAnswer){
			wrongAnswerCount++;
		}

		correctAnswer = false;
		wrongAnswer = false;

		if(remaingingSeconds === "cheese"){
			remaingingSeconds = 20;
		};

		$("#questions").html(questionArray[questionCounter])
		questionCounter++;

		$("#wrong-answer").click(function(){
			$(".chosen-answer").removeClass("chosen-answer").addClass("answers")
			answerSelected = true;
			wrongAnswer = true;
			correctAnswer = false;
			$(this).removeClass("answers").addClass("chosen-answer")
		})

		$("#correct-answer").click(function(){
			$(".chosen-answer").removeClass("chosen-answer").addClass("answers")
			answerSelected = true;
			wrongAnswer = false;
			correctAnswer = true;
			$(this).removeClass("answers").addClass("chosen-answer")
		})

		$("#confirm-answer").click(function(){
			if(!answerSelected){
				return;
			} else {
				remaingingSeconds = 0;
			}
			console.log("test");
		})
		console.log(remaingingSeconds)
	}


	$("#start").click(function(){
		nextQuestion();
		timerTrigger();
	})



})