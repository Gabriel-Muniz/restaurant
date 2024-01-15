import firstLoad from "./home";
import showMenu from "./menu";
import "./style.css";

firstLoad();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

function removerChild() {
  const container = document.querySelector(".container");
  const wrapper = document.querySelector(".container-wrapper");
  container.removeChild(wrapper);
}

function menuClickHandler() {
  removerChild();
  showMenu();
}

function homeClickHandler() {
    removerChild();
    firstLoad();
  }
menuBtn.onclick = menuClickHandler;
homeBtn.onclick = homeClickHandler;
