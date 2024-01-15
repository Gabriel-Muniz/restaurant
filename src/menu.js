const menuItens = [];

class Menu {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  pushItem = (() => {
    menuItens.push(this);
  })();
}

let item1 = new Menu(
  "Camp Stew",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue nunc, finibus ut maximus mattis, fringilla et erat. Ut eu quam egestas, maximus tellus nec, tristique augue. Proin sodales ut metus ut rhoncus. Mauris sollicitudin enim sed imperdiet tincidunt. Fusce quis magna auctor, convallis nisl vitae, convallis lectus.`,
  35.0
);

let item2 = new Menu(
  "Camp Stew 2",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue nunc, finibus ut maximus mattis, fringilla et erat. Ut eu quam egestas, maximus tellus nec, tristique augue. Proin sodales ut metus ut rhoncus. Mauris sollicitudin enim sed imperdiet tincidunt. Fusce quis magna auctor, convallis nisl vitae, convallis lectus.`,
  35.0
);

let item3 = new Menu(
  "Camp Stew 3",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue nunc, finibus ut maximus mattis, fringilla et erat. Ut eu quam egestas, maximus tellus nec, tristique augue. Proin sodales ut metus ut rhoncus. Mauris sollicitudin enim sed imperdiet tincidunt. Fusce quis magna auctor, convallis nisl vitae, convallis lectus.`,
  35.0
);

const wrapper = document.createElement("div");
wrapper.classList.add("container-wrapper");
wrapper.classList.add("wrapper-menu");

const titleH1 = document.createElement("h1");
titleH1.textContent = "Menu";

function addMenuItems() {
  menuItens.forEach((item) => {
    console.log(item);
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");
    const nameCont = document.createElement("div");
    nameCont.classList.add("name-container");
    const priceCont = document.createElement("div");
    priceCont.classList.add("price-container");
    const descCont = document.createElement("div");
    descCont.classList.add("description-container");
    const itemName = document.createElement("span");
    const itemDesc = document.createElement("p");
    const itemPrice = document.createElement("span");

    itemName.textContent = item.name;
    itemDesc.textContent = item.description;
    itemPrice.textContent = item.price;

    itemCard.appendChild(nameCont);
    itemCard.appendChild(descCont);
    itemCard.appendChild(priceCont);

    nameCont.appendChild(itemName);
    priceCont.appendChild(itemPrice);
    descCont.appendChild(itemDesc);

    wrapper.appendChild(itemCard);

    console.log(item);
  });
}

function showMenu() {
  const container = document.querySelector(".container");
  container.appendChild(wrapper);
  wrapper.appendChild(titleH1);
  addMenuItems();
}

export default showMenu;
