import "../styles/main.css";
import logoPng from "../images/logo.png";

const body = document.querySelector("body");

const header = document.createElement("div");
header.classList.add("header");

const footer = document.createElement("div");
footer.classList.add("footer");
const copyright = document.createElement("span");
copyright.classList.add("copy-text");
footer.appendChild(copyright);
copyright.textContent = "Copyright \u00A9 Gabriel Muniz 2024";

const logo = document.createElement("div");
logo.classList.add("logo-container");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

const btnHome = document.createElement("button");
btnHome.textContent = "Home";
btnHome.classList.add("home-btn", "btn-header");

const btnMenu = document.createElement("button");
btnMenu.textContent = "Menu";
btnMenu.classList.add("menu-btn", "btn-header");

const btnContact = document.createElement("button");
btnContact.textContent = "Contact";
btnContact.classList.add("contact-btn", "btn-header");

btnContainer.appendChild(btnHome);
btnContainer.appendChild(btnMenu);
btnContainer.appendChild(btnContact);

header.appendChild(logo);
header.appendChild(btnContainer);

const logoImg = new Image();
logoImg.src = logoPng;
logoImg.classList.add("logo-img");
logo.appendChild(logoImg);

function firstLoad() {
  body.insertBefore(header, body.children[0]);
  body.appendChild(footer);
}

export default firstLoad;
