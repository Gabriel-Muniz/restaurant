import "../css/menu.css"

const content = document.getElementById("content");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Menu";

const createDishe = (title, about, price) => {
  const divRow = document.createElement("div");
  divRow.classList.add("div-row");

  const dishePhoto = document.createElement("div");
  dishePhoto.classList.add("photo-dishe");

  const disheInfo = document.createElement("div");
  disheInfo.classList.add("info-dishe");

  const disheTitle = document.createElement("h2");
  disheTitle.classList.add("title-dishe");

  const disheAbout = document.createElement("p");
  disheAbout.classList.add("about-dishe");

  const dishePrice = document.createElement("span");
  dishePrice.classList.add("price-dishe");

  disheTitle.textContent = title;
  disheAbout.textContent = about;
  dishePrice.textContent = price;

  disheInfo.append(disheTitle, disheAbout, dishePrice);

  divRow.append(dishePhoto, disheInfo);

  return divRow;
};

const parmediana = createDishe(
  "ParmeDiana",
  `ParmeDiana is a dishe made in homage for the first woman soccer player from Palmeiras. Princess Diana`,
  "R$ 19,14"
);

const strogonoff = createDishe(
  "StruggleOff",
  `It's a really hard dishe to make, we don't have the ingredients... So
            please, don't order this one...`,
  "R$ 999,99"
);

const carbonara = createDishe(
  "Carbonara",
  `That's a good one to order if you're feeling lucky.
            The chance of getting a carbonized one is really high.
            Our chef* is kinda dumb`,
  "R$ 13,98"
);

export const menuLoad = () => {
  content.append(pageTitle, parmediana, strogonoff, carbonara);
}
