let allProjects = [];

let createProject = (name) => {
  const newProject = document.createElement("div");
  newProject.classList.add("newProject");
  const projectTitle = document.createElement("button");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = name;

  const projectList = document.querySelector(".projectNames")

  newProject.appendChild(projectTitle);
  projectList.appendChild(newProject);
  setActiveOnInit(projectTitle);
  changeTaskHeader();
};

let createArray = (n) => {
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
      createProject(input.value);
      let newArray = createArray(input.value);
      allProjects.push(newArray);
      addEtoProjects();
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
