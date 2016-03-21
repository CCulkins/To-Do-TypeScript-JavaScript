/// <reference path="to-do-classes-interfaces.ts" /> // This file wouldn't know what the IPerson interface meant without this line.
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Cassy C",
        email: "cassy.culkins@gmail.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
