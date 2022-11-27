#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let restart = true;
do {
    const answer = await inquirer.prompt([
        // Object created for operator selection
        {
            name: "operator",
            type: "list",
            message: "Please select your desire Operation: ",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "x raise to the power y",
            ],
        },
        // Object for number 1.
        {
            name: "firstNumber",
            type: "number",
            message: "Please Enter first Number: ",
        },
        // Object for number 2.
        {
            name: "secondNumber",
            type: "number",
            message: "Please Enter Second Number: ",
        },
    ]);
    const generatedVal = calculate(answer.operator, answer.firstNumber, answer.secondNumber);
    if (answer.operator === "x raise to the power y") {
        console.log(chalk.blueBright(`${answer.firstNumber} raise to the power ${answer.secondNumber} is: ${generatedVal}`));
    }
    else {
        console.log(chalk.blueBright(`Answer: ${generatedVal}`));
    }
    const continueUsing = await inquirer.prompt({
        name: "askUser",
        type: "input",
        message: "Do you want to continue using Calculator => Y/N: ",
    });
    restart =
        continueUsing.askUser === "Y" ||
            continueUsing.askUser === "y" ||
            continueUsing.askUser === "Yes" ||
            continueUsing.askUser === "yes"
            ? true
            : false;
} while (restart);
function calculate(opt, num1, num2) {
    switch (opt) {
        case "Addition":
            return num1 + num2;
        case "Subtraction":
            return num1 - num2;
        case "Multiplication":
            return num1 * num2;
        case "Division":
            return num1 / num2;
        case "x raise to the power y":
            return num1 ** num2;
        default:
            console.log("Please select option provided within the List");
            break;
    }
    return 0;
}
