window.onload = () => {
    const buttonInstagram = document.querySelector("[title=\"Instagram\"]");
    const buttonTelegram = document.querySelector("[title=\"Telegram\"]");
    const buttonInfinityCats = document.querySelector("[title=\"Infinity Cats\"]");
    
    buttonInstagram.addEventListener("click", () => {
        window.open("https://www.instagram.com/gabrazio/", "_self");
    });

    buttonTelegram.addEventListener("click", () => {
        window.open("https://t.me/Gabrazio", "_self");
    });

    buttonInfinityCats.addEventListener("click", () => {
        window.open("https://gabrazio.github.io/cats/", "_self");
    });
}