function addTask() {

let input = document.getElementById("taskInput");

let taskText = input.value;

if (taskText === "") {
alert("Please enter a task");
return;
}

let li = document.createElement("li");

li.textContent = taskText + " ";

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function () {
li.remove();
updateCount();
};

li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

input.value = "";

updateCount();

}

function updateCount() {

let total = document.querySelectorAll("li").length;

document.getElementById("taskCount").textContent =
"Total Tasks: " + total;

}


function clearTasks() {

document.getElementById("taskList").innerHTML = "";

updateCount();

}