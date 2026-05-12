const items = [
  {
    name: "Hot Beverages",
    description: "Wide range of steaming hot coffee to make you fresh and light.",
    image: "../images/hot-beverages.png"
  },
  {
    name: "Cold Beverages",
    description: "Creamy and frothy cold coffee to make you cool.",
    image: "../images/cold-beverages.png"
  },
  {
    name: "Refreshment",
    description: "Fruit and icy refreshing drink to make feel refresh.",
    image: "../images/refreshment.png"
  },
  {
    name: "Special Combos",
    description: "Your favorite eating and drinking combinations.",
    image: "../images/special-combo.png"
  },
  {
    name: "Dessert",
    description: "Satiate your palate and take you on a culinary treat.",
    image: "../images/desserts.png"
  },
  {
    name: "Burger & French Fries",
    description: "Quick bites to satisfy your small size hunger.",
    image: "../images/burger-frenchfries.png"
  }
];
let menuGrid=document.getElementById("menu-grid");

for(let i=0;i<items.length;i++){
  let card=document.createElement("div");
  card.innerHTML=`
  <img src="${items[i].image}">
  <h2>${items[i].name}</h2>
  <p>${items[i].description}</p>`
  menuGrid.appendChild(card);

}