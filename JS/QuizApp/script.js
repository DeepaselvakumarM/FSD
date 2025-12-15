// const quizData = [
//     {
//       question: "What is the capital of France?",
//       options: ["London", "Berlin", "Paris", "Madrid"],
//       answer: "Paris"
//     },
//     {
//       question: "Which language is used for web apps?",
//       options: ["Python", "Java", "C#", "JavaScript"],
//       answer: "JavaScript"
//     },
//     {
//       question: "What is 2 + 2?",
//       options: ["3", "4", "5", "2"],
//       answer: "4"
//     }
//   ];



//   let currentIndex=0
//   let score=0


//   const questionEl = document.getElementById("question");
//   const optionsEl = document.getElementById("options");
//   const nextBtn = document.getElementById("nextBtn");
//   const scoreBoard = document.getElementById("scoreBoard");


// function loadQuestion(){
//     const currQuestion=quizData[currentIndex]

//     questionEl.textContent=currQuestion.question

//     optionsEl.innerHTML=""
// currQuestion.options.forEach(option=>{
//   const btn=document.createElement("button")
//   btn.textContent=option
//   btn.classList.add("btn","option")
//   btn.onclick=()=>checkAnswer(option)
//   optionsEl.append(btn)
// })

// }

// function checkAnswer(select){
//     const correct=quizData[currentIndex].answer
//     if(select===correct){
//         score++
//     }
// currentIndex++
// nextBtn.style.display="inline-block"
// }

// nextBtn.addEventListener("click",()=>{
//     nextBtn.style.display="none"
//     if(currentIndex<quizData.length){
//         loadQuestion()
//     }
//     else{
//         showScore()
//     }
// })


// function showScore(){
//     document.getElementById("quiz").style.display="none"
//     scoreBoard.innerHTML=`you scored ${score} out of ${quizData.length}`
// }




// loadQuestion()



const passingmarks=35;
let totalStudents=0;

const schoolName="ABC school";
let isAdmissionOpen=true;
const maxMarks=100;


console.log(`Welcome to ${schoolName}!`);
console.log(`Admission Open: ${isAdmissionOpen}`);

let students = [
    { name: "Deepa", marks: 85, subjects: ["Math", "Science"] },
    { name: "Arjun", marks: 28, subjects: ["Math", "English"] },
    { name: "Priya", marks: 65, subjects: ["History", "Science"] },
    { name: "Kiran", marks: 92, subjects: ["Math", "Computer"] }
];

totalStudents=students.length;

function calculation(marks){
  return (marks/maxMarks)*100;
}

const haspassed=marks=> marks>=passingmarks;

let passedStudents=students.filter(student=>haspassed(student.marks))


let percentages=students.map(student=>({
  ...student,percentage:calculation(student.marks)
}))