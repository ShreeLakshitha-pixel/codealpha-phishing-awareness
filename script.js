const questions = [
{
    question: "Your bank asks you to verify your password through email.",
    answer: "Phishing"
},
{
    question: "You won a lottery you never entered.",
    answer: "Phishing"
},
{
    question: "Official HR email about tomorrow's meeting.",
    answer: "Safe"
}
];

let current = 0;
let score = 0;

const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");

function loadQuestion() {
    questionElement.innerText = questions[current].question;
}

function checkAnswer(userAnswer) {

    if (userAnswer === questions[current].answer) {
        score++;
        resultElement.innerHTML = "✅ Correct";
    }
    else {
        resultElement.innerHTML = "❌ Incorrect";
    }

    current++;

    setTimeout(() => {

        resultElement.innerHTML = "";

        if (current < questions.length) {
            loadQuestion();
        }
        else {
            questionElement.innerHTML =
            `🎉 Quiz Completed!<br>Score: ${score}/${questions.length}`;

            resultElement.innerHTML = "";
        }

    }, 1000);
}

loadQuestion();