function AddTask() {

const taskInput = document.getElementById("tId");
const task = taskInput.value.trim();

if (task === "") {
    alert("Please enter a task.");
    return;
}

const li = document.createElement("li");

// Create task text
const span = document.createElement("span");
span.textContent = task;

// Create Complete button
const completeButton = document.createElement("button");
completeButton.textContent = "Complete";

// Create Edit button
const editButton = document.createElement("button");
editButton.textContent = "Edit";

// Create Delete button
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

let isCompleted = false;

completeButton.addEventListener("click", function () {

    const completedCount =
        document.getElementById("completed");

    if (isCompleted === false) {

        span.classList.add("completed-task");

        completedCount.textContent =
            Number(completedCount.textContent) + 1;

        isCompleted = true;

        completeButton.textContent = "Undo";

    } else {

        span.classList.remove("completed-task");

        completedCount.textContent =
            Number(completedCount.textContent) - 1;

        isCompleted = false;

        completeButton.textContent = "Complete";
    }
});

editButton.addEventListener("click", function () {

    const newTask = prompt(
        "Edit the task:",
        span.textContent
    );

    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
    }
});

deleteButton.addEventListener("click", function () {


    li.remove();

    const totalCount =
        document.getElementById("totaltask");

    totalCount.textContent =
        Number(totalCount.textContent) - 1;

    if (isCompleted === true) {

        const completedCount =
            document.getElementById("completed");

        completedCount.textContent =
            Number(completedCount.textContent) - 1;
    }
});

li.appendChild(span);
li.appendChild(completeButton);
li.appendChild(editButton);
li.appendChild(deleteButton);

const taskList = document.getElementById("taskList");

taskList.appendChild(li);

const totalCount =
    document.getElementById("totaltask");

totalCount.textContent =
    Number(totalCount.textContent) + 1;

taskInput.value = "";


}
