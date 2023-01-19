function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
var audio = document.getElementById("backgroundtrack2");
audio.loop = true;
audio.play();

let sound_wrong = new Audio('sound/losesound.mp3.mp3');
let sound_right = new Audio('sound/buttonsound.mp3');

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}


// Displaying the question
function displayQuestion() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      // show options
      let choices = quiz.getQuestionIndex().choices;
      for(let i = 0; i < choices.length; i++) {
          let choiceElement = document.getElementById("choice" + i);
          choiceElement.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      displayQuestion();
  }
};


function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let ProgressElement = document.getElementById("progress");
  ProgressElement.innerHTML = 
  `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
  audio.play();
  sound_wrong.play();
  sound_right.play();
};

function showScores() {
  let quizEndHTML = 
  `
  <h1>Quiz Completed</h1>
  <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
  <div class="quiz-repeat">
      <a href="gameyasin.html">Take Quiz Again</a>
  </div>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
  sound_wrong.play();
};

// create questions here
let questions = [
  new Question(
      "Wie was de leider van Duitsland in de Tweede Wereld Oorlog.", 
      ["Benito Mussolini", "Joseph Stalin","Geert Wilders", "Adolf Hitler"], "Adolf Hitler"
      
  ),
  new Question(
      "Wat is de volledige naam van css?", 
      ["Cascading Style Sheets", "Computer Script Service", "Computer Style Sheet", "Back end Program"], "Cascading Style Sheets"
  ),
  new Question(
      "Welk land is momenteel de grootste in de wereld.", 
      ["VS", "China","Rusland", "Monaco"], "Rusland"
      ),
  new Question(
      "Welk van deze auto’s zijn het duurste.", 
      ["Pagani Huayra", "Koenigsegg CCXR Trevita", "Lamborghini Veneno", "Fiat Punto"], "Koenigsegg CCXR Trevita"
      ),
  new Question(
      "Welk land heeft de meeste eilanden.", 
      ["Canada", "Rusland", "Zweden", "Denemarken"], "Zweden"
      ),
  new Question(
      "Wat is het meest gebruikte programmeer taal in de wereld.", 
      ["Phyton", "Javascript", "Java", "HTML"], "Java"
      ),
  new Question(
      "Wat is de volledige naam van PHP.", 
      ["Hypertext Preprocessor", "Personal Home Page","Peer to Peer", "Personal Home Preprocessor"], "Hypertext Preprocessor"
      ),
  new Question(
      "Wie was de eerste keizer van Rome.", 
      ["Romulus Augustulus", "Nero","Julius Caesar", "Augustus(Octavian)"], "Augustus(Octavian)"
      ),
  new Question(
      "Welk land heeft de meeste inwoners in de wereld.", 
      ["China", "India","Bhutan", "Turkije"], "China"
      ),
  new Question(
      "Wat is 77 + 33>", 
      ["107", "100","110", "90"], "110"
      ),
  new Question(
      "Waarom begon de Eerste Wereld Oorlog?", 
      ["De moord op de keizer van Oostenrijk-Hongarije", "De moord op Aarthertog Franz Ferdinand","Duitse invasie van Polen", "Duitse ambities in Europa"], "De moord op Aarthertog Franz Ferdinand"
      ),
  new Question(
      "In Welk jaar was HTML gemaakt?", 
      ["1991", "1965","2001", "1980"], "1991"
      ),
  new Question(
      "Wat is de hoofdstad van de VS?", 
      ["Ohio", "Washington D.C","New York", "San Fransisco"], "Washington D.C"
      ),
  new Question(
      "Welk land is de kleinste in de wereld?", 
      ["San Marino", "Rusland","De Vaticaan", "Nederland"], "De Vaticaan"
      ),
  new Question(
      "Wie is de premier van Nederland?", 
      ["Joe Biden", "Mark Rutte","Gerrit Schimmelpenninck", "John Doe"], "Mark Rutte"
      ),
  new Question(
      "Welk land maakt de meeste hazelnoten in de wereld per jaar?", 
      ["Turkije", "Iran","De VS", "China"], "Turkije"
      ),   
  new Question(
      "Wanneer eindigde de Tweede Wereld Oorlog?", 
      ["1938", "1936","1945", "1948"], "1945"
      ),
  new Question(
      "welk sport is de meest beroemd in de wereld?", 
      ["Voetbal", "Volleybal","Basketbal", "Tennis"], "Voetbal"
      ),
  new Question(
      "Wat betekent G.O.A.T?", 
      ["Grandest Of All Time", "Greatest Of All Tables","Goodest Of All Time", "Greatest Of All Time"], "Greatest Of All Time"
      ),
  new Question(
      "Wie is de G.O.A.T?", 
      ["Cristiano Ronaldo dos Santos Aveiro", "Lionel Andrés Messi Cuccittini","Jacob Harry Maguire", "Pelé"], "Cristiano Ronaldo dos Santos Aveiro"
      ) 
];

// Loop through the array and get the answers
// questions.forEach((answer) => {
//     console.log(answer.choice);
//     let quizAnswers = document.getElementById("quiz-answers");
//     // quizAnswers.innerHTML = questions.text;
// })


// create quiz
let quiz = new Quiz(questions);
// display quiz
displayQuestion();

// Add A CountDown for the Quiz
let time = 30;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown(){
  let quizTimer = setInterval(function(){
  if(quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
  } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;   
  }
},1000);
}

startCountdown();
