var question1 = {
    question: "What day is it today?",
    answers: ["Friday", "Saturday", "Sunday", "Thursday"],
    correct: "Friday"
  }

  var question2 = {
    question: "What day is it today?",
    answers: ["Friday", "Saturday", "Sunday", "Thursday"],
    correct: "Friday"
  }

  var question3 = {
    question: "What day is it today?",
    answers: ["Friday", "Saturday", "Sunday", "Thursday"],
    correct: "Friday"
  }

  var question4 = {
    question: "What day is it today?",
    answers: ["Friday", "Saturday", "Sunday", "Thursday"],
    correct: "Friday"
  }

  var questions = [question1, question2, question3, question4];

  var userAnswers = [
    { answer: "" },
    { answer: "" },
    { answer: "" },
    { answer: "" }
  ]

  var outputArea = document.getElementById("output");

  for (var i = 0; i < questions.length; i++) {
    var newQuestionDiv = document.createElement('div');
    newQuestionDiv.classList = "newQuestion";

    var newQuestionQuestion = document.createElement('h3');
    newQuestionQuestion.textContent = questions[i].question;

    var newButtonArea = document.createElement('div');
    newButtonArea.classList = 'buttonArea';

    for (var j = 0; j < questions[i].answers.length; j++) {
      var newButton = document.createElement('button');
      newButton.classList = "answerBtn answerBtn" + i;
      newButton.setAttribute('data-answer', questions[i].answers[j]);
      newButton.setAttribute('data-question', i)
      newButton.textContent = questions[i].answers[j];

      // jQuery
      // var newButton = $("<button>").addClass("answerBtn answerBtn" + i).text(questions[i].question)

      newButton.addEventListener('click', function(e) {
        console.log(e.target.dataset.answer + " userAnswer");
        console.log(e.target.dataset.question);
        var answer = e.target.dataset.answer;
        var question = e.target.dataset.question;
        // Grab all buttons on same question change className back
        var btns = document.querySelectorAll('.answerBtn' + question);


        for (var d = 0; d < btns.length; d++) {
          btns[d].classList = 'answerBtn answerBtn' + question;
        }

        this.classList = 'answerBtn answerBtn' + question + ' btnSelected';


        userAnswers[question].answer = answer;
        console.log(userAnswers);
      });

      newButtonArea.append(newButton);
    }


    newQuestionDiv.append(newQuestionQuestion, newButtonArea);

    outputArea.append(newQuestionDiv)
  }

  var controlBtn = document.getElementById("controlBtn");
  controlBtn.addEventListener('click', function() {
    var right = 0;
    var wrong = 0;

    for (var i = 0; i < questions.length; i++) {
      if (userAnswers[i].answer === questions[i].correct) {
        right++;
      } else {
        wrong++
      }
    }

    console.log(right, wrong)
  })