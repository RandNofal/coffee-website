const menu = document.querySelector(".links");
const openBtn = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close");

openBtn.onclick = function () {
    menu.classList.add("active");
};

closeBtn.onclick = function () {
    menu.classList.remove("active");
};
const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.onclick = function () {
        menu.classList.remove("active");
    };
});