//cal.ts

import inquirer from "inquirer";
import * as operators from "./operators.js";
import chalk from "chalk";

async function calculator ()   //We have not pass any parameter here because we are not giving any input..
 {
    let {
    number1 ,
    number2 ,
    operator,
}
   = await inquirer.prompt([
    {
    name: "number1",
    type: "number",
    message: chalk.red ("Enter your first number: "),
},
{
    name: "number2",
    type: "number",
    message: chalk.red("Enter your second number: "),
},
{
    name: "operator",
    type: "list",
    message: chalk.cyan("Enter your operator: "),
    choices : ["+" , "-" , "*" , "/"]
},
]);

    if (isNaN(number1) || isNaN(number2)){
        console.log(chalk.bold.redBright("⚠️ Invalid number."));
        return;
    }
    let result: number ;
    if (operator == "+"){
        result = operators.add(number1 , number2);
    }
    else if (operator == "-"){
        result = operators.subtract(number1 , number2);
    }
    else if (operator == "*"){
        result = operators.multiply(number1 , number2);
    }
    else if (operator == "/"){
        result = operators.divide(number1 , number2);
    }
    else {
        throw new Error(chalk.bold.redBright("⚠️ Invalid operator."));
    }
    console.log(chalk.yellowBright(' \n => Result:' , `${number1} ${operator} ${number2} = ${result}`));
    console.log(chalk.magenta.bold.bgWhite("\n ˋ°•*⁀➷⤳ THANK YOU."));
}
calculator();





