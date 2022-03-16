console.log("Witam wszystkich developerów")
let button = document.querySelector(".js-button");
let background = document.querySelector(".js-background");
let buttonName = document.querySelector(".js-buttonName")

button.addEventListener("click", () => {
    background.classList.toggle("theme");

    buttonName.innerText = background.classList.contains("theme")
        ? "Wyłącz ten motyw"
        : "Włącz inny motyw";

});
