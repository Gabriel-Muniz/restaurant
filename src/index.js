import "./css/reset.css";
import "./css/style.css";
import initialLoad from "./scripts/home.js";
import { menuLoad } from "./scripts/menu.js";
import populateMenu from "./scripts/about.js";

initialLoad();

const content = document.querySelector('#content');

const tabHandler = (() => {
  const navButtons = document.querySelectorAll(".nav-btn");
  console.log(navButtons);

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if(button.id == 'menu'){
        content.innerHTML = "";
        menuLoad();
      }
      if (button.id == 'home') {
        content.innerHTML = "";
        initialLoad();
      }
      if (button.id == "about"){
        content.innerHTML = ``;
        populateMenu()
      }
      
    });
  });
})();
