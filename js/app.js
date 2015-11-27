$(document).ready(function() {
	//console.log("ready!");
//question bank array
	var qbank = [
	//Question 1
	  	{
	    topic: 'World Cup',
	    question: 'What was the name of the first World Cup trophy?',
	    choices: ['Jules Rimet trophy', 'Rodolphe Seeldrayers trophy', 'Daniel Burley Woolfall trophy', 'Arthur Drewry trophy'],
	    correct: 0,
		correctDetails:'First called the World Cup or Victory, the trophy was renamed in 1946 in honor of Jules Rimet who can be considered as the creator of the Football World Cup. '
		},

	//Question 2  
	 	{
	 	topic: 'International',
	    question: 'When was the world’s first official football body, the Football Association (FA), established?',
	    choices: ['1853', '1863', '1873', '1883'],
		correct: 1,
		correctDetails:'On October 26, 1863, 12 English clubs and school representatives gathered to form the Football Association (FA). The purpose of the organization was to formulate official football rules, as different teams of that time played with their own set of rules.'
		},

	//Question 3
	  	{
	  	topic: 'International',
	    question: 'Against what country England played history’s first international football fixture?',
	    choices: ['Scotland', 'France', 'Belgium', 'Italy'],
	    correct: 0,
		correctDetails:'History’s first international football fixture was played between Scotland and England on November 30, 1872 in Glasgow, Scotland.'
		},  

	//Question 4
		{
		topic: 'Club',
		question: 'What is the oldest football club in history according to FIFA? ',
		choices: ['The Football Club of Edinburgh (Scotland)', 'TSV 1860 München (Germany)', 'Sheffield F.C. (England)', 'Melbourne Football Club (Australia)'],
		correct: 2,
		correctDetails:'Football began to be played informally by a club in Sheffield in 1855. On October 24, 1857, the Sheffield Football Club was established and has become the oldest documented club in football.'
		},

	//Question 5
		{
		topic: 'World Cup',
		question: 'Against which team Uruguay won the first World Cup final in 1930?',
		choices: ['USA', 'Yugoslavia', 'Brazil', 'Argentina'],
		correct: 3,
		correctDetails:'The first World Cup final was played on July 30, 1930 at Centenario Stadium in Uruguay. The Uruguayans opened the scoring but Argentina turned the game around with a 1-2 score at halftime. Uruguay once again took the game and, driven by supporters, registered three goals in the second half to finish the match 4-2.'
		},

	//Question 6
		{
		topic: 'World Cup',
		question: 'What was history’s first official World Cup soccer ball called?',
		choices: ['Tango', 'Azteca', 'Telstar', 'Jabulani'],
		correct: 2,
		correctDetails:'In 1970, Telstar became the first official soccer ball of a World Cup.'
		},

	//Question 7
		{
		topic: 'World Cup',
		question: 'How many goals the French Just Fontaine scored during the 1958 World Cup?',
		choices: ['9 goals', '11 goals', '13 goals', '15 goals'],
		correct: 2,
		correctDetails:'Just Fontaine emerged as top-scorer during the 1958 World Cup with 13 goals in six games, a record for most goals in a single World Cup.'
		},   

	//Question 8
		{
		topic: 'Euros',
		question: 'What country made history in 1960 by winning the first European football championship?',
		choices: ['Soviet Union', 'Yugoslavia', 'West Germany', 'Spain'],
		correct: 0,
		correctDetails:'The Euro 1960 is the first European Nations Football Championship in history and was won after extra time by USSR over Yugoslavia in a 2-1 score.'
		},

	//Question 9
		{
		topic: 'La Liga',
		question: 'For which historic Spanish club the Hungarian striker Ferenc Puskas played?',
		choices: ['FC Barcelona', 'Atletico Madrid', 'Real Madrid', 'Espanol Barcelona'],
		correct: 2,
		correctDetails:'Legendary footballer, Puskas was greeted with much skepticism when he went to Spain for Real Madrid. But he quickly found a place alongside greats like Di Stefano, Kopa, and Gento.'
		},  

	//Question 10
		{
		topic: 'England',
		question: 'Which football player of the 1960s was dubbed as “The Fifth Beatle”?',
		choices: ['George Best', 'Bobby Moore', 'Bobby Charlton', 'Duncan Edwards'],
		correct: 0,
		correctDetails:'With a mop top haircut and a rock star lifestyle, George Best earned the nickname “The Fifth Beatle” in the mid-1960s.'
		}  
	];
//console.log(qbank);
	//Result Message Variables
	var feedback1 = "Congratulations your answer is correct!";
	var feedback2 = "Sorry, your answer is wrong!";
	//Variables
	var questionNum = 0;
	var questionTotal = qbank.length;
	var correct = qbank[questionNum].choices[correct];
	//console.log(qbank[questionNum].choices[qbank[questionNum].correct]);
	var correctTotal = 0;


qadisplay();
$('#choices').on('click', '#option', function() {

	var answer = this.value;
	var correctAnswer = qbank[questionNum].choices[qbank[questionNum].correct];
	console.log(correctAnswer);

	//Initial question correct
	if (answer == correctAnswer){
			var feedback1 = "Congratulations "+answer+" is correct!";
			correctTotal++;
		
		//This empties the right answer
			$('.topic-name').empty();
			$('.question-content').empty();					
			$('#choices').empty();

		//This re-populates the emptied elements
			$('.topic-name').html(feedback1);
			$('.question-content').text(qbank[questionNum].correctDetails);
			$('#question-timer .col-xs-1').html("<i class='fa fa-check-circle-o fa-4x text-success'></i>");
			
		//This updates the score icons

			$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+')').replaceWith("<span><i class='fa fa-check-square-o text-success'></i></span>");
		
		//Check whether quiz is finished
		//Final question correct
		if ((questionNum+1) == questionTotal){

		//This empties the last correct answer

			$('.topic-name').empty();
			$('.question-content').empty();
			$('#choices').empty();

		//This re-populates the final score and progress update

			$('#question-timer > div > div.col-xs-11 > h3').html("Game Over!");
			$('#question-timer > div > div.col-xs-11 > h4').html("You scored "+correctTotal+"/"+questionTotal+".");
			$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+')').replaceWith("<span><i class='fa fa-check-square-o text-success'></i></span>");
			} else {
			questionNum++;
			setTimeout(function(){
			qadisplay();
			}, 7000);
			}

	//Initial question wrong

	} else {
		var feedback2 = "Sorry "+answer+" is wrong!";
		
		//This empties the wrong answer
			
			$('.topic-name').empty();
			$('.question-content').empty();
			$('#choices').empty();

		//This re-populates the elements that were emptied
			
			$('.question-content').text(qbank[questionNum].correctDetails);
			$('.topic-name').html(feedback2);
			$('#question-timer .col-xs-1').html("<i class='fa fa-times-circle-o fa-4x text-danger'></i>");

		//This updates the score icons

			$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+') > i').replaceWith("<span><i class='fa fa-square text-danger'></i></span>");
		
		//Check whether quiz is finished
		//Final question wrong
		if ((questionNum+1) == questionTotal){

		//This empties the last wrong answer
			
			$('.topic-name').empty();
			$('.question-content').empty();
			$('#choices').empty();
			
		//This re-populates the final score and progress update

			$('#question-timer > div > div.col-xs-11 > h3').html("Game Over!");
			$('#question-timer > div > div.col-xs-11 > h4').html("You scored "+correctTotal+"/"+questionTotal+".");
			$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+') > i').replaceWith("<span><i class='fa fa-square text-danger'></i></span>");
			} else {
			questionNum++;
			setTimeout(function(){
			qadisplay();
			}, 7000);
		}
	}
});

//This function displays and hides question/topic when called. Will be called after answer verification 
function qadisplay() {
	
	//This empties the existing question and choices

	$('.topic-name').empty();
	$('.question-content').empty();
	$('#choices').empty();
	
	//This populates the existing question and choices
	
	$('.topic-name').text(qbank[questionNum].topic);
	$('.question-content').text(qbank[questionNum].question);
	var optionsTotal = qbank[questionNum].choices.length;
	
	//This loops through the assigned answer choices
	
	for (var i = 0; i < optionsTotal; i++) {
	$('#choices').append("<button id='option' type='button' value='"+qbank[questionNum].choices[i]+"' class='btn btn-primary btn-lg btn-block'>"+qbank[questionNum].choices[i]+"</button><br>");
	};

}


});
