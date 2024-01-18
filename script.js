const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const btnSubmit = document.querySelector('.submit');
const item = document.querySelector('.item');
const totalScore = document.querySelector('.score');
const btnStartQuiz = document.querySelector('.startQuiz');
const radioButtons = document.querySelectorAll('input[name="options"]');
const displayScore = document.querySelector('.displayScore');
const questions = [
  {
    id: 1234567890,
    question: 'Who is the owner of facebook?',
    options: ['Elon Musk', 'Mark Zuckerberg', 'Bill Gates', 'Steve Jobs'],
    correct: 'Mark Zuckerberg',
  },
  {
    id: 1234567891,
    question: 'Who is the President of USA?',
    options: ['Donald Trump', 'Joe Smith', 'Joe Biden', 'Barrack Obama'],
    correct: 'Joe Biden',
  },
  {
    id: 1234567892,
    question: 'Who is the richest person in the world?',
    options: [
      'Elon Musk',
      'Mark Zuckerberg',
      'Jeff Bezos',
      'Cristiano Ronaldo',
    ],
    correct: 'Elon Musk',
  },
  {
    id: 1234567893,
    question: 'What is the largets planet?',
    options: ['Pluto', 'Mars', 'Earth', 'Jupiter'],
    correct: 'Jupiter',
  },
  {
    id: 1234567894,
    question: 'Who is the greatest physician of all time?',
    options: ['Jesus', 'Dr.Philip', 'Ben carson', 'Good Doctor'],
    correct: 'Jesus',
  },
  {
    id: 1234567895,
    question: 'What is the fastest air animal?',
    options: ['Eagle', 'Falcon', 'Parrot', 'Duck'],
    correct: 'Falcon',
  },
];

let curQuestion = 0;
let score = 0;

const questionItem = () => {
  document.querySelector('.question').innerHTML =
    questions[curQuestion].question;
  document.querySelector('.option--0').innerHTML =
    questions[curQuestion].options[0];
  document.querySelector('.option--1').innerHTML =
    questions[curQuestion].options[1];
  document.querySelector('.option--2').innerHTML =
    questions[curQuestion].options[2];
  document.querySelector('.option--3').innerHTML =
    questions[curQuestion].options[3];
};

console.log(questions);
questionItem();
const answers = radioButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const clicked = e.target.dataset.target;
    // console.log(questions[curQuestion].correct);
    if (
      document.querySelector(`.option--${clicked}`).textContent ===
      questions[curQuestion].correct
    ) {
      console.log('correct');
      score++;
    } else {
      console.log('wrong');
    }
    console.log(score);
  });
});
btnStartQuiz.addEventListener('click', () => {
  document.querySelector('.start').classList.add('visible');
  document.querySelector('.container').classList.remove('visible');
  curQuestion = 0;
});
btnNext.addEventListener('click', (e) => {
  if (curQuestion < questions.length - 1) {
    curQuestion++;
    questionItem();
    var radioBtns = document.getElementsByName('options');
    for (let i = 0; i < radioBtns.length; i++) radioBtns[i].checked = false;
    if (curQuestion === questions.length - 1) {
      btnSubmit.style.display = 'flex';
    }
  }
});
// });
btnPrev.addEventListener('click', () => {
  if (curQuestion < questions.length) {
    curQuestion--;
    console.log(curQuestion);
    questionItem();
  }
});
btnSubmit.addEventListener('click', () => {
  const submit = prompt('Do you want to submit?');
  if (submit === 'yes') {
    console.log('YOU HAVE SUBMITED!');
    console.log(`Your Score is ${score}`);
  document.querySelector('.container').classList.add('visible');
    document.querySelector('.displayScore').classList.remove('visible');
    totalScore.textContent = `${score} points`;
    curQuestion = 0;
  }
});
