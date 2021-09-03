var readlineSync = require("readline-sync");
var chalk = require("chalk");
const log = console.log;

var score = 0;

log(
  chalk
    .keyword("red")
    .bgYellow.underline(
      "\nLet us check how much do you know about Indian Geography"
    )
);

var user = readlineSync.question(
  chalk.keyword("red")("\nEnter your Name-") + " "
);

log(
  chalk.keyword("white").bgYellow("\nWelcome,") +
    chalk.keyword("red").bgYellow(user.toUpperCase()) +
    chalk.bgYellow(" to the quiz.")
);

log(
  chalk
    .keyword("red")
    .bold(
      chalk.red.underline("\nRules:\n") +
        "\n1-There Are Total Of Five Questions...." +
        "\n2-For Each Correct Answer, You Will Get 10 Points...." +
        "\n3-For Each Wrong Answer 5 Point Will Be Deducted.....\n"
    )
);

var leaderBoard = [
  {
    place: 1,
    name: "Navneet",
    score: 45,
  },

  {
    place: 2,
    name: "Abhi",
    score: 35,
  },

  {
    place: 3,
    name: "Mehul",
    score: 30,
  },
];

log("\n" + "===================================================" + "\n");

log(chalk.keyword("red").bgYellow.underline("LEADERBOARD-\n"));
log(chalk.keyword("orange").bold("Place\t" + "Name\t" + "\tScore"));

for (var i = 0; i < leaderBoard.length; i++) {
  log(
    leaderBoard[i].place +
      "\t\t" +
      leaderBoard[i].name +
      "\t\t" +
      leaderBoard[i].score
  );
}

log("\n" + "===================================================" + "\n");

var questions = [
  {
    question: " Which is the capital of Uttar Pradesh?",
    options: ["Mysore", "Kanpur", "Indraprastha", "Lucknow"],
    answer: "Lucknow",
  },

  {
    question:
      "Which among the following states of India is also known as Dev Bhoomi ",
    options: ["Uttar Pradesh", "Uttarkhand", "Rajasthan", "Kerala"],
    answer: "Uttarkhand",
  },

  {
    question: "Which one is the oldest refinery in India?",
    options: ["Guwahati", "Barauni", "Mangalore", "Digboi"],
    answer: "Digboi",
  },

  {
    question: "Which one is the highest mountain peak in India?",
    options: ["Everest", "Yamnotri", "Nanda Devi", "Kangchenjunga"],
    answer: "Kangchenjunga",
  },

  {
    question: " Which state is the largest producer of rice in India?",
    options: ["West Bengal", "Andhra Pradesh", "Punjab", "Uttar Pradesh"],
    answer: "West Bengal",
  },

  {
    question: " Which one is the oldest mountain range in India?",
    options: ["Himalayas", "Aravalli", "Starupa", "Nilgiri"],
    answer: "Aravalli",
  },
];

function Quiz(options, question, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (options[userAnswer] === answer) {
    score = score + 10;
    log(chalk.green("\nYour Answer Is Correct.. " + "\n"));
    log(chalk.green("Current Score : " + score));
    log("\n" + "===================================================");
  } else {
    score = score - 5;
    log(chalk.red("\nYour Answer Is Wrong.." + "\n"));
    log(chalk.red("Current Score : " + score));
    log("\n" + "===================================================");
  }
}

var j = 1;

for (var i = 0; i < questions.length; i++) {
  log(chalk.keyword("red").bgWhite.underline.bold("\nQuestion " + j++ + "-"));
  Quiz(questions[i].options, questions[i].question, questions[i].answer);
}

log(chalk.green("Final Score: " + score));

var highScores = [45, 35, 30];

for (var i = 0; i < highScores.length; i++) {
  if (score > highScores[i]) {
    log(
      chalk
        .keyword("red")
        .bgBlue.bold("\nCongratulations!! You Are A High Scorer")
    );
    break;
  } else {
    log(
      chalk
        .keyword("red")
        .bgBlue.bold("\nSorry!! You Are Not Among Highest Scorer....Retry!!!\n")
    );
    break;
  }
}
