const quizSeries = [
    {
    'que' : 'Which of the following is a markup language?',
     'a' : 'HTML',
     'b' : 'javascript',
     'c' : 'CSS',
     'd' : 'PHP',
     'correct' : "a"
},
{
    'que' : 'In Which year was javascript lanuched?',
     'a' : '1996',
     'b' : '1994',
     'c' : '1995',
     'd' : 'none of above',
     'correct' : "b"
},
{
    'que' : 'What was CSS stands for?',
     'a' : 'Hypertext markup Language',
     'b' : 'Cascading Style Sheet',
     'c' : 'Jason Objext Notation',
     'd' : 'Helicopters Terminal Motorboats Lamborgini',
     'correct' : "b"
},
{
    'que' : 'which of the following is a markup language?',
     'a' : 'HTML',
     'b' : 'javascript',
     'c' : 'CSS',
     'd' : 'PHP',
     'correct' : "a"
}

];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')
let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizSeries[questionCount];

    question.innerText = questionList.que;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
   
}

loadQuestion();

const getCheckedAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deSelectAll= () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizSeries[questionCount].correct){
        score++;
    };

     questionCount++;

    if(questionCount < quizSeries.length){
        loadQuestion();
    }else{
      showScore.innerHTML = `
      <h3> You Scored ${score}/${quizSeries.length} 🤙</h3>
      <button class="btn" onclick="location.reload()"></button> 
      `;

      showScore.classList.remove('scoreArea');
    }
});