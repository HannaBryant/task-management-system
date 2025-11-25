let taskNames=["Review Pull Requests", "Write Documentation","Fix Database Bug","Client Meeting Prep", "Deploy New Feature",];
let taskDurations=[1.5, 4, 0.75, 2, 3.5];

let i =0;

while (i < tasks.length) {
    taskNames.push(tasks[i].name);
    taskDurations.push(tasks[i].duration + "hours");

    i= i + 1;
}

console.table(taskNames);
console.table(taskDurations);
