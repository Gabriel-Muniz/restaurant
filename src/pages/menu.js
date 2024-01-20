import "../styles/menu.css";
import menuPlates from "../scripts/Plates";

const content = document.getElementById("content");

function setMenu() {
  
  menuPlates.forEach((item) => {
    const menu = document.createElement("div");
    menu.classList.add("menu-card");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");

    const menuDesc = document.createElement("div");
    menuDesc.classList.add("menu-desc");

    const menuPrice = document.createElement("div");
    menuPrice.classList.add("menu-price");

    menuTitle.textContent = item.name;
    menuDesc.textContent = item.description;
    menuPrice.textContent = `R$ ${item.price}`;

    menu.appendChild(menuTitle);
    menu.appendChild(menuDesc);
    menu.appendChild(menuPrice);

    const menuImg = document.createElement("div");
    menuImg.classList.add("img-container");

    const backgroundImg = new Image();
    backgroundImg.src = item.image;
    backgroundImg.classList.add("plate-img")
    menuImg.appendChild(backgroundImg);

    menu.appendChild(menuImg);
    content.appendChild(menu);
  });
}

export default setMenu;
