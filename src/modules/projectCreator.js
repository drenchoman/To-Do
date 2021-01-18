


let createProject = (name) => {
  const newProject = document.createElement("div");
  newProject.classList.add("newProject");
  const projectTitle = document.createElement("h1");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = name;

  const projectList = document.querySelector(".projectNames")

  newProject.appendChild(projectTitle);
  projectList.appendChild(newProject);

  return projectList

};

let addEtoAdd = () => {
  // let button = document.querySelector(".projectSubmit")
  let input = document.querySelector(".projectInput")
  document.body.addEventListener("click", function(e){
    if(e.target.className === "projectSubmit"){
      createProject(input.value)
      addEtoProjects();
    }
  })
};

// TESTING ADD EVENT LISTNER TO NEW DOM ELEMENTS
let addEtoProjects = () => {
  let projects = document.querySelectorAll(".newProject")
  projects.onclick = console.log(event.type + "!")
  // document.body.addEventListener("click", function(e){
  //   if(e.target.className === "projectTitle"){
  //     console.log(project.textContent);
  //
  //   }
  // })

};


let addProjectName = () => {
  let x = document.querySelector(".addProjectDiv")
  if (x){
    x.style.display = "block"
  } else {
    let addProjectDiv = document.createElement("div");
    let directoryDiv = document.querySelector(".directoryDiv");
    let projectInput = document.createElement("input");
    let projectSubmit = document.createElement("button");
    let projectContent = document.createElement("div");
    let closeButton = document.createElement("p");

    projectSubmit.classList.add("projectSubmit");
    projectInput.classList.add("projectInput");
    addProjectDiv.classList.add("addProjectDiv");
    projectContent.classList.add("projectContent");
    closeButton.classList.add("closeButton");
    closeButton.textContent = "X"
    projectSubmit.textContent = "Add"


// Create own function for this?
    addProjectDiv.style.display = "block"
    closeButton.addEventListener("click", function(){
      addProjectDiv.style.display = "none";
    })


    projectContent.appendChild(closeButton);
    projectContent.appendChild(projectInput);
    projectContent.appendChild(projectSubmit);

    addProjectDiv.appendChild(projectContent);
    directoryDiv.appendChild(addProjectDiv);
    console.log("test")
    addEtoAdd();
  }


};

export {
  addProjectName,
};
