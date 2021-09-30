const quizform = document.querySelector('.Question');
const SubmitAnswerBtn = document.querySelectorAll("#answer-btn");
const output1 = document.querySelector("#output");


const correctAnswers = ["90°", "right angled", "one right angle", "Equilateral triangle"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    let text = " Your Score is : " + score;
    output.innerText = text;
};

submit.addEventListener("click", calculateScore);