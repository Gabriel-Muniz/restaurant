const content = document.querySelector("#content");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "About";

const subtitle = document.createElement("h2");
subtitle.textContent = "About the Restaurant";

const topic = document.createElement("h2");
topic.textContent = "ABOUT THE RESTAURANT NOW FOR REAL";

const createParagraph = (paragraph) => {
  const para = document.createElement("p");
  para.innerHTML = paragraph;

  content.append(para);
};

export default function populateMenu() {
  content.append(pageTitle);
  createParagraph(`So... i was born in 2000, i am 24 years old... i live in São Paulo,
        Brazil. My soccer team is
        <strong>SOCIEDADE ESPORTIVA PALMEIRAS!!! (PARMERA FIU FIU FIU).</strong>
        <br />`);
  createParagraph(`Now that i thought about i think this page should be referred to the
        Gabriel's (Me) Restaurant.`);
  content.append(subtitle);
  createParagraph(`Gabriel's Restaurant is a fake restaurant made for TOP (The Odin
        Project). It's a project focused on learning webpack and javascript
        modules. Really confusing stuff. I'll look for some content about CSS so
        maybe i'll get better...`);
  content.append(topic);
  createParagraph(`Sorry about that.<br /><br />

        Gabriel's (Me...) Restaurant was created yesterday with the aim of
        serving really good and tasty yummy yummy food for you!<br />

        At the moment we are short on staff, so if you know how to cook
        something and want to work with us, please send a mail to
        <em><strong>ireallywanttoworkwithgabriel@gabriel.email.com</strong></em>`)
}
