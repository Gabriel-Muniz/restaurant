import "./styles/main.css";
import firstLoad from "./pages/firstload";
import setMenu from "./pages/menu";
import setHome from "./pages/home";
import removerChild from "./scripts/childremover";

firstLoad();
setHome();

let currentPage = "";
currentPage = "home";

const menuBtn = document.querySelector(".menu-btn");
const homeBtn = document.querySelector(".home-btn");

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
