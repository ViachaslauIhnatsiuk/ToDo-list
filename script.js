'use strict';

// Объект со списком задач
const list = {
	"wake up": "Done",
	"take a shower": "Done",
	"have breakfast": "ToDo",
	"learn JavaScript": "In progress",
	"have a walk": "ToDo",
	"watch stream": "ToDo",
}

// Изменение статуса задачи
function changeStatus(task, status) {
	list[task] = status;
}

// Удаление задачи
function deleteTask(task) {
	delete list[task];
};

// Добавление новой задачи
function addTask(task, status) {
	list[task] = status;
};

// Вывод списка дел со статусом задачи

let count = 0;

function showList() {
	console.log("ToDo:");
	for (let task in list) {
		if (list[task] === "ToDo") {
			console.log(task);
			count++;
		}
	}
	if (count === 0) {
		console.log('-');
	}
	count = 0;
	console.log("In progress:");
	for (let task in list) {
		if (list[task] === "In progress") {
			console.log(task);
			count++;
		}
	}
	if (count === 0) {
		console.log('-');
	}
	count = 0;
	console.log("Done:");
	for (let task in list) {
		if (list[task] === "Done") {
			console.log(task);
			count++;
		}
	}
	if (count === 0) {
		console.log('-');
	}
	count = 0;
}

/* changeStatus("have a walk", "In progress");
deleteTask("watch stream");
addTask("go to sleep", "ToDo"); */
showList();
