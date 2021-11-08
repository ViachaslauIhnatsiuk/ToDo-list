'use strict';

const DONE = "Done";
const IN_PROGRESS = "In progress";
const TODO = "ToDo";

const list = {
	"wake up": DONE,
	"take a shower": DONE,
	"have breakfast": TODO,
	"learn JavaScript": IN_PROGRESS,
	"have a walk": TODO,
	"watch stream": TODO,
};

function changeStatus(task, status) {
	list[task] = status;
};

function deleteTask(task) {
	delete list[task];
};

function addTask(task, status) {
	list[task] = status;
};

function taskStatus(status) {
	let isPrinted = false;
	console.log(status + ":");
	for (let task in list) {
		if (list[task] === status) {
			console.log(task);
			isPrinted = true;
		}
	}
	if (!isPrinted) {
		console.log('-');
	}
};

function showList() {
	taskStatus(TODO);
	taskStatus(IN_PROGRESS);
	taskStatus(DONE);
};


changeStatus("have a walk", IN_PROGRESS);
deleteTask("watch stream");
addTask("go to sleep", DONE);
showList();