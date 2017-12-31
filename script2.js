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

	var questionArray = [timerText + "<div class='answers-container'><h1>What country are Lemurs native to?</h1><div class='wrong-answer answers'>Australia</div><div class='correct-answer answers'>Madagascar</div><div class='wrong-answer answers'>Thailand</div><div class='wrong-answer answers'>Brazil</div></div>" + confirmAnswer,timerText + "<div class='answers-container'><h1>What is the worlds largest land carnivore?</h1><div class='correct-answer answers'>Polar Bear</div><div class='wrong-answer answers'>Elephant</div><div class='wrong-answer answers'>Tiger</div><div class='wrong-answer answers'>Carl</div></div>" + confirmAnswer, timerText + "<div class='answers-container'><h1>Gentoo, Chinstrap, and Adelie are all species of what animal?</h1><div class='wrong-answer answers'>Dog</div><div class='correct-answer answers'>Penguin</div><div class='wrong-answer answers'>Snake</div><div class='wrong-answer answers'>Beetle</div></div>" + confirmAnswer, timerText + "<div class='answers-container'><h1>How fast can an adult Turkey fly?</h1><div class='wrong-answer answers'>15mph</div><div class='wrong-answer answers'>24mph</div><div class='wrong-answer answers'>38mph</div><div class='correct-answer answers'>55mph</div></div>" + confirmAnswer, timerText + "<div class='answers-container'><h1>Bamboo is a ___ ?</h1><div class='wrong-answer answers'>Bush</div><div class='correct-answer answers'>Grass</div><div class='wrong-answer answers'>Tree</div><div class='wrong-answer answers'>Conifer</div></div>" + confirmAnswer]

	var answerArray = ["<h3>The correct answer was:</h3><div class='answer'>Madagascar</div>", "<h3>The correct answer was:</h3><div class='answer'>Polar Bears</div>", "<h3>The correct answer was:</h3><div class='answer'>Penguin</div>", "<h3>The correct answer was:</h3><div class='answer'>55mph</div>", "<h3>The correct answer was:</h3><div class='answer'>Grass</div>"]

	var finalScreen = "<h1>Final Score</h1><h2>Correct Answers : <span id='correct-answers'></span></h2><h2>Wrong Answers: <span id='wrong-answers'></span></h2>"

	var startScreen = "<div class='start-screen'><h2>Press START to begin the game</h2><div class='start-button' id='start'>START</div></div>"

	$("#questions").html(startScreen);

	function deprecateTimer(){
		if(questionCounter>5){
			console.log("test2")
			$("#questions").html(finalScreen)
			$("#correct-answers").text(correctAnswerCount);
			$("#wrong-answers").text(wrongAnswerCount);
			return;
		}
		if(remaingingSeconds<1){
			console.log("remaingingSecondstest")
			$("#questions").html(answerArray[questionCounter - 1])
			setTimeout(nextQuestion, 3000);
			remaingingSeconds = 23;
			return;
		} 
	
		remaingingSeconds--;
		$("#remaining-seconds").text(remaingingSeconds)
		
	}

	function timerTrigger(){
		timer = setInterval(deprecateTimer, 1002)
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

		$(".wrong-answer").click(function(){
			$(".chosen-answer").removeClass("chosen-answer").addClass("answers")
			answerSelected = true;
			wrongAnswer = true;
			correctAnswer = false;
			$(this).removeClass("answers").addClass("chosen-answer")
		})

		$(".correct-answer").click(function(){
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