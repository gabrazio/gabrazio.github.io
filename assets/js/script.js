window.onload = () => {
    // @grant        window.close
    
    // Generic Variables
    var windowClicked = false;
    const music = [];
    var texts = ["Hello World!", "AaAaaAaH!!!", "Drink some water! ;)", "WhaAaT?! D:", "Welcome!! :)"];

    // Audio
    const audio = new Audio('assets/audio/click.mp3');
    music.push(new Audio('assets/audio/Moog City.mp3'));
    music.push(new Audio('assets/audio/Minecraft.mp3'));

    // DOM Elements
    const singleplayer = document.getElementById("singleplayer");
    const mutiplayer = document.getElementById("multiplayer");
    const options = document.getElementById("options");
    const quit = document.getElementById("quit");

    function resetPage(){
        document.body.innerHTML = `<div id="container">
                                    <header>
                                        <img id="title" src="assets/img/file.png">
                                        <div id="text"></div>
                                    </header>
                                    <nav>
                                        <div id="buttons">
                                            <button id="singleplayer">Singleplayer</button><br>
                                            <button id="multiplayer">Multiplayer</button><br>
                                            <button id="options">Options...</button>
                                            <button id="quit">Quit</button>
                                        </div>
                                    </nav>
                                </div>`;
    }

    window.addEventListener("click", () => {
        if(windowClicked == false){
            windowClicked = true;
            music[Math.floor(Math.random()*music.length)].play();
        }
    });

    document.getElementById("text").innerHTML = String(texts[Math.floor(Math.random()*texts.length)]);

    singleplayer.addEventListener("click", () => {
        audio.play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://www.instagram.com/gabrazio/", "_self");
        }
    });

    mutiplayer.addEventListener("click", () => {
        audio.play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://t.me/Gabrazio", "_self");
        }
    });

    options.addEventListener("click", () => {
        audio.play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://gabrazio.github.io/cats/", "_self");
        }
    });

    quit.addEventListener("click", () => {
        audio.play();
        if(window.confirm('Do you want to leave this page?')){
                setTimeout(window.close, 1000);
        }
    });
}