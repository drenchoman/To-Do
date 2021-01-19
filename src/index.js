import "./style.css";
import buildElements from "./modules/createDom.js"
import {addProjectName} from "./modules/projectCreator.js"
import {buildTaskList, addTask} from "./modules/taskCreator.js"

let allProjects = [];
const addEventListeners = () => {
  let projectButton = document.querySelector(".projectButton");
  let taskButton = document.querySelector(".addTaskButton")

  projectButton.addEventListener("click", addProjectName);
  taskButton.addEventListener("click", addTask);


};


buildElements();
buildTaskList();
addEventListeners();
