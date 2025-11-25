let input = require('prompt-sync')();

let taskNames = [];
let taskDurations = [];

let numberOfTasks = parseInt(input("How many tasks? "));

let i = 0;
while (i < numberOfTasks) {
    taskNames.push(input("Enter task name: "));
    taskDurations.push(input("Enter task duration in hours: "));
    i= i +1;
}

console.table(taskNames);
console.table(taskDurations);
