// window.onload = function (){

// var wordList ; // list of words
// var hint ; // hints
// var chosenWord ; // user guess
// var guesses = []; // stored guesses
// var lives ; // live count (max 8)
// var counter ; // wins 
// var space = 0; // number of spaces in word 

// 	this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
// 	this.guessedLetters = [];
// 	this.errors = 0;
// 	this.visibleLetters = [];
// 	this.gameOver = false;
// 	this.alertLines = emptyAlert;
// 	for (var i = 0; i < this.word.length; i++) {
// 		this.visibleLetters[i] = (false);
// 	}
// }

// var hint = [
// "First person shooter", 
// "Hack and slash", 
// "A PVP game that involves building skills and destructible environments",
// "MMORPG",
// "Collectible card game",
// "MOBA",
// "MOBA with the largest prize pool in esports",
// "An open world first person survival video game",
// "Nintendo",
// "Science fantasy role-playing",
// "Tower defense",
// "Arcade battle game",
// "Action-advencture",
// "Iconic first person shooter",
// "Iconic game of the 90s returned as an AR game",
// "Sandbox"
// ]

// // randomize choice of words
// var randomNum = Math.floor(Math.random() * word.length);
// var chooseWord = word[randomNum];
// // underscore base on length of word
// var 
// for (var i = 0; i < chooseWord.length; i++) {

// }

// }

var doubleWord = 'abcdefghijklmnopqrstuvwxyz'.split('');

var wordList = [
            "overwatch",
            "diablo",
            "fortnite", 
            "starcraft", 
            "hearthstone", 
            "tetris", 
            "dota", 
            "halo", 
            "portal",
            "bioshock",
            "destiny", 
            "battlefield",
            "doom",
            "witcher", 
            "fallout", 
            "pokemon",
            "minecraft"
        ];

//Holds choosenWord
var choosenWord = "";
//Holds letters in word
var lettersInWord = "";
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
var blanksAndSuccesses = blanksAndSuccesses;
// Result announcement
var winAnnounce = "You Win!";
var loseAnnounce = "You Lose!";

// RESET GAME =======
function reset()
{
	choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses = [];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}

// START GAME =======
    function startGame()
{
	choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	lettersInWord = choosenWord.split('');
    numBlanks = lettersInWord.length;
    
    if (choosenWord)
    {

    }

	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c', 'd','e','f', 'g','h','i', 'j','k','l', 'm','n','o', 'p','q','r','s','t','u', 'v','w','x', 'y','z'];

	//Generate blanks
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').textContent = blanksAndSuccesses;
	}

	//Changes HTML 
	document.getElementById('wordToGuess').textContent = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').textContent = guessesLeft;
	document.getElementById('winCounter').textContent = winCount;
	document.getElementById('lossCounter').textContent = loseCount;
	document.getElementById('wrongGuesses').textContent = wrongLetters;

}

function compareLetters(userKey){

	if(choosenWord.indexOf(userKey) > -1) 

	{	
		for(var i = 0; i < numBlanks; i++)
			{
			if(lettersInWord[i] === userKey)
			{
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey
                document.getElementById('wordToGuess').textContent = blanksAndSuccesses.join(' ');              
			}	
			}
		}

			else
			{
				wrongLetters.push(userKey);
				guessesLeft--;
				document.getElementById('numGuesses').textContent = guessesLeft;
				document.getElementById('wrongGuesses').textContent = wrongLetters;
			}		
		}


function winLose() 
	{
	if(rightGuessCounter === numBlanks && guessesLeft > 0)
	{
		winCount++;
		document.getElementById('winCounter').textContent = winCount;
		document.getElementById('announce').textContent = winAnnounce;
		reset();
    }
    
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById('lossCounter').textContent = loseCount;
        document.getElementById('announce').textContent = loseAnnounce;
		reset();
	}
}

startGame();

document.onkeyup = function(event)

{
	test = true;
	var letterGuessed = event.key.toLowerCase();
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
            var spliceDword = doubleWord.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}