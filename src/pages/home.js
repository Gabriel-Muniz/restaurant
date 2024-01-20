import "../styles/home.css";

const content = document.getElementById("content");

function setHome() {
  const title = document.createElement("h1");
  title.classList.add("home-title");
  title.textContent = "Restauran dê Lorrân";

  const para = document.createElement("p");
  para.classList.add("home-para");
  let paraText = "Welcome to Restauran dê Lorrân,\n Here we cook with much pleasure,\n Maybe a little too much.\n\nRestauran dê Lorrân\nWe would love to serv you. Even food.\n\nRestauran dê Lorrân";
  para.innerText = `${paraText}`;

  content.appendChild(title);
  content.appendChild(para);

}

export default setHome;
