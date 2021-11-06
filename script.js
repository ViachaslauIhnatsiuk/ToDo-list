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

// Функция для вывода каждого отдельного вида статуса

function listTask(status) {
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
}

// Вывод списка дел со статусом задачи

function showList() {
	listTask("ToDo");
	listTask("In progress");
	listTask("Done");
};

/* changeStatus("have a walk", "In progress");
deleteTask("watch stream");
addTask("go to sleep", "ToDo"); */
showList();
