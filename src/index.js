import "./style.css";
import buildElements from "./modules/createDom.js"
import {
  addEtoAdd,
  allProjects,
  getStoredProjects,
  initProjects,
} from "./modules/projectCreator.js"
import {
  buildTaskList,
  addTaskPopUp,
  removeInputFocus
} from "./modules/taskCreator.js"



const addEventListeners = () => {
  let taskButton = document.querySelector(".addTaskButton")



  taskButton.addEventListener("click", addTaskPopUp);


  removeInputFocus();
};

allProjects = getStoredProjects();

buildElements();
addEventListeners();
initProjects();
