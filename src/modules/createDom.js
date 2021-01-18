
  const addNavBar = () => {
    let navBar = document.createElement("div")
    let content = document.querySelector("#content")
    navBar.classList.add("nav");

    let toDo = document.createElement("p");
    toDo.classList.add("toDoTitle")
    toDo.textContent = "To Do"



    navBar.appendChild(toDo)
    content.appendChild(navBar);

  };

  const addDirectory = () => {
    let directoryDiv = document.createElement("div");
    directoryDiv.classList.add("directoryDiv")
    let main = document.createElement("main")
    main.classList.add("main")
    let content = document.querySelector("#content");

    let projectTitle = document.createElement("h1")
    projectTitle.classList.add("projectHeader")
    projectTitle.textContent = "Projects"

    // test button
    let button = document.createElement("button");
    button.textContent = "Add project"
    button.classList.add("projectButton");

    let projectNames = document.createElement("div");
    projectNames.classList.add("projectNames")

    directoryDiv.appendChild(button);
    directoryDiv.appendChild(projectTitle);
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
