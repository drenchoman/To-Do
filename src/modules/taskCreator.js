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
  let categoryData = category.textContent;
  let titleData = title.value;
  let descriptionData = description.value;
  let dateData = date.value
  let newTask = saveTaskData(titleData, descriptionData, dateData)
  let project = searchArray(allProjects, categoryData);

  allProjects[project].tasks.push(newTask);
  clearTasks();
  pushTasksToBoard();
  checkItems();
  remove();
  // console.log(allProjects[project].tasks)
  // console.log(allProjects)

}

let searchArray = (allProjects, category) => {
let result = allProjects.findIndex(x => x.projectName === category);
return result
}

const pushTasksToBoard = () => {
  const project = document.querySelector(".taskHeader");
  const projectName = project.textContent;
  const currentProject = searchArray(allProjects, projectName);
  const allTasks = allProjects[currentProject].tasks

  allTasks.forEach((task, i) => {
    task.id = i + 1;
  });

  allTasks.forEach((task, i) =>{
    let taskData = task.data
    let taskDescription = task.description;
    let taskDate = task.date;
    let taskId = task.id;
    createTask(taskData, taskDescription, taskDate, taskId,)
    console.log(allProjects[currentProject].tasks)
  } )
};

const pushAllTasks = () => {
  clearTasks();
  pushTasksToBoard();
  remove();
};



const searchTask = (array, item) => {
  let result = array.findIndex(x => x.id === Number(item));
  return result
};

const removeTask = (item) => {
  const project = document.querySelector(".taskHeader")
  const projectName = project.textContent;
  const currentProject = searchArray(allProjects, projectName);
  const allTasks = allProjects[currentProject].tasks;
  const taskId = item;
  const task = searchTask(allTasks, taskId)
  const newArray = spliceTask(task);
  return newArray;

}
const spliceTask = (task) => {
  const project = document.querySelector(".taskHeader")
  const projectName = project.textContent;
  const currentProject = searchArray(allProjects, projectName);
  const allTasks = allProjects[currentProject].tasks;
  const newArray = allTasks.splice(task, 1);
  return newArray;
}



const saveTaskData = (data, description, date) => {
  let task = {
    data: data,
    description: description,
    date: date,
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

const remove = () => {
  let bin = document.querySelectorAll(".bin")
  bin.forEach(x => {
    x.addEventListener("click", event => {
      let item = event.target.id
      let newArray = removeTask(item);
      pushAllTasks();
    })
  })

}


const checkItems = () => {
  let checkBox = document.querySelectorAll(".checkBox");
  checkBox.forEach(check => {
    check.addEventListener("click", event => {
      let item = event.target.nextSibling
      console.log(item.textContent)
      if(item.style.textDecoration === "line-through"){
        item.style.textDecoration = "none"
      } else {
        item.style.textDecoration = "line-through"
      }
    })
  })
}


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

const clearTasks = () => {
  let taskDiv = document.querySelector(".contentTaskDiv");
  taskDiv.textContent = ""
}



const createTask = (title, description, dueDate, iD) => {
  let taskDiv = document.querySelector(".contentTaskDiv");
  let newTask = document.createElement("div");
  let taskTitle = document.createElement("h3");
  let taskDate = document.createElement("P");
  let checkBox = document.createElement("input");
  let bin = document.createElement("P");


  checkBox.setAttribute("type", "checkBox");
  checkBox.classList.add("checkBox");
  newTask.classList.add("newTask");
  taskTitle.classList.add("taskTitle");
  taskDate.classList.add("taskDate");
  bin.classList.add("bin")
  bin.id = iD

  taskTitle.textContent = title;
  taskDate.textContent = dueDate;
  bin.textContent = "X"

  newTask.appendChild(checkBox);
  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDate);
  newTask.appendChild(bin);
  taskDiv.appendChild(newTask);

  // return taskDiv
};




export {
  // buildTaskList,
  addTaskPopUp,
  clearTasks,
  pushAllTasks,
  checkItems,
}
