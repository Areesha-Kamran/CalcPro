#! /usr/bin/env node

import chalkanimation from "chalk-animation"

async function welcome () {
    let title = chalkanimation.rainbow("\t\t\t\tWelcome to CalcPro!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()


import chalk, { Chalk } from "chalk";
import inquirer from "inquirer";


// Asking question from users through inquirer

const calculator = await inquirer.prompt([
  { message: (chalk.bold.cyanBright("Enter First Number")), type: "number", name: "firstNumber" },
  { message: (chalk.bold.cyanBright("Enter Second Number")), type: "number", name: "secondNumber" },
  {
    message: ("Select One of the Operator to Perform Funtion"),
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"]
  },
]);

// conditional test
if (calculator.operator === "Addition") {
  console.log(calculator.firstNumber + calculator.secondNumber);
}
 else if (calculator.operator === "Subtraction") {
  console.log(calculator.firstNumber - calculator.secondNumber);
}
 else if (calculator.operator === "Multiplication") {
  console.log(calculator.firstNumber * calculator.secondNumber);
} 
else if (calculator.operator === "Division") {
  console.log(calculator.firstNumber / calculator.secondNumber);
}
else{
    console.log(chalk.red.bold("Invalid Input"))
}
