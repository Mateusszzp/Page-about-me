{
    const welcome = () => {
        console.log("Witam wszystkich developerów")
    }


    const toggleBackground = () => {
        const background = document.querySelector(".js-background");
        const buttonName = document.querySelector(".js-buttonName");

        background.classList.toggle("theme");
        buttonName.innerText = background.classList.contains("theme")
            ? "Wyłącz biały motyw"
            : "Włącz żółty motyw";

    };
    
    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);
        welcome();
    };
    
    init()
}