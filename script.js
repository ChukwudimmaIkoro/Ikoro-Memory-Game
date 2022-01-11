// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.6;  //must be between 0.0 and 1.0
var clueHoldTime = 800; //how long to hold each clue's light/sound
var cluePauseTime = 222; //how long to pause in between clues
var guessCounter = 0;
var numMistakes = 0;
var patternLength = 8;
var numBtns = 6;


function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function getPattern() {
  
  var newArr = new Array(patternLength);
  for (var i = 0; i < patternLength; i++) {
    newArr[i] = randomNumber(1, numBtns);
  }
  return newArr;
}




function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    numMistakes = 0;
    pattern = getPattern(); 
    clueHoldTime = 800;
    cluePauseTime = 222;
  

    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
  cluePauseTime -= 10;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

   if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    if (numMistakes == 2) {
    //Guess was incorrect
    //GAME OVER: LOSE!
      loseGame();
    }
    else {
      numMistakes++;
      
      if (numMistakes == 1) {
      alert("Whoops, that wasn't right. You have 2 more mistakes left.");
      }
      
      if (numMistakes == 2) {
      alert("Uh oh, that wasn't right either. You have 1 more mistake left!");
      }
    }
   
  }
}




// Sound Synthesis Functions

const freqMap = {
  1: 260,
  2: 330,
  3: 390,
  4: 440,
  5: 490,
  6: 512
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Initialization so that the buttons aren't useless before the game starts
for (let i = 0; i < patternLength; i++) pattern[i] = Math.round(Math.random()*numBtns);
let startingFreq = Math.random()*120+120;
for (let i = 0; i < numBtns; i++) freqMap[i+1] = startingFreq+30*i;