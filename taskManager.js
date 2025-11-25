let taskNames=[];
let taskDurations=[];

let tasks = [
  { name: "Review Pull Requests", duration: 1.5 },
  { name: "Write Documentation", duration: 4 },
  { name: "Fix Database Bug", duration: 0.75 },
  { name: "Client Meeting Prep", duration: 2 },
  { name: "Deploy New Feature", duration: 3.5 }
];

let i =0;

while (i < tasks.length) {
    taskNames.push(tasks[i].name);
    taskDurations.push(tasks[i].duration + "hours");

    i= i + 1;
}

console.table(taskNames);
console.table(taskDurations);
