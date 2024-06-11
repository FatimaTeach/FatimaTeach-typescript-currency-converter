#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("\n\t Welcome to the currency converter \n"))

// define the list of currencies and their exchange rate

let exchange_rate:any = {
"USD": 1, // base currency
"EURO":0.9, // euro
"JYP":113, // japenease
"CAD":1.3, // canadian
"AUD":1.65, // australian dollar
"PKR":280, // pak rupees
// can add more currencies and exchange rate here

}

// prompt the user to select the currencies to convert from and to 

let user_answer = await inquirer.prompt([

  {
    name: "from_currency",
    type:"list",
    message:"Select the currency to convert from",
    choices:["USD", "EURO", "JYP", "CAD", "AUD", "PKR"]

  },

  {
    name:"to_currency", 
    type:"list",
    message:"Select the currency to convert into:",
    choices:["USD", "EURO", "JYP", "CAD", "AUD", "PKR"],

  },

  {
    name:"amount",
    type:"input",
    message:"Enter the amount to convert:"
  }
]);
 
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula for conversion

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount

console.log(`converted amount = ${chalk.blue(converted_amount.toFixed(2))}` );

