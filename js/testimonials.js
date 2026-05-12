let reviews = [
  {
    id: 1,
    name: "Emma Johnson",
    review: "Absolutely loved the coffee! The flavor was rich and smooth.",
    image: "../images/user-1.jpg"
  },
  {
    id: 2,
    name: "Liam Smith",
    review: "Great atmosphere and friendly staff. Highly recommended!",
    image: "../images/user-2.jpg"
  },
  {
    id: 3,
    name: "Olivia Brown",
    review: "The best place to relax and enjoy a cup of coffee.",
    image: "../images/user-3.jpg"
  },
  {
    id: 4,
    name: "Noah Wilson",
    review: "Good coffee and quick service. Will definitely come back.",
    image: "../images/user-4.jpg"
  },
  {
    id: 5,
    name: "Ava Martinez",
    review: "Loved the vibe and the quality of the drinks!",
    image: "../images/user-5.jpg"
  } 
];
let grid = document.getElementById("testimonials-grid");
let currentIndex = 0;

function render() {

  grid.innerHTML = "";

  let cardsToShow = window.innerWidth <= 900 ? 2 : 3;

  for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {

    if (i >= reviews.length) break;

    let card = document.createElement("div");

    card.innerHTML = `
      <img src="${reviews[i].image}">
      <h4>${reviews[i].name}</h4>
      <p>"${reviews[i].review}"</p>
    `;

    grid.appendChild(card);
  }
}

render();

document.getElementById("next").onclick = function () {

  let cardsToShow = window.innerWidth <= 900 ? 2 : 3;

  if (currentIndex + cardsToShow < reviews.length) {
    currentIndex++;
    render();
  }
};

document.getElementById("prev").onclick = function () {

  if (currentIndex > 0) {
    currentIndex--;
    render();
  }
};