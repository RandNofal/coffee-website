const menu = document.querySelector(".links");
const openBtn = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");

openBtn.onclick = function () {
    menu.classList.add("active");
    overlay.style.display = "block";
};

closeBtn.onclick = function () {
    menu.classList.remove("active");
    overlay.style.display = "none";
};

const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.onclick = function () {
        menu.classList.remove("active");
        overlay.style.display = "none";
    };
});

overlay.onclick = function () {
    menu.classList.remove("active");
    overlay.style.display = "none";
};