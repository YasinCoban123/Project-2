function checkAnswers() {
  var correctAnswers = ["answer1", "answer4"];
  var score = 0;
  var questions = document.getElementsByName("question1");
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].checked && questions[i].value === correctAnswers[0]) {
      score++;
    }
  }
  questions = document.getElementsByName("question2");
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].checked && questions[i].value === correctAnswers[1]) {
      score++;
    }
  }
  alert("You got " + score + " out of 2 correct!");
}