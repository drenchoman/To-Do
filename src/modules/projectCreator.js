import {
  clearTasks,
  pushAllTasks,
  // checkItems,
  searchArray,
  pushTasksToBoard,
  remove,
  editListener,
} from "./taskCreator.js"

let allProjects = [];

const storedProjects = JSON.parse(localStorage.getItem("projects"));

const getStoredProjects = () => {
  const allProjects = storedProjects
  return allProjects
}

const pushProjects = () => {
  allProjects.forEach(project => {
    const name = project.projectName
    createProject(name);
  })
  addRemoveToX();
  setActiveOnInit();
  changeTaskHeader();
  saveAllProjects();

};

const initProjects = () => {
  allProjects.forEach(project => {
    const name = project.projectName
    createProject(name);
  })
  setActiveOnInit();
  addEtoProjects();
  changeTaskHeader();
  addRemoveToX();
  addEtoAdd();
  pushTasksToBoard();
  remove();
  editListener();
};



let createProject = (name) => {
  const newProject = document.createElement("div");
  newProject.classList.add("newProject");
  const projectTitle = document.createElement("button");
  const button = document.createElement("P");
  button.classList.add("removeProject")
  button.textContent = "❌"
  button.id = name
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = name;

  const projectList = document.querySelector(".projectNames")

  newProject.appendChild(projectTitle);
  newProject.appendChild(button);
  projectList.appendChild(newProject);

  return projectTitle

};

let createTaskArray = (n) => {
  return {
    projectName: n,
    tasks: [],
  };
};

const clearInput = () => {
  const input = document.querySelector(".pInput")
  input.value = ""
}




const addEtoAdd = () => {
  let input = document.querySelector(".pInput")
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "addButton projectButton") {
      let header = input.value
      if (checkInput(header) === true) {
        let string = strLength(header, 18);
        let newArray = createTaskArray(string);
        allProjects.push(newArray);
        clearProjects();
        pushProjects();
        addEtoProjects();
        clearTasks();
        clearInput();
      } return;
    }
  })
};

const checkInput = (header) => {
  if (header === ""){
    alert("Please add a Project Title")
    return false
  } return true
};

const strLength = (header, n) => {
  if (header.length <= n) {
    return header
  }
  return header.slice(0, n)
};

let setActiveOnInit = () => {
  const projectDiv = document.querySelector(".projectNames")
  const lastDiv = projectDiv.lastElementChild
  const firstChild = lastDiv.firstChild
  const activeBtn = document.querySelector(".active");
  firstChild.classList.add("active")

};

// Change Active on click
let setActiveTask = (e) => {
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
    e.target.classList.add("active")
  } else {
    e.target.classList.add("active")
  }
};


const addRemoveToX = () => {
  let remove = document.querySelectorAll(".removeProject");
  remove.forEach(x => {
    x.addEventListener("click", event => {
      let item = event.target.id
      removeProject(item);
      clearProjects();
      clearTasks();
      pushProjects();
      pushTasksToBoard();
      addEtoProjects();
    })
  })

};

const clearProjects = () => {
  const projectNames = document.querySelector(".projectNames")
  projectNames.innerHTML = ""
};


const saveAllProjects = () => {
  localStorage.setItem("projects", JSON.stringify(allProjects));
};


const removeProject = (item) => {
  const itemId = item;
  const index = searchArray(allProjects, itemId);
  const newArray = spliceProject(index);

};

const spliceProject = (index) => {
  const splicedArray = allProjects.splice(index, 1);
  return splicedArray
};

let changeTaskHeader = () => {
  const taskHeader = document.querySelector(".taskHeader");
  const activeProject = document.querySelector(".active");
  let text = activeProject.textContent
  taskHeader.textContent = text;
};

let updateTaskHeader = (e) => {
  const taskHeader = document.querySelector(".taskHeader");
  const header = e.target.textContent
  taskHeader.textContent = header;
};

let addEtoProjects = () => {
  let projects = document.querySelectorAll(".newProject")
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "projectTitle") {
      setActiveTask(e);
      updateTaskHeader(e);
      pushAllTasks();
      // checkItems();
    }
  })
};



export {
  addEtoAdd,
  allProjects,
  getStoredProjects,
  initProjects,
  saveAllProjects,

};
