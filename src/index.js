import "./style.css";
import buildElements from "./modules/createDom.js"
import {projectPopUp,} from "./modules/projectCreator.js"
import {buildTaskList, addTaskPopUp} from "./modules/taskCreator.js"


const addEventListeners = () => {
  let projectButton = document.querySelector(".projectButton");
  let taskButton = document.querySelector(".addTaskButton")


  projectButton.addEventListener("click", projectPopUp);
  taskButton.addEventListener("click", addTaskPopUp);



};


buildElements();
addEventListeners();
