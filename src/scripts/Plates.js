const menuPlates = [];

class Plate {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  pushBook = (() => {
    menuPlates.push(this);
  })();
}

new Plate(
  "Strugleoff",
  "That's a really hard dish to make, please don't ask for one",
  69.42
);
new Plate(
  "Parmediana",
  `'Parme' - comes from PARMERAS.
  'Diana' - is the princess, the first Palmeiras fan ever!`,
  191.40
);

export default menuPlates;
