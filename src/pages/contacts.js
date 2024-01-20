import "../styles/contact.css";

const content = document.getElementById("content");

const title = document.createElement("h1");
title.classList.add("page-title");
title.textContent = "Contacts";

const subTitle = document.createElement("h2");
subTitle.classList.add("subtitle");
subTitle.textContent = "E-mail";

const emailSection = document.createElement("p");
emailSection.classList.add("email-section");
emailSection.innerText = `CEO: lorran@lorran.fr\n
Manager: managederestauran@lorran.fr\n
Chef: clebersonsouzapires@lorran.fr`;

const subTitle1 = document.createElement("h2");
subTitle1.classList.add("subtitle");
subTitle1.textContent = "Phones";

const phoneSection = document.createElement("p");
phoneSection.classList.add("phone-section");
phoneSection.innerText = `Lorrân: 32244-1000\n
Manager: 80085-4455\n
Chef: (11) 952x9-52x9`;

const subTitle2 = document.createElement("h2");
subTitle2.classList.add("subtitle");
subTitle2.textContent = "Others";

const otherSection = document.createElement("p");
otherSection.classList.add("others-section");
otherSection.innerText = `Lorrân: Please don't call me or e-mail me.\n
Manager: Please, call Lorrân before calling me.\n
Chef: Me chamo Cleberson.\n
Web Developer: This page sucks i know. I'll fix later... problably`;

function setContacts() {
  content.appendChild(title);
  content.appendChild(subTitle);
  content.appendChild(emailSection);

  content.appendChild(subTitle1);
  content.appendChild(phoneSection);
  content.appendChild(subTitle2);
  content.appendChild(otherSection);
}

export default setContacts;
