'use strict';

const list = {
	"wake up": "Done",
	"take a shower": "Done",
	"have breakfast": "ToDo",
	"learn JavaScript": "In progress",
	"have a walk": "ToDo",
	"watch stream": "ToDo",
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
	let count = false;
	console.log(status + ":");
	for (let task in list) {
		if (list[task] === status) {
			console.log(task);
			count = true;
		}
	}
	if (!count) {
		console.log('-');
	}
};

function showList() {
	taskStatus("ToDo");
	taskStatus("In progress");
	taskStatus("Done");
};


changeStatus("have a walk", "In progress");
deleteTask("watch stream");
addTask("go to sleep", "ToDo");
showList();
