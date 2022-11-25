import inquirer from "inquirer";
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
            "Modules",
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
switch (answer.operator) {
    case "Addition":
        console.log(answer.firstNumber + answer.secondNumber);
        break;
    case "Subtraction":
        console.log(answer.firstNumber - answer.secondNumber);
        break;
    case "Multiplication":
        console.log(answer.firstNumber * answer.secondNumber);
        break;
    case "Division":
        console.log(answer.firstNumber / answer.secondNumber);
        break;
    case "Modules":
        console.log(answer.firstNumber % answer.secondNumber);
        break;
    default:
        console.log("Please select option provided within the List");
        break;
}
