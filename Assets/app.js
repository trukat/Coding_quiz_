var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<scripting>", "<js>", "<javascript>"],
        correctAnswer: ["<script>"]
    },
    {
        question: "How does a FOR loop start?",
        choices: ["for(i<=5; i++)", "for i = 1 to 5", "for (i=0; i <=5)", "for(i=0; i <=5; i++)"],
        correctAnswer: ["for(i=0; i <=5; i++)"]
    },
    {
        question: "How can you add a comment in JavaScript?",
        choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment'", "${This is a comment}"],
        correctAnswer: ["//This is a comment"]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["*", "-", "=", "X"],
        correctAnswer: ["="]
    }]

var currentQuestionIndex = 0

var timerCount = 100
var timerEl = document.querySelector("#timer")
var startButton = document.querySelector("#startTime")
var startScreenEl = document.querySelector("#quiz")
var quizQuestions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var choicesEl = document.querySelector("#choices")


function getQuestions() {
    var currentQuestion = myQuestions[currentQuestionIndex]
    questionTitle.textContent = currentQuestion.question
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("class", "choice")
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = choice
        choicesEl.appendChild(choiceButton)
    })
}


function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    quizQuestions.removeAttribute("class")
    timerEl.textContent = timerCount
    var timer = window.setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount
      
        if (timerCount === 0) {
          clearInterval(timer)
        }
      }, 1000)
      getQuestions()
}

choices.addEventListener("click", function() {
    if(choicesEl === myQuestions[currentQuestionIndex].correctAnswer) {
        console.log("This is the right answer.")
        currentQuestionIndex++
        getQuestions()
    }   else {
        console.log("This is wrong answer.")
        timerCount -= 10
    }
})






startButton.onclick= startQuiz