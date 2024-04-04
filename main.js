#! /usr/bin/env node
//todolistapp
//array
//operation
//function
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
async function maketodo(todos) {
    do {
        console.log(chalk.blue.bold.italic("WELCOME TO THE TODO LIST APP"));
        let operation = await inquirer.prompt([
            {
                name: "operation",
                message: "What would you like to do? \n Please select.",
                type: "list",
                choices: ["Addtask", "View", "Update", "Delete", "Exit"],
            },
        ]);
        if (operation.operation === "Addtask") {
            let addTask = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "What would you like to add in your Todos?",
                },
                {
                    name: "addMore",
                    type: "confirm",
                    message: "would you like to addmore in your todos?",
                    default: true,
                },
                {
                    name: "todo1",
                    type: "input",
                    message: "What would you like to add in your Todos?",
                },
            ]);
            todos.push(addTask.todo);
            condition = addTask.addMore;
            todos.push(addTask.todo1);
        }
        if (operation.operation === "View") {
            let View = await inquirer.prompt({
                name: "view",
                type: "confirm",
                message: "Would you like to view your todo list?",
                default: true,
            });
            condition = View.view;
            console.log(chalk.bgMagenta.white.bold("***YOUR TODO LIST***"));
            todos.forEach((todos) => console.log(chalk.magenta.bold.italic(todos)));
        }
        if (operation.operation === "Update") {
            let Update = await inquirer.prompt([
                {
                    name: "update",
                    type: "confirm",
                    message: "Would you like to update your todo list?",
                    default: true,
                },
                {
                    name: "updatetask",
                    type: "list",
                    message: "Select task to update",
                    choices: todos,
                },
            ]);
            let update2 = await inquirer.prompt([
                {
                    name: "updatetask2",
                    type: "input",
                    message: "update task",
                },
            ]);
            condition = Update.update;
            let newtodos = todos.filter((val) => val != Update.updatetask);
            todos = [...newtodos, update2.updatetask2];
            console.log(chalk.bgMagenta.white.bold("***UPDATED TODO LIST***"));
            todos.forEach((todos) => console.log(chalk.red.bold(todos)));
        }
        if (operation.operation === "Delete") {
            let remove = await inquirer.prompt([
                {
                    name: "delete",
                    type: "confirm",
                    message: "Would you like to delete task from your todo list?",
                    default: true,
                },
                {
                    name: "removetask",
                    type: "list",
                    message: "Delete the task",
                    choices: todos,
                },
            ]);
            condition = remove.delete;
            let newtodos = todos.filter((val) => val != remove.removetask);
            todos = [...newtodos];
            console.log(chalk.bgRed.white.bold("***Deleted todo task***"));
            todos.forEach((todos) => console.log(chalk.redBright.bold.italic(todos)));
        }
        if (operation.operation === "Exit") {
            let Exit = await inquirer.prompt({
                name: "exit",
                type: "confirm",
                message: "Would you like to exit from the TODO APP?",
                default: true,
            });
            condition = Exit.exit;
            console.log(chalk.bgGreen.white.bold.italic("Thankyou for using the TODO APP.Have a great day!"));
            break;
        }
    } while (true);
}
maketodo(todos);
