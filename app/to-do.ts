class Task {
  done: boolean = false; //boolean because task is either complete or its not
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

class HobbyTask extends Task { //no priority parameter because hobbytasks will always be low priority
  constructor(public description: string){
    super(description, "low");
  }
}

var tasks = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));

console.log(tasks);
