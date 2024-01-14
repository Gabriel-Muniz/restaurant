const content = document.getElementById("content");

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");

const header = document.createElement("div");
header.classList.add("header");

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");

const homeBtn = document.createElement("button");
homeBtn.classList.add("header-btn");
homeBtn.setAttribute('id', 'homeBtn');

const menuBtn = document.createElement("button");
menuBtn.classList.add("header-btn");
menuBtn.setAttribute('id', 'menuBtn');

const contactBtn = document.createElement("button");
contactBtn.classList.add("header-btn");
contactBtn.setAttribute('id', 'contactBtn');

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

const container = document.createElement("div");
container.classList.add("container");

const footer = document.createElement("div");
footer.classList.add("footer");

footer.textContent = "Copyright \u00A9 Gabriel Muniz 2024";

for (let i = 0; i < 5; i++) {
  const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    container.appendChild(recipeCard);
}

function firstLoad() {
  header.appendChild(logoContainer);
  header.appendChild(headerRight);

  headerRight.appendChild(homeBtn);
  headerRight.appendChild(menuBtn);
  headerRight.appendChild(contactBtn);

  content.appendChild(header);
  content.appendChild(container);
  content.appendChild(footer);
}

export default firstLoad;
