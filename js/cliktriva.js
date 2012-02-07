function questionGenerator()
{
	var self = this;
	
	this.init = function() {
		this.questions = new Array();
		
		this.addQuestion("Who was the first president?", "George Washington", "John Adams", "Thomas Jefferson", "James Monroe", 0);
		this.addQuestion("Who won the superbowl 45 in 2011?", "Saints", "Giants", "Packers", "Eagles", 2);
		this.addQuestion("What nationality was Chopin?", "Polish", "German", "Austrian", "British", 0);
		this.addQuestion("Who painted the Mona Lisa?", "Van Gough", "Da Vinvi", "Picaso", "Fedrick", 1);
		this.addQuestion("What's the capital of Denmark?", "Berlin", "London", "Amsterdam", "Copenhagen", 3);
		this.addQuestion("Which city is Hollywood in?", "Chicago", "Los Angeles", "San Francisco", "New York", 1);
		this.addQuestion("When did the First World War start?", "1912", "1914", "1918", "1928", 1);
		this.addQuestion("Who wrote Julius Caesar, Macbeth and Hamlet?", "Edgar Allan Poe", "Shakespeare", "Oscar Wilde", "Emily Dickinson", 1);
		this.addQuestion("What year did Elvis Presley die?", "1958", "1963", "1977", "1984", 2);
		this.addQuestion("When did the Second World War end?", "1949", "1935", "1945", "1939", 2);
		this.addQuestion("What is the longest river in the Americas?", "Nile", "Amazon", "Mississippi", "Congo", 1);
		this.addQuestion("What is the largest country in the world?", "Brazil", "China", "Canada", "Russia", 3);
		this.addQuestion("Which is the largest ocean in the world?", "Atlantic", "Artic", "Pacific", "Indian", 2);
		
		//this.addQuestion("", "", "", "", "", 0);
	};
	
	this.addQuestion = function( text, ans1, ans2, ans3, ans4, correctanswer)
	{
		var question = new Object();
		question.answers = new Array();
		
		question.text = text;
		question.answers[0] = ans1;
		question.answers[1] = ans2;
		question.answers[2] = ans3;
		question.answers[3] = ans4;
		
		question.correct = correctanswer;
		
		self.questions.push(question);
	};
	
	this.getQuestion = function()
	{
		var randnum = Math.floor ( Math.random() * self.questions.length );
		var question = self.questions[randnum];
		
		self.questions.splice(randnum, 1);
		
		return question;
	};

	this.getQuestionJSON = function(question)
	{
		return JSON.stringify(question);
	};
	
	this.init();
}

function ClikTrivia()
{
	var self = this;
	
	this.init = function()
	{
		this.players = new Array();
		this.scores = new Array();
		this.player_count = 0;
	};
	
	this.addPlayer = function(playerId)
	{
		self.players.push(playerId);
		self.scores.push(0);
	};
	
	this.getPlayer = function(position)
	{
		return self.players[position];
	};
	
	this.findPlayerPosition = function(playerId)
	{
		return self.players.indexOf(playerId);
	};
	
	this.addScore = function(playerId, answerOrdinal)
	{
		//first answer gets 2, second gets 1
		var score = 3 - answerOrdinal;
		self.scores[self.players.indexOf(playerId)] = self.scores[self.players.indexOf(playerId)]+score;
	};
	
	this.getScore = function(playerId)
	{
		return self.scores[self.players.indexOf(playerId)];
	};
	
	this.getScorePos = function(pos)
	{
		return self.scores[pos];
	};
	
	this.checkPlayer = function(playerId)
	{
		return self.players.indexOf(playerId) == -1;
	};
	
	this.getNumPlayers = function()
	{
		return self.players.length;
	};
	
	this.reset = function()
	{
		self.init();
	};
	
	this.init();
}