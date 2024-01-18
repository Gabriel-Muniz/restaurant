import "../styles/main.css";

const body = document.querySelector("body");

const header = document.createElement("div");
header.classList.add("header");

const footer = document.createElement("div");
footer.classList.add("footer");
const copyright = document.createElement("span");
copyright.classList.add("copy-text");
footer.appendChild(copyright);
copyright.textContent = "Copyright \u00A9 Gabriel Muniz 2024"

const logo = document.createElement("div");
logo.classList.add("logo-container");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

const btnHome = document.createElement("button");
btnHome.textContent = "Home";
btnHome.classList.add("btn-header");

const btnMenu = document.createElement("button");
btnMenu.textContent = "Menu";
btnMenu.classList.add("btn-header");

const btnContact = document.createElement("button");
btnContact.textContent = "Contact";
btnContact.classList.add("btn-header");

btnContainer.appendChild(btnHome);
btnContainer.appendChild(btnMenu);
btnContainer.appendChild(btnContact);

header.appendChild(logo);
header.appendChild(btnContainer);

function firstLoad() {
  body.insertBefore(header, body.children[0]);
  body.appendChild(footer);

  console.log(body, header);
}

export default firstLoad;
