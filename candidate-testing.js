const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  for (i = 0; i < questions.length; i++) {
    if (i === questions.length) {
      return candidateAnswers;
    }
      candidateAnswers.push(input.question(questions[i]));
  }
}
function gradeQuiz(candidateAnswers) {
  let answerTotal = 0;
  let status = "FAILED"
    for (i = 0; i < questions.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      answerTotal++;
      }
      if (i === 0) {
      console.log(`\nCandidate Name: ${candidateName}`);
      }
    console.log(`${[i + 1]}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`)
    console.log("");
      }
      if (answerTotal >= 4) {
      status = "PASSED";
      }
      if (i = questions.length) {
      let grade = ((answerTotal)/(questions.length)*100);
          console.log(`>>> Overall Grade: ${grade}% (${answerTotal} of ${correctAnswers.length} responses correct) <<<\n>>> Status: ${status} <<<`);
      return grade;
      }
}


function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName}!`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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