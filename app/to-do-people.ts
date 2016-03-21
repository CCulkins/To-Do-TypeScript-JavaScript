/// <reference path="to-do-classes-interfaces.ts" /> // This file wouldn't know what the IPerson interface meant without this line.
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Cassy C",
    email: "cassy.culkins@gmail.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = { //although we don't export each individual person object we do store them all within the "people" object and export that.
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };
}
