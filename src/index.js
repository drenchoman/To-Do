import "./style.css";
import buildElements from "./modules/createDom.js"
import {addProjectName} from "./modules/projectCreator.js"

const addEventListeners = () => {
  let projectButton = document.querySelector(".projectButton");

  projectButton.addEventListener("click", addProjectName);


};


buildElements();
addEventListeners();
