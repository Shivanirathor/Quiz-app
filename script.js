const question = [{
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
    'que' : 'which of the following is a amsrkup language?',
     'a' : 'HTML',
     'b' : 'javascript',
     'c' : 'CSS',
     'd' : 'PHP',
     'correct' : "a"
}

]
let index = 0;
let total = question.length;
let right = 0,
 wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () =>{
    reset();
  const data = question[index]
  console.log(data);
  queBox.innerHTML = `${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
}

const submitQuiz = () =>{
    const data = question[index]
    const ans = getAnswer();
    if(ans === data.correct){
       right++;
    }else{
      wrong++;
    }
}

const getAnswer = () =>{
    optionInputs.forEach(
        (input) =>{
      if(input.checked){ 
       return input.value;
      }
      }
      
    
    )
}

const reset = () =>{
   optionInputs.forEach{
    (input) => {
        return
    }
   }
}
 


/// initial call
loadQuestion();


// youtube
// const quizData = [{
//     question: "Which of the following is a client site language?",
//     a: "Java",
//     b: "C",
//     c: "Python",
//     d: "JavaScript",
//     correct: "d",
// },
// {
//     question: "What does HTML stand for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Style Sheet",
//     c: "Jason Object Notation",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "a",
// },
// {
//     question: "What year was JavaScript launched?",
//     a: "1996",
//     b: "1995",
//     c: "1994",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "What does CSS stands for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Style Sheet",
//     c: "Jason Object Notation",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "b",
// }
// ];
// let index = 0;
// let correct = 0,
// incorrect = 0,
// total = quizData.length;
// let questionBox = document.getElementById("questionBox");
// let allInputs = document.querySelectorAll("input[type='radio']")
// const loadQuestion = () => {
// if (total === index) {
//     return quizEnd()
// }
// reset()
// const data = quizData[index]
// questionBox.innerHTML = `${index + 1}) ${data.question}`
// allInputs[0].nextElementSibling.innerText = data.a
// allInputs[1].nextElementSibling.innerText = data.b
// allInputs[2].nextElementSibling.innerText = data.c
// allInputs[3].nextElementSibling.innerText = data.d
// }

// document.querySelector("#submit").addEventListener(
// "click",
// function() {
//     const data = quizData[index]
//     const ans = getAnswer()
//     if (ans === data.correct) {
//         correct++;
//     } else {
//         incorrect++;
//     }
//     index++;
//     loadQuestion()
// }
// )

// const getAnswer = () => {
// let ans;
// allInputs.forEach(
//     (inputEl) => {
//         if (inputEl.checked) {
//             ans = inputEl.value;
//         }
//     }
// )
// return ans;
// }

// const reset = () => {
// allInputs.forEach(
//     (inputEl) => {
//         inputEl.checked = false;
//     }
// )
// }

// const quizEnd = () => {
// // console.log(document.getElementsByClassName("container"));
// document.getElementsByClassName("container")[0].innerHTML = `
//     <div class="col">
//         <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
//     </div>
// `
// }
// loadQuestion(index);