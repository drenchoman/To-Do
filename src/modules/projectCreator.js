import {clearTasks, pushAllTasks, checkItems, searchArray} from "./taskCreator.js"

let allProjects = [];

const pushProjects = () => {
  allProjects.forEach(project => {
  const name = project.projectName
  createProject(name);
})
addRemoveToX();

};



let createProject = (name) => {
  const newProject = document.createElement("div");
  newProject.classList.add("newProject");
  const projectTitle = document.createElement("button");
  // const buttonDiv = document.createElement("div");
  // buttonDiv.classList.add("removeProjectDiv")
  const button = document.createElement("P");
  button.classList.add("removeProject")
  button.textContent = "X"
  button.id = name
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = name;

  const projectList = document.querySelector(".projectNames")

  // buttonDiv.appendChild(button);
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


let addEtoAdd = () => {
  // let button = document.querySelector(".projectSubmit")
  let input = document.querySelector(".projectInput")
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "projectSubmit addButton") {
      let pTitle = createProject(input.value);
      setActiveOnInit(pTitle);
      let newArray = createTaskArray(input.value);
      allProjects.push(newArray);
      changeTaskHeader();
      addRemoveToX();
      addEtoProjects();
      clearTasks();
      let pop = document.querySelector(".addProjectDiv");
      pop.style.display = "none";
      console.log(allProjects)
    }
  })
};

let setActiveOnInit = (projectTitle) => {
const activeBtn = document.querySelector(".active");
if (activeBtn) {
  activeBtn.classList.remove("active");
  projectTitle.classList.add("active");
} else {
  projectTitle.classList.add("active");
}
};
// Change Active on click
let setActiveTask = (e) => {
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  } else {
    e.target.classList.add("active")
  }
};



const addRemoveToX = () => {
  let remove = document.querySelectorAll(".removeProject");
  remove.forEach(x => {
    x.addEventListener("click", event => {
      let item = event.target.id
      // console.log(item)
      removeProject(item);

        console.log(allProjects);

      // console.log(newArray);

        // allProjects.push(newArray);
      // clearProjects();
      // pushProjects();
      // console.log(allProjects)
      // addEtoProjects();

    })
  })

};
const clearProjects = () => {
const projectNames = document.querySelector(".projectNames")
projectNames.innerHTML = ""
// while (projectNames.firstChild) {
// projectNames.removeChild(projectNames.lastChild);
// }
// console.log("clear working")
};


const removeProject = (item) => {
const itemId = item;
const index = searchArray(allProjects, itemId);
console.log("index is " + index)
const newArray = spliceProject(index);
// return newArray

}
const spliceProject = (index) => {
  // const x = index - 1
  const splicedArray = allProjects.splice(index, 1);
  return splicedArray
};

let changeTaskHeader = () => {
  const taskHeader = document.querySelector(".taskHeader");
  const activeProject = document.querySelector(".active");
  let text = activeProject.textContent
  taskHeader.textContent = text;
}

let updateTaskHeader = (e) => {
  const taskHeader = document.querySelector(".taskHeader");
  const header = e.target.textContent
  taskHeader.textContent = header;
}

let addEtoProjects = () => {
  let projects = document.querySelectorAll(".newProject")
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "projectTitle") {
      setActiveTask(e);
      console.log(e.target.textContent);
      updateTaskHeader(e);
      pushAllTasks();
      checkItems();
    }
  })
};

let closePopUp = () => {
  document.body.addEventListener("click", function(e){
    if (e.target.className === "closeButton"){
      let pop = document.querySelector(".addProjectDiv");
      pop.style.display = "none";
    }
  })
};


let projectPopUp = () => {
  let x = document.querySelector(".addProjectDiv")
  if (x) {
    x.style.display = "block"
  } else {
    let addProjectDiv = document.createElement("div");
    let directoryDiv = document.querySelector(".directoryDiv");
    let projectInput = document.createElement("input");
    let projectSubmit = document.createElement("button");
    let projectContent = document.createElement("div");
    let closeButton = document.createElement("p");
    let header = document.createElement("h3");
    header.classList.add("projectHeader")
    header.textContent = "Project Name"

    projectSubmit.classList.add("projectSubmit", "addButton");
    projectInput.classList.add("projectInput");
    addProjectDiv.classList.add("addProjectDiv");
    projectContent.classList.add("projectContent");
    closeButton.classList.add("closeButton");
    closeButton.textContent = "X"
    projectSubmit.textContent = "Add"


    // Create own function for this?
    addProjectDiv.style.display = "block"
    closePopUp();


    projectContent.appendChild(closeButton);
    projectContent.appendChild(header);
    projectContent.appendChild(projectInput);
    projectContent.appendChild(projectSubmit);

    addProjectDiv.appendChild(projectContent);
    directoryDiv.appendChild(addProjectDiv);

    addEtoAdd();
  }


};

export {
  projectPopUp,
  allProjects

};
