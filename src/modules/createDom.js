const addNavBar = () => {
  let taskHeaderDiv = document.createElement("div")
  let content = document.querySelector("#content")
  taskHeaderDiv.classList.add("taskHeaderDiv");

  const taskHeader = document.createElement("h2")
  taskHeader.classList.add("taskHeader");
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("addButton", "addTaskButton");

  taskHeader.textContent = "Tasks";
  addTaskButton.textContent = "Add Task";



  taskHeaderDiv.appendChild(taskHeader);
  taskHeaderDiv.appendChild(addTaskButton)
  content.appendChild(taskHeaderDiv);

};

const addDirectory = () => {
  let directoryDiv = document.createElement("div");
  directoryDiv.classList.add("directoryDiv")
  let main = document.createElement("main")
  main.classList.add("main")
  let content = document.querySelector("#content");

  let projectTitle = document.createElement("h2")
  projectTitle.classList.add("projectHeader");
  projectTitle.textContent = "Projects"

  // test button
  const pDiv = document.createElement("div");
  pDiv.classList.add("pDiv")
  const button = document.createElement("button");
  const projectInput = document.createElement("input");
  projectInput.classList.add("pInput", "input");
  projectInput.value = "Project Name..."
  button.textContent = "Add Project"
  button.classList.add("addButton", "projectButton");


  let projectNames = document.createElement("div");
  projectNames.classList.add("projectNames")

  pDiv.appendChild(projectInput);
  pDiv.appendChild(button);

  directoryDiv.appendChild(projectTitle);
  directoryDiv.appendChild(pDiv);
  directoryDiv.appendChild(projectNames);
  main.appendChild(directoryDiv)
  content.appendChild(main);


};

const addTaskDiv = () => {
  let content = document.querySelector("#content");
  let contentTaskDiv = document.createElement("div");
  let main = document.querySelector("main");
  contentTaskDiv.classList.add("contentTaskDiv")

  main.appendChild(contentTaskDiv);

  content.appendChild(main);
};

const buildElements = () => {
  addNavBar();
  addDirectory();
  addTaskDiv();
}


export default buildElements
