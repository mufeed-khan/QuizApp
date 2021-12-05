const quizDB=[
    {
        question:'Q1:Whta is the full form of HTMl?',
        a:"hello To my land",
        b:"Hey Text Markup Language",
        c:"HeyperText makeup Language",
        d:'HeyperText makrup Language',
        ans:"ans4"
    },
    {
        question:'Q2:Inside which HTML element do we put the JavaScript?',
        a:"<js>",
        b:"<javaScript>",
        c:"<scriptng>",
        d:'<script>',
        ans:"ans4"
    },
    {
        question:'Q3:How do you write "Hello World" in an alert box?',
        a:"msg('hello world)",
        b:"alert('hello world)",
        c:"msgBox('hello world)",
        d:"alertBox('hello world)",
        ans:"ans2"
    },
    {
        question:'Q4:How do you create a function in JavaScript?',
        a:"function=myFunction()",
        b:"function:myfunction",
        c:"function myFunction()",
        d:'function myFunction',
        ans:"ans3"
    },
    {
        question:'Q5:How do you call a function named "myFunction"?',
        a:"myFunction()",
        b:"call myFunction() ",
        c:"call function myFunction()",
        d:'call=myFunction()',
        ans:"ans1"
    },
    {
        question:'Q6:How to write an IF statement in JavaScript?',
        a:"if i=5 then",
        b:"if(i==5)",
        c:"if i==5 then",
        d:'if i =5',
        ans:"ans2"
    },
    {
        question:'Q7:How does a FOR loop start?',
        a:"for(i=0;i<=5;i++)",
        b:"for(i=0;i<=5)",
        c:"for i=1 to 5",
        d:'for(i<=5;i++)',
        ans:"ans1"
    },
    {
        question:'Q8:Choose the correct HTML element for the largest heading:',
        a:"<head>",
        b:"<h6>",
        c:"<heading>",
        d:'<h1>',
        ans:"ans4"
    },
    {
        question:'Q9:What is the correct HTML element for inserting a line break?',
        a:"<br>",
        b:"<lb>",
        c:"<break>",
        d:'<jump>',
        ans:"ans1"
    },
    {
        question:'Q10:What does CSS stand for?',
        a:"computer style sheets",
        b:"colorful style sheets",
        c:"cascading style sheets",
        d:'creative style sheets',
        ans:"ans3"
    },
]
const question=document.querySelector('.question');
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const submit=document.querySelector('#submit')

const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore')

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount]
    question.innerText= questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

    
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    })
    return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked=false;
    })
}
submit.addEventListener('click',()=>{
  const  checkedAnswer=getCheckAnswer()
  console.log(checkedAnswer);

  if(checkedAnswer === quizDB[questionCount].ans){
      score++;
  }
  questionCount++;
  deselectAll();

  if(questionCount < quizDB.length){
      loadQuestion();
  }else {
    showScore.innerHTML=`
      <h3> You scored ${score} /${quizDB.length} </h3>
      <button class='btn' onclick='location.reload()'> play again</button>`;
      
      showScore.classList.remove('scoreArea')

  }
})