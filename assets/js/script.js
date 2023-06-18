window.onload = () => {
    // @grant        window.close
    
    // Generic Variables
    var windowClicked = false;
    var music = [];
    var texts = ["Hello World!", "AaAaaAaH!!!", "Drink some water! ;)", "WhaAaT?! D:", "Welcome!! :)"];
    document.getElementById("text").innerHTML = String(texts[Math.floor(Math.random()*texts.length)]);

    function setupAudio(){
        // FX
        const audio = new Audio('assets/audio/click.mp3');

        // Music
        music.push(new Audio('assets/audio/Moog City.mp3'));
        music.push(new Audio('assets/audio/Minecraft.mp3'));
    }

    function showMenu() {
        document.body.innerHTML = `<div id="container">
                                        <header>
                                            <img id="title" src="assets/img/file.png">
                                            <div id="text"></div>
                                        </header>
                                        <nav>
                                            <div id="buttons">
                                                <button id="singleplayer">Instagram</button><br>
                                                <button id="multiplayer">Telegram</button><br>
                                                <button id="options">Projects...</button>
                                                <button id="quit">Quit</button>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="background"></div>`;
    }

    function setupMenu() {
        // DOM Elements
        const singleplayer = document.getElementById("singleplayer");
        const mutiplayer = document.getElementById("multiplayer");
        const options = document.getElementById("options");
        const quit = document.getElementById("quit");

        // Event Listeners
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
                    window.open('https://www.google.com', "_self");
            }
        });
    }

    function setupWindow() {
        window.addEventListener("click", () => {
            if(windowClicked == false){
                windowClicked = true;
                music[Math.floor(Math.random()*music.length)].play();
            }
        });
    
        window.addEventListener("orientationchange", () => {
            window.scrollTo(0, 0);
        });
    }

    setupWindow();
    setupMenu();
    setupAudio();
}