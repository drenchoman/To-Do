(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Karla&family=Roboto+Slab:wght@300;400&display=swap);"]),o.push([e.id,"body {\r\n  margin: 0;\r\n  background:#6930c3;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 3em;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Karla', sans-serif;\r\n\r\n}\r\n\r\np {\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 1em;\r\n}\r\n.nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 8vh;\r\n  background-color: #252525;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.toDoTitle {\r\n  color: white;\r\n  padding-left: 5%;\r\n\r\n}\r\n.main{\r\n  display: flex;\r\n}\r\n\r\n.directoryDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 20%;\r\n  height: 100vh;\r\n  background: #64dfdf;\r\n  /* border: 1px solid #80ffdb;\r\n  border-radius: 30px 30px 0 0; */\r\n  /* background: rgba(37, 37, 37, 0.6); */\r\n  align-items: center;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.projectNames {\r\n  /* background: rgba(255, 87, 127, 0.5); */\r\n  width: 100%;\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.active {\r\n  background: rgba(255, 87, 127, 1)\r\n}\r\n\r\n/* .projectNames:hover{\r\n  background: rgba(255, 87, 127, 1);\r\n} */\r\n\r\n.projectTitle {\r\n  width: 80%;\r\n  height: 10vh;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.newProject {\r\n  margin: 2% 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.addProjectDiv {\r\n  display: none;\r\n  position: fixed;\r\n  left: 16.7%;\r\n  width: 30vw;\r\n  z-index: 1;\r\n  background-color: #ff577f;\r\n\r\n}\r\n\r\n.projectContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15% auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.projectInput{\r\n  margin-bottom: 5%;\r\n  font-size: 25px;\r\n  width: 50%;\r\n}\r\n\r\n\r\n\r\n.projectSubmit {\r\n  width:5vw;\r\n  height:5vh;\r\n  align-self: center;\r\n\r\n}\r\n\r\n.projectHeader{\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 2em;\r\n\r\n}\r\n\r\n.closeButton {\r\n  color: #aaa;\r\n  align-self: flex-start;\r\n  position: fixed;\r\n  top: 10%;\r\n  left: 18%;\r\n\r\n}\r\n\r\n.closeButton:hover,\r\n.closeButton:focus {\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Tasks div styles */\r\n.contentTaskDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 92vh;\r\n  background: rgba(105, 48, 195, 0.6);\r\n  border-radius: 50px 0 0 0;\r\n}\r\n\r\n.taskHeaderDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 10vh;\r\n  background-color: #64dfdf;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.taskHeader {\r\n  margin-right: 2%;\r\n\r\n}\r\n.addButton{\r\nwidth: 100px;\r\nheight: 30px;\r\nborder: 1px solid #252525;\r\ntext-align: center;\r\nbackground-color: #64dfdf;\r\nfont-family: 'Karla', sans-serif;\r\nfont-weight: bold;\r\n}\r\n\r\n\r\n.addTaskButton{\r\n  margin-top: 10px;\r\n}\r\n\r\n.addButton:hover,\r\n.addButton:focus{\r\n  background-color: #252525;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n/* .taskDiv{}; */\r\n\r\n\r\n/* Task Creator Pop up list */\r\n\r\n.addTaskDiv {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  position: fixed;\r\n  /* top: 20%;\r\n  /* right: 15%; */\r\n  left: 0;\r\n  top: 0;\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4);\r\n  overflow-y: auto;\r\n}\r\n\r\n.taskContent{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fefefe;\r\n  width: 25%;\r\n  margin: 4% auto;\r\n}\r\n.taskContent > P {\r\n  left: 38.5%;\r\n  top: 8%;\r\n}\r\n\r\n.taskContent > h3 {\r\n  font-family:'Karla', sans-serif;\r\n  font-size: 2.2em;\r\n  margin: 2.5% 0;\r\n\r\n}\r\n.headerTask{\r\n  margin: 10px 0;\r\n}\r\n\r\n.titleInput{}\r\n\r\n.descriptionInput{}\r\n\r\n.dateInput{}\r\n\r\n/* .priorityInput{\r\n\r\n}\r\n.priorityInput > li{\r\n  list-style-type: disc;\r\n  box-sizing: border-box;\r\n  display: inline;\r\n}\r\n\r\n\r\n.priorityRed{\r\n  background-color: red;\r\n  width: 80vw;\r\n  height: 10%;\r\n}\r\n\r\n.priorityYellow{\r\n  background-color: yellow;\r\n  width: 80vw;\r\n  height: 10%;\r\n}\r\n\r\n.priorityGreen{\r\n  background-color: green;\r\n  width: 80vw;\r\n  height: 10%;\r\n} */\r\n\r\n\r\n.submit{\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n/* New Task */\r\n\r\n.newTask{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 2% auto;\r\n  align-items: center;\r\n  border: 1px solid black;\r\n  width: 80%;\r\n  height: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n/* WARNIN */\r\n/* .warningDiv{\r\n  display: none;\r\n  position: fixed;\r\n  width: 30vw;\r\n  z-index: 1;\r\n  background-color: #ff577f;\r\n} */\r\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(o[d]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function d(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function i(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var u=d(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:h(p,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var d=o(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),d=e.childNodes;d[n]&&e.removeChild(d[n]),d.length?e.insertBefore(a,d[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var a=f++;t=m||(m=c(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=i(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=d(t[r]);a[o].references--}for(var c=i(e,n),s=0;s<t.length;s++){var l=d(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=c}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;let o=[],a=e=>{const n=document.querySelector(".active");n?(n.classList.remove("active"),e.classList.add("active")):e.classList.add("active")},d=()=>{const e=document.querySelector(".taskHeader");let n=document.querySelector(".active").textContent;e.textContent=n},i=()=>{document.querySelectorAll(".newProject"),document.body.addEventListener("click",(function(e){"projectTitle"===e.target.className&&((e=>{const n=document.querySelector(".active");n?n.classList.remove("active"):e.target.classList.add("active")})(e),console.log(e.target.textContent),(e=>{const n=document.querySelector(".taskHeader"),t=e.target.textContent;n.textContent=t})(e))}))},c=()=>{let e=document.querySelector(".addProjectDiv");if(e)e.style.display="block";else{let e=document.createElement("div"),n=document.querySelector(".directoryDiv"),t=document.createElement("input"),r=document.createElement("button"),c=document.createElement("div"),s=document.createElement("p"),l=document.createElement("h3");l.classList.add("projectHeader"),l.textContent="Project Name",r.classList.add("projectSubmit","addButton"),t.classList.add("projectInput"),e.classList.add("addProjectDiv"),c.classList.add("projectContent"),s.classList.add("closeButton"),s.textContent="X",r.textContent="Add",e.style.display="block",document.body.addEventListener("click",(function(e){"closeButton"===e.target.className&&(document.querySelector(".addProjectDiv").style.display="none")})),c.appendChild(s),c.appendChild(l),c.appendChild(t),c.appendChild(r),e.appendChild(c),n.appendChild(e),(()=>{let e=document.querySelector(".projectInput");document.body.addEventListener("click",(function(n){if("projectSubmit addButton"===n.target.className){(e=>{const n=document.createElement("div");n.classList.add("newProject");const t=document.createElement("button");t.classList.add("projectTitle"),t.textContent=e;const r=document.querySelector(".projectNames");n.appendChild(t),r.appendChild(n),a(t),d()})(e.value);let n={projectName:e.value,tasks:[]};o.push(n),i(),document.querySelector(".addProjectDiv").style.display="none",console.log(o)}}))})()}};const s=(e,n,t)=>({data:e,description:n,date:t}),l=()=>{if(1==!!document.querySelector(".active")){let e=document.querySelector(".addTaskDiv");if(e)e.style.display="block";else{const e=document.createElement("div");e.classList.add("addTaskDiv");const n=document.createElement("div");n.classList.add("taskContent");const t=document.createElement("input");t.classList.add("titleInput","input"),t.value="Task name...";const r=document.createElement("h3");r.classList.add("titleHeader"),r.textContent="Task";const a=document.createElement("textarea");a.classList.add("descriptionInput","input"),a.value="Add description...";const d=document.createElement("h3");d.classList.add("descriptionHeader"),d.textContent="Description";const i=document.createElement("input");i.setAttribute("type","date"),i.classList.add("dateInput");const c=document.createElement("h3");c.classList.add("dateHeader"),c.textContent="Due Date";const l=document.createElement("P");l.classList.add("closeButton"),l.textContent="X";const u=document.createElement("button");u.classList.add("submit","addButton"),u.textContent="Add";const p=document.createElement("h2");p.classList.add("headerTask"),p.textContent="Create Task";const m=document.querySelector(".taskHeaderDiv");e.style.display="block",document.body.addEventListener("click",(function(e){"closeButton"===e.target.className&&(document.querySelector(".addTaskDiv").style.display="none")})),n.appendChild(l),n.appendChild(p),n.appendChild(r),n.appendChild(t),n.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(i),n.appendChild(u),e.appendChild(n),m.appendChild(e),document.body.addEventListener("click",(function(e){"submit addButton"===e.target.className&&((()=>{let e=document.querySelector(".titleInput"),n=document.querySelector(".descriptionInput"),t=document.querySelector(".dateInput"),r=(document.querySelector(".taskHeader"),e.value),a=n.value,d=t.value,i=s(r,a,d);o[0].tasks.push(i),console.log(o)})(),document.querySelector(".addTaskDiv").style.display="none")})),document.querySelectorAll(".input").forEach((e=>{e.addEventListener("click",(n=>{e.value=""}))}))}}else alert("Please add a project first")};(()=>{let e=document.createElement("div"),n=document.querySelector("#content");e.classList.add("taskHeaderDiv");const t=document.createElement("h2");t.classList.add("taskHeader");const r=document.createElement("button");r.classList.add("addButton","addTaskButton"),t.textContent="Tasks",r.textContent="Add Task",e.appendChild(t),e.appendChild(r),n.appendChild(e)})(),(()=>{let e=document.createElement("div");e.classList.add("directoryDiv");let n=document.createElement("main");n.classList.add("main");let t=document.querySelector("#content"),r=document.createElement("h2");r.classList.add("projectHeader"),r.textContent="Projects";let o=document.createElement("button");o.textContent="Add Project",o.classList.add("addButton","projectButton");let a=document.createElement("div");a.classList.add("projectNames"),e.appendChild(r),e.appendChild(o),e.appendChild(a),n.appendChild(e),t.appendChild(n)})(),(()=>{let e=document.querySelector("#content"),n=document.createElement("div"),t=document.querySelector("main");n.classList.add("contentTaskDiv"),t.appendChild(n),e.appendChild(t)})(),(()=>{let e=document.querySelector(".projectButton"),n=document.querySelector(".addTaskButton");e.addEventListener("click",c),n.addEventListener("click",l)})()})()})();