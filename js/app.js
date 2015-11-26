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
		correctDetails:'First called the “World Cup” or “Victory”, the trophy was renamed in 1946 in honor of Jules Rimet who can be considered as the creator of the Football World Cup. The trophy bears Nike, the Greek goddess of Victory, holding an octagonal chalice on her head. It was created by French sculptor Abel Lafleur and measures 32 inches high, weighs 3.8 kilograms, and was plated with sterling silver. '
		},

	//Question 2  
	 	{
	 	topic: 'International',
	    question: 'When was the world’s first official football body, the Football Association (FA), established?',
	    choices: ['1853', '1863', '1873', '1883'],
		correct: 1,
		correctDetails:'On October 26, 1863, 12 English clubs and school representatives gathered to form the Football Association (FA). The purpose of the organization was to formulate official football rules, as different teams of that time played with their own set of rules. It was also in this year that the official name of the game, association football, was established to distinguish it from rugby football.'
		},

	//Question 3
	  	{
	  	topic: 'International',
	    question: 'Against what country England played history’s first international football fixture?',
	    choices: ['Scotland', 'France', 'Belgium', 'Italy'],
	    correct: 0,
		correctDetails:'History’s first international football fixture was played between Scotland and England on November 30, 1872 in Glasgow, Scotland. It was, however, not the first meeting between the two teams as they have faced each other in a number of unofficial matches organized by the Football Association of England.'
		},  

	//Question 4
		{
		topic: 'Club',
		question: 'What is the oldest football club in history according to FIFA? ',
		choices: ['The Football Club of Edinburgh (Scotland)', 'TSV 1860 München (Germany)', 'Sheffield F.C. (England)', 'Melbourne Football Club (Australia)'],
		correct: 2,
		correctDetails:'Football began to be played informally by a club in Sheffield in 1855. On October 24, 1857, the Sheffield Football Club was established and has become the oldest documented club in football. The first matches were between club members, married men against bachelors. The club also formulated its own set of football rules, known as the Sheffield Rules.'
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
		correctDetails:'In 1970, Telstar became the first official soccer ball of a World Cup. It has 32 black-and-white panels and has since become an icon of the game. It was manufactured by giant football brandAdidas and got its name from a communication satellite which has a similar geometry to it.'
		},

	//Question 7
		{
		topic: 'World Cup',
		question: 'How many goals the French Just Fontaine scored during the 1958 World Cup?',
		choices: ['9 goals', '11 goals', '13 goals', '15 goals'],
		correct: 2,
		correctDetails:'Just Fontaine emerged as top-scorer during the 1958 World Cup with 13 goals in six games, a record for most goals in a single World Cup. His best game of the tournament was against Germany in which he scored four goals in a 6-3 victory. Fontaine was not assured of a place in theFrench football squad and was only taken in when club team-mate Rene Bliard suffered an ankle injury.'
		},   

	//Question 8
		{
		topic: 'Euros',
		question: 'What country made history in 1960 by winning the first European football championship?',
		choices: ['Soviet Union', 'Yugoslavia', 'West Germany', 'Spain'],
		correct: 0,
		correctDetails:'The Euro 1960 is the first European Nations Football Championship in history and, has since, been held every four years by UEFA. The final tournament of 1960 was played in France and won after extra time by USSR over Yugoslavia in a 2-1 score.'
		},

	//Question 9
		{
		topic: 'La Liga',
		question: 'For which historic Spanish club the Hungarian striker Ferenc Puskas played?',
		choices: ['FC Barcelona', 'Atletico Madrid', 'Real Madrid', 'Espanol Barcelona'],
		correct: 2,
		correctDetails:'Legendary footballer, Puskas was greeted with much skepticism when he went to Spain for Real Madrid. But he quickly found a place alongside greats like Di Stefano, Kopa, and Gento. He became a darling of the public who nicknamed him “Sancho” (the Hispanic form of Ferenc) and “Canoncito Poum” (Little Cannon).'
		},  

	//Question 10
		{
		topic: 'England',
		question: 'Which football player of the 1960s was dubbed as “The Fifth Beatle”?',
		choices: ['George Best', 'Bobby Moore', 'Bobby Charlton', 'Duncan Edwards'],
		correct: 0,
		correctDetails:'With a mop top haircut and a rock star lifestyle, George Best earned the nickname “The Fifth Beatle” in the mid-1960s. The tag was popularized by British press who saw him both as a sporting and style icon.'
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
	//alert("outside qadisplay");
	//var answer = document.getElementById("option").value;
	var answer = this.value;
	console.log(answer);
	var correctAnswer = qbank[questionNum].choices[qbank[questionNum].correct];
	console.log(correctAnswer);
	if (answer == correctAnswer){
		//alert('pause');
		var feedback1 = "Congratulations "+answer+" is correct!";
		correctTotal++;
		$('.topic-name').empty();
		$('.question-content').empty();
		$('#choices').empty();
		$('.topic-name').html(feedback1);
		$('.question-content').text(qbank[questionNum].correctDetails);
		$('#show').replaceWith("<i class='fa fa-check-circle fa-4x id='show'></i>");
		$('#show').replaceWith("<i class='fa fa-spinner fa-pulse fa-4x' id='show'></i>");
		$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+') > i').replaceWith("<span><i class='fa fa-check-square-o'></i></span>");
		alert('pause');
		//check whether quiz is finished
		if ((questionNum+1) == questionTotal){
			alert("last question true");
			$('.topic-name').empty();
			$('.question-content').empty();
			$('#choices').empty();
			$('#question-timer > div > div.col-xs-11 > h3').html("Game Over!");
			$('#question-timer > div > div.col-xs-11 > h4').html("You scored "+correctTotal+"/"+questionTotal+".");
			$('#score-share > div > div:nth-child(1)').html("<h4>Score = "+correctTotal+"/"+questionTotal+"</h4>");
			} else {
			questionNum++;
			//$('#show').replaceWith("<i class='fa fa-spinner fa-pulse fa-4x' id='show'></i>");
			qadisplay();
			}
	//call scoreupdate
	} else {
		//alert('pause');
		var feedback2 = "Sorry "+answer+" is wrong!";
		$('.topic-name').empty();
		$('.question-content').empty();
		$('#choices').empty();
		$('.question-content').text(qbank[questionNum].correctDetails);
		$('.topic-name').html(feedback2);
		$('#show').replaceWith("<i class='fa fa-times-circle-o fa-4x' id='show'></i>");
		$('#show').replaceWith("<i class='fa fa-spinner fa-pulse fa-4x' id='show'></i>");
		$('#score-share > div > div:nth-child(1) > span:nth-child('+(questionNum+2)+') > i').replaceWith("<span><i class='fa fa-square'></i></span>");
		alert('pause');
		
		//check whether quiz is finished
		if ((questionNum+1) == questionTotal){
			alert("last question true");
			$('.topic-name').empty();
			$('.question-content').empty();
			$('#choices').empty();
			$('#question-timer > div > div.col-xs-11 > h3').html("Game Over!");
			$('#question-timer > div > div.col-xs-11 > h4').html("You scored "+correctTotal+"/"+questionTotal+".");
			$('#score-share > div > div:nth-child(1)').html("<h4>Score = "+correctTotal+"/"+questionTotal+"</h4>");
			} else {
			questionNum++;
			//$('#show').replaceWith("<i class='fa fa-spinner fa-pulse fa-4x' id='show'></i>");
			qadisplay();
			}
	}
	});

//This function displays and hides question/topic when called. Will be called after answer verification 
function qadisplay() {
	//alert("inside qadisplay");
	$('#show').replaceWith("<i class='fa fa-spinner fa-pulse fa-4x' id='show'></i>");
	$('.topic-name').empty();
	$('.question-content').empty();
	$('#choices').empty();
	$('.topic-name').text(qbank[questionNum].topic);
	$('.question-content').text(qbank[questionNum].question);
	var optionsTotal = qbank[questionNum].choices.length;
	//console.log(optionsTotal);
	for (var i = 0; i < optionsTotal; i++) {
	$('#choices').append("<button id='option' type='button' value='"+qbank[questionNum].choices[i]+"' class='btn btn-primary btn-lg btn-block'>"+qbank[questionNum].choices[i]+"</button><br>");
	};
}
//This function updated the score 
function scoreupdate() {

}
function btnvalue () {


}

});
