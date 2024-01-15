const wrapper = document.createElement("div");
wrapper.classList.add("container-wrapper");
wrapper.classList.add("wrapper-menu");

const titleH1 = document.createElement("h1");
titleH1.textContent = "Menu"; 

function createPlate(name, description, price) {
    const plateName = document.createElement("h1");
    const plateDesc = document.createElement("p");
    const platePrice = document.createElement("span");

    plateName.textContent = name;
    plateDesc.textContent = description;
    platePrice.textContent = price;

    wrapper.appendChild(this)
}



function showMenu() {
    const container = document.querySelector(".container");
    container.appendChild(wrapper);
    wrapper.appendChild(titleH1);
}

export default showMenu;
