const content = document.getElementById("content");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Gabriel's Restaurant";

const createDivRow = () => {
  const divRow = document.createElement("div");
  divRow.classList.add("div-row");
  return divRow;
};

const aboutMe = createDivRow();

const presentationParagraph = document.createElement("p");

aboutMe.appendChild(presentationParagraph);

presentationParagraph.textContent = `Created by me (Gabriel), that’s the website for my restaurant,
Gabriel’s (that’s me) Restaurant. In this website you’ll find pages
for my dishes (Not real by the way), and more things about me
(Gabriel (That’s me)).`;

const imgFrame = document.createElement("div");
imgFrame.classList.add("img-frame");

const myProfile = createDivRow();

const profileParagraph = document.createElement("p");
profileParagraph.textContent = `That’s me (Gabriel), actually it’s not. No way i would put a picture
of me in this website. But i need to put things on this page so
you(Not me) can have something to see. It’s actually really hard to
write things about things like this site, because this Gabriel’s(me)
Restaurant doesn’t really exists...`;

myProfile.append(imgFrame, profileParagraph);

export default function initialLoad() {
  content.append(pageTitle, aboutMe, myProfile);
}
