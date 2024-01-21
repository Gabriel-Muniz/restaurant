import "./styles/main.css";
import firstLoad from "./pages/firstload";
import setMenu from "./pages/menu";
import setHome from "./pages/home";
import setContacts from "./pages/contacts";
import removerChild from "./scripts/childremover";

firstLoad();
setHome();

let currentPage = "";
currentPage = "home";

const menuBtn = document.querySelector(".menu-btn");
const homeBtn = document.querySelector(".home-btn");
const contactBtn = document.querySelector(".contact-btn");

menuBtn.addEventListener("click", () => {
  if (currentPage == "menu") {
    return;
  }
  removerChild();
  setMenu();
  currentPage = "menu";
});

homeBtn.addEventListener("click", () => {
  if (currentPage == "home") {
    return;
  }
  removerChild();
  setHome();
  currentPage = "home";
});

contactBtn.addEventListener("click", () => {
  if (currentPage == "contacts") {
    return;
  }
  removerChild();
  setContacts();
  currentPage = "contacts";
});
