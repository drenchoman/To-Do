import {
  allProjects,
  saveAllProjects
} from "./projectCreator.js";
import {
  differenceInCalendarDays
} from 'date-fns'
import {
  parseISO
} from 'date-fns'

let tasks = [];

let addEtoAdd = () => {
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "submit addButton") {
      checkPrio(".selected")
      gatherTaskData();
      clearInputData();
      let pop = document.querySelector(".addTaskDiv");
      pop.style.display = "none";
    }
  })
};

const checkPrio = (x) => {
  const prio = document.querySelector(x)
  if (!prio) {
    alert("Please select tasks priority");
  }
};

const clearEditData = () => {
  const description = document.querySelector(".editDesc");
  const title = document.querySelector(".editTask");
  description.value = "";
  title.value = "";
}

const clearInputData = () => {
  const description = document.querySelector(".descriptionInput");
  const title = document.querySelector(".titleInput")
  description.value = "";
  title.value = "";
}

const gatherTaskData = () => {
  let title = document.querySelector(".titleInput");
  let description = document.querySelector(".descriptionInput");
  let date = document.querySelector(".dateInput");
  let category = document.querySelector(".taskHeader");
  let priority = document.querySelector(".selected")
  let priorityData = priority.textContent;
  let categoryData = category.textContent;
  let titleData = title.value;
  let descriptionData = description.value;
  let dateData = date.value
  let newTask = saveTaskData(titleData, descriptionData, dateData, priorityData)
  let project = searchArray(allProjects, categoryData);

  allProjects[project].tasks.push(newTask);
  clearTasks();
  pushTasksToBoard();
  checkItems();
  remove();
  editListener();
  closeEdit();

}

const pushTasksToBoard = () => {
  const project = document.querySelector(".taskHeader");
  const projectName = project.textContent;
  const currentProject = searchArray(allProjects, projectName);
  const allTasks = allProjects[currentProject].tasks

  allTasks.forEach((task, i) => {
    task.id = i + 1;
  });

  allTasks.forEach((task, i) => {
    let taskData = task.data
    let taskDescription = task.description;
    let taskDate = task.date;
    let taskPriority = task.priority;
    let taskId = task.id;
    createTask(taskData, taskDescription, taskDate, taskPriority, taskId, )
  })
  saveAllProjects();
};

const pushAllTasks = () => {
  clearTasks();
  pushTasksToBoard();
  saveAllProjects();
  remove();
  editListener();
  closeEdit();
};

let searchArray = (allProjects, category) => {
  let result = allProjects.findIndex(x => x.projectName === category);
  return result
}

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

const saveTaskData = (data, description, date, priority) => {
  let task = {
    data: data,
    description: description,
    date: date,
    priority: priority,
  }
  return task
};

let closeEdit = () => {
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "closeButton editCloseButton") {
      let pop = document.querySelector(".modalDiv");
      clearEditData();
      pop.style.display = "none";
    }
  })
}

let closePopUp = () => {
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "closeButton") {
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

const checkProjectExists = () => {
  let active = document.querySelector(".active");
  if (active) {
    return true
  } else {
    return false
  }
};

const addTaskPopUp = () => {
  if (checkProjectExists() === true) {

    let x = document.querySelector(".addTaskDiv");
    if (x) {
      makePrioSelectable(".prioButton", ".selected", "selected");
      x.style.display = "block"
    } else {
      const main = document.querySelector(".taskHeaderDiv")
      const addTaskDiv = document.createElement("div");
      const taskContent = document.createElement("div");
      const header = document.createElement("h2")
      const titleInput = document.createElement("input")
      const titleHeader = document.createElement("h3");
      const descriptionInput = document.createElement("textarea");
      const descriptionHeader = document.createElement("h3");
      const prioHeader = document.createElement("h3")
      const prioDiv = document.createElement("div");
      const colourRed = document.createElement("div");
      const colourYellow = document.createElement("div");
      const colourGreen = document.createElement("div");
      const dateInput = document.createElement("input");
      const dateHeader = document.createElement("h3");
      const closeButton = document.createElement("P");
      const submit = document.createElement("button");

      addTaskDiv.classList.add("addTaskDiv");
      taskContent.classList.add("taskContent");
      titleInput.classList.add("titleInput", "input");
      titleHeader.classList.add("titleHeader")
      descriptionInput.classList.add("descriptionInput", "input");
      descriptionHeader.classList.add("descriptionHeader");
      dateInput.classList.add("dateInput");
      dateHeader.classList.add("dateHeader");
      closeButton.classList.add("closeButton");
      submit.classList.add("submit", "addButton")
      header.classList.add("headerTask")
      prioHeader.classList.add("prioHeader")
      prioDiv.classList.add("prioDiv");
      colourRed.classList.add("prioRed", "prioButton");
      colourYellow.classList.add("prioYellow", "prioButton");
      colourGreen.classList.add("prioGreen", "prioButton");

      titleHeader.textContent = "Task"
      descriptionInput.value = "Add description..."
      descriptionHeader.textContent = "Description"
      dateInput.setAttribute("type", "date");
      titleInput.value = "Task name..."
      dateHeader.textContent = "Due Date";
      closeButton.textContent = "❌"
      submit.textContent = "Add"
      header.textContent = "Create Task"
      addTaskDiv.style.display = "block"
      prioHeader.textContent = "Priority"
      colourRed.textContent = "red"
      colourYellow.textContent = "yellow"
      colourGreen.textContent = "green"

      closePopUp();

      prioDiv.appendChild(colourRed);
      prioDiv.appendChild(colourYellow);
      prioDiv.appendChild(colourGreen);
      taskContent.appendChild(closeButton)
      taskContent.appendChild(header);
      taskContent.appendChild(titleHeader);
      taskContent.appendChild(titleInput);
      taskContent.appendChild(descriptionHeader);
      taskContent.appendChild(descriptionInput);
      taskContent.appendChild(prioHeader);
      taskContent.appendChild(prioDiv)
      taskContent.appendChild(dateHeader);
      taskContent.appendChild(dateInput);
      taskContent.appendChild(submit);

      addTaskDiv.appendChild(taskContent)
      main.appendChild(addTaskDiv)
      addEtoAdd();
      removeInputFocus();
      makePrioSelectable(".prioButton", ".selected", "selected");
    }

  } else {
    alert("Please add a project first")
  }
};

const makePrioSelectable = (x, y, z) => {
  const prioButtons = document.querySelectorAll(x);
  prioButtons.forEach(button => {
    button.addEventListener("click", e => {
      const selected = document.querySelector(y);
      if (selected) {
        selected.classList.remove(z)
        e.target.classList.add(z)
      } else {
        e.target.classList.add(z)
      }
    })
  })
};

const clearTasks = () => {
  let taskDiv = document.querySelector(".contentTaskDiv");
  taskDiv.textContent = ""
};

const createTask = (title, description, dueDate, priority, iD) => {
  let taskDiv = document.querySelector(".contentTaskDiv");
  let newTask = document.createElement("div");
  let taskTitle = document.createElement("h3");
  let taskDate = document.createElement("P");
  let desc = document.createElement("P")
  let priorityDiv = document.createElement("div");
  // let checkBox = document.createElement("input");
  let editClicker = document.createElement("div");
  let bin = document.createElement("P");

  desc.classList.add("description")
  // checkBox.setAttribute("type", "checkBox");
  // checkBox.classList.add("checkBox");
  newTask.classList.add("newTask");
  taskTitle.classList.add("taskTitle");
  taskDate.classList.add("taskDate");
  bin.classList.add("bin")
  bin.id = iD
  taskTitle.textContent = title;
  editClicker.classList.add("editClicker")


  desc.textContent = reduceDescription(description, 20)

  let priorityColour = changePriority(priority, priorityDiv)

  const updatedDate = updateDate(dueDate)

  taskDate.textContent = updateMessage(updatedDate)
  bin.textContent = "❌"
  editClicker.textContent = "✏️"

  // newTask.appendChild(checkBox);
  newTask.appendChild(taskTitle);
  newTask.appendChild(desc);
  newTask.appendChild(priorityDiv);
  newTask.appendChild(taskDate);
  newTask.appendChild(editClicker);
  newTask.appendChild(bin);
  taskDiv.appendChild(newTask);

};

const changePriority = (priority, div) => {
  let prioResult = ""
  if (priority === "red") {
    prioResult = div.classList.add("red")
  } else if (priority === "yellow") {
    prioResult = div.classList.add("yellow");
  } else if (priority === "green") {
    prioResult = div.classList.add("green");
  }
  return prioResult
}

const updateDate = (dueDate) => {
  let date = parseISO(dueDate)
  const result = differenceInCalendarDays(
    date,
    new Date()
  )
  return result
};

const updateMessage = (updatedDate) => {
  if (updatedDate === 0) {
    let message = ("Due Today");
    return message
  } else if (updatedDate === 1) {
    let message = ("Due in " + updatedDate + " day")
    return message
  } else {
    let message = ("Due in " + updatedDate + " days")
    return message
  }
  return message
};

const reduceDescription = (str, n) => {
  if (str.length <= n) {
    return str
  }
  return str.slice(0, n) + "..."
};

const editListener = () => {
  const pencils = document.querySelectorAll(".editClicker");
  pencils.forEach(pen => {
    pen.addEventListener("click", e => {
      const category = document.querySelector(".taskHeader")
      const project = category.textContent
      const taskID = getTaskInfo(e)
      let x = searchArray(allProjects, project)
      getEditInfo(x, taskID);
    })
  })
};

const getEditInfo = (x, y) => {
  y = Number(y) - 1
  const taskData = allProjects[x].tasks[y].data;
  const taskDate = allProjects[x].tasks[y].date;
  const taskDesc = allProjects[x].tasks[y].description;
  const taskPrio = allProjects[x].tasks[y].priority;
  editPopUp(taskData, taskDate, taskDesc, taskPrio, x, y);
};

const saveEdit = (task, desc, prio, date, x, y) => {
  const newTaskData = allProjects[x].tasks[y].data = task;
  const newDataData = allProjects[x].tasks[y].date = date;
  const newDescData = allProjects[x].tasks[y].description = desc;
  const newPrioData = allProjects[x].tasks[y].priority = prio;
};

const getTaskInfo = (e) => {
  const parent = e.target.parentNode;
  const binID = parent.lastElementChild;
  const bin = binID.id
  return bin
};

const editPopUp = (data, date, description, priority, pArray, tArray) => {
  let x = document.querySelector(".modalDiv");
  if (x) {
    makePrioSelectable(".prioButtonE", ".selectedE", "selectedE");
    x.style.display = "block"
    const descriptionInput = document.querySelector(".editDesc")
    const taskInput = document.querySelector(".editTask")
    const dateInput = document.querySelector(".editDate")
    descriptionInput.value = description;
    taskInput.value = data;
    dateInput.value = date;

  } else {

    const main = document.querySelector(".contentTaskDiv")
    const editDiv = document.createElement("div");
    const modalDiv = document.createElement("div");
    const divHeader = document.createElement("h2");
    const taskHeader = document.createElement("h3");
    const taskInput = document.createElement("input");
    const descriptionHeader = document.createElement("h3");
    const descriptionInput = document.createElement("input");
    const prioHeader = document.createElement("h3");
    const prioDiv = document.createElement("div");
    const colourRed = document.createElement("div");
    const colourYellow = document.createElement("div");
    const colourGreen = document.createElement("div");
    const dateInput = document.createElement("input");
    const dateHeader = document.createElement("h3");
    const closeButton = document.createElement("P");
    const submit = document.createElement("button");

    modalDiv.classList.add("modalDiv");
    editDiv.classList.add("editDiv");
    divHeader.classList.add("headerTask")
    taskHeader.classList.add("titleHeader");
    taskInput.classList.add("titleInput", "editTask");

    descriptionInput.classList.add("descriptionInput", "editDesc");
    descriptionHeader.classList.add("descriptionHeader");
    dateInput.classList.add("dateInput", "editDate");
    dateHeader.classList.add("dateHeader");
    closeButton.classList.add("closeButton", "editCloseButton");
    submit.classList.add("submitE", "addButton")
    prioHeader.classList.add("prioHeader")
    prioDiv.classList.add("prioDivE");
    colourRed.classList.add("prioRed", "prioButtonE");
    colourYellow.classList.add("prioYellow", "prioButtonE");
    colourGreen.classList.add("prioGreen", "prioButtonE");

    taskHeader.textContent = "Task"
    descriptionInput.value = description
    descriptionHeader.textContent = "Description"
    dateInput.setAttribute("type", "date");
    taskInput.value = data
    dateHeader.textContent = "Due Date";
    closeButton.textContent = "❌"
    submit.textContent = "Add"
    dateInput.value = date;
    divHeader.textContent = "Edit Task"
    modalDiv.style.display = "block"
    prioHeader.textContent = "Priority"
    colourRed.textContent = "red"
    colourYellow.textContent = "yellow"
    colourGreen.textContent = "green"


    const projectArray = pArray;
    const taskArray = tArray;

    editDiv.appendChild(divHeader);
    editDiv.appendChild(taskHeader);
    editDiv.appendChild(taskInput);
    editDiv.appendChild(descriptionHeader);
    editDiv.appendChild(descriptionInput);
    editDiv.appendChild(prioHeader)
    prioDiv.appendChild(colourRed);
    prioDiv.appendChild(colourYellow);
    prioDiv.appendChild(colourGreen);
    editDiv.appendChild(prioDiv);
    editDiv.appendChild(dateHeader);
    editDiv.appendChild(dateInput);
    editDiv.appendChild(closeButton);
    editDiv.appendChild(submit);
    modalDiv.appendChild(editDiv);
    main.appendChild(modalDiv);

    removeInputFocus();
    closeEdit();
    makePrioSelectable(".prioButtonE", ".selectedE", "selectedE")
    addEditSubmit(projectArray, taskArray);

  }
};

const addEditSubmit = (p, t) => {
  const submit = document.querySelector(".submitE")
  submit.addEventListener("click", event => {
    checkPrio(".selectedE");
    grabEditValues(p, t);
    pushAllTasks();
  })
};

const grabEditValues = (projectArray, taskArray) => {
  const task = document.querySelector(".editTask");
  const taskE = task.value;
  const desc = document.querySelector(".editDesc");
  const descE = desc.value;
  const prio = document.querySelector(".selectedE");
  const prioE = prio.textContent;
  const date = document.querySelector(".editDate")
  const dateE = date.value;
  const x = projectArray;
  const y = taskArray;
  saveEdit(taskE, descE, prioE, dateE, x, y)

};

// Code for check box if I want to re add
// const checkItems = () => {
//   let checkBox = document.querySelectorAll(".checkBox");
//   checkBox.forEach(check => {
//     check.addEventListener("click", event => {
//       let item = event.target.nextSibling
//       if (item.classList.contains === "crossed") {
//         item.classList.remove("crossed");
//         saveAllProjects();
//       } else {
//         item.classList.add("crossed");
//         saveAllProjects();
//       }
//     })
//   })
// }


export {
  addTaskPopUp,
  clearTasks,
  pushAllTasks,
  // checkItems,
  searchArray,
  pushTasksToBoard,
  remove,
  makePrioSelectable,
  editListener,
  removeInputFocus,
};
