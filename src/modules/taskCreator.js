import {allProjects} from "./projectCreator.js"

let tasks = []

let addEtoAdd = () => {
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "submit addButton") {
      let newTask = gatherTaskData();
      let pop = document.querySelector(".addTaskDiv");
      pop.style.display = "none";

    }
  })
};

const gatherTaskData = () => {
  let title = document.querySelector(".titleInput");
  let description = document.querySelector(".descriptionInput");
  let date = document.querySelector(".dateInput");
  let category = document.querySelector(".taskHeader");
  // let categoryData = category.textContent;
  let titleData = title.value;
  let descriptionData = description.value;
  let dateData = date.value
  let newTask = saveTaskData(titleData, descriptionData, dateData)
  allProjects[0].tasks.push(newTask);
  console.log(allProjects)
  // createTask(titleData, descriptionData, dateData);
}


const saveTaskData = (data, description, date) => {
  let task = {
    data: data,
    description: description,
    date: date
  }
  return task
};



let closePopUp = () => {
  document.body.addEventListener("click", function(e){
    if (e.target.className === "closeButton"){
      let pop = document.querySelector(".addTaskDiv");
      pop.style.display = "none";
    }
  })
}

let removeInputFocus = () => {
  let inputs = document.querySelectorAll(".input")
  inputs.forEach(input => {
    input.addEventListener("click", event => {
      input.value = ""
    })
  })
};

const checkProjectExists = () => {
  let active = document.querySelector(".active");
  if (active){
    return true
  } else {
    return false
  }
};

const addTaskPopUp = () => {
if (checkProjectExists() === true) {
  let x = document.querySelector(".addTaskDiv");
  if (x) {
    x.style.display = "block"
  } else {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("addTaskDiv");
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const titleInput = document.createElement("input")
    titleInput.classList.add("titleInput", "input");
    titleInput.value = "Task name..."
    const titleHeader = document.createElement("h3")
    titleHeader.classList.add("titleHeader")
    titleHeader.textContent = "Task"
    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList.add("descriptionInput", "input");
    descriptionInput.value = "Add description..."
    const descriptionHeader = document.createElement("h3");
    descriptionHeader.classList.add("descriptionHeader");
    descriptionHeader.textContent = "Description"
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.classList.add("dateInput");
    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("dateHeader");
    dateHeader.textContent = "Due Date";
    const closeButton = document.createElement("P");
    closeButton.classList.add("closeButton");
    closeButton.textContent = "X"
    const submit = document.createElement("button");
    submit.classList.add("submit", "addButton")
    submit.textContent= "Add"
    const header = document.createElement("h2")
    header.classList.add("headerTask")
    header.textContent = "Create Task"
    const main = document.querySelector(".taskHeaderDiv")
    addTaskDiv.style.display = "block"

    closePopUp();

    taskContent.appendChild(closeButton)
    taskContent.appendChild(header);
    taskContent.appendChild(titleHeader);
    taskContent.appendChild(titleInput);
    taskContent.appendChild(descriptionHeader);
    taskContent.appendChild(descriptionInput);
    taskContent.appendChild(dateHeader);
    taskContent.appendChild(dateInput);
    taskContent.appendChild(submit);

    addTaskDiv.appendChild(taskContent)
    main.appendChild(addTaskDiv)
    addEtoAdd();
    removeInputFocus();

  }

} else {
  alert("Please add a project first")

}

};

// const warning = () => {
//   const warningDiv = document.createElement("div")
//   warningDiv.classList.add("warningDiv");
//   const content = document.createElement("div")
//   content.classList.add("warnContent")
//   const warning = document.createElement("h2");
//   warning.classList.add("warning")
//   warning.textContent = "Please add a project first"
//   const task = document.querySelector(".addTaskButton");
//
//   content.appendChild(warning)
//   warningDiv.appendChild(content);
//   task.appendChild(warningDiv)
//
// }

const createTask = (title, description, dueDate) => {
  let taskDiv = document.querySelector(".contentTaskDiv");
  let newTask = document.createElement("div");
  newTask.classList.add("newTask");
  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = title;
  let taskDate = document.createElement("P");
  taskDate.classList.add("taskDate");
  taskDate.textContent = dueDate;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDate);
  taskDiv.appendChild(newTask);

  let tasks = [];
  let task = saveTaskData(title, description, dueDate);
  tasks.push(task);
  console.log(tasks)
};



  // return taskDiv



export {
  // buildTaskList,
  addTaskPopUp,
}
