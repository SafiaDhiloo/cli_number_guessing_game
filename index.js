#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to CLI Number Guessing Game");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guess number(number limit from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("Congratulation! You guess a correct number.");
}
else {
    console.log("sorry, You guess a wrong number.");
}
