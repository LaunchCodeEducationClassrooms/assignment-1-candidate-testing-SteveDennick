const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
 candidateName = input.question("Enter your name here: ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    questionsInput = input.question(`${[i + 1]}) ${questions[i]}`);
    candidateAnswers.push(questionsInput);   
  }
}

let noOfCorrectAnswers = 0
function tallyQuiz() {
  for (let i = 0; i < questions.length; i++) {
    if (i === 0) {
      console.log(`\nCandidate Name: ${candidateName}`)
    }
        console.log(`${[i + 1]}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`)
        console.log("");
          if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
            noOfCorrectAnswers += 1;
          }
  }
}

let status = "";
function gradeQuiz(candidateAnswers){
  tallyQuiz();
  grade = (noOfCorrectAnswers)/(correctAnswers.length)*100
    status = "FAILED"
    if (grade >= 80) {
       status = "PASSED!";
    }
  return console.log(`>>> Overall Grade: ${grade}% (${noOfCorrectAnswers} of 5 responses correct) <<<\n>>> Status: ${status} <<<`)
}



function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName}!`);
  askQuestion(this.candidateAnswers);
  gradeQuiz() 
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};