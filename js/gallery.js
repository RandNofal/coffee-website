const images =["../images/gallery-1.jpg",
    "../images/gallery-2.jpg",
    "../images/gallery-3.jpg",
    "../images/gallery-4.jpg",
    "../images/gallery-5.jpg",
    "../images/gallery-6.jpg"
];
let gallery=document.getElementById("gallery-grid");

for(let j=0;j<images.length;j++){
    
    let image_card=document.createElement("div");
   image_card.innerHTML = `
  <div class="zoom-container">
    <img src="${images[j]}">
  </div>
`;
    gallery.appendChild(image_card);
}
