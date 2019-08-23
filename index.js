var getAnswerButton = document.querySelector('.get-answer-button');
var questionsAnswers = document.querySelector('.questions-answers');
var askQuestionButton = document.querySelector('.ask-question-button');

getAnswerButton.addEventListener('click', function () {
  questionsAnswers.classList.toggle('questions-answers-text');
  console.log(askQuestionButton.value);

});
