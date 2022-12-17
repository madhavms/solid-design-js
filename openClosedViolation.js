//Dont make changes to printQuiz function when a new type of
//question is added to the list
//We should to able to change the questions without modifying the
//function printQuiz --> This is means closed for modification

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(`\n${question.description}`);
    switch (question.type) {
      case "boolean":
        console.log("1.True");
        console.log("2.False");
        break;
      case "multiplechoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: _____________");
        break;
      case "range":
        console.log("Minimum: _____________");
        console.log("Maximum: _____________\n");
        break;
    }
  });
}

const questions = [
  {
    type: "boolean",
    description: "Is this video useful?",
  },
  {
    type: "multiplechoice",
    description: "What is your favourite language?",
    options: ["CSS", "HTML", "Javascript", "Python"],
  },
  {
    type: "text",
    description: "Describe your favourite JS feature.",
  },
  {
    type:'range',
    description:"What is the speed limit in your city?"
  }
];

printQuiz(questions);
