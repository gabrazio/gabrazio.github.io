window.onload = () => {
    // @grant        window.close
    
    // Generic Variables
    var windowClicked = false;
    var menu = document.getElementById("container");
    
    var music = [];
    music.push(new Audio('assets/audio/Moog City.mp3'));
    music.push(new Audio('assets/audio/Minecraft.mp3'));

    var texts = ["Hello World!", "AaAaaAaH!!!", "Drink some water! ;)", "WhaAaT?! D:", "Welcome!! :)"];
    const sessionText = String(texts[Math.floor(Math.random()*texts.length)]);
    document.getElementById("text").innerHTML = sessionText;


    function showMenu() {
        const container = document.createElement("div");
        const header = document.createElement("header");
        const img = document.createElement("img");
        const text = document.createElement("div");
        const nav = document.createElement("nav");
        const buttons = document.createElement("div");
        const singleplayer = document.createElement("button");
        const multiplayer = document.createElement("button");
        const options = document.createElement("button");
        const quit = document.createElement("button");

        singleplayer.textContent = "Social";
        multiplayer.textContent = "Other";
        options.textContent = "Projects...";
        quit.textContent = "Quit";

        img.src = "assets/img/file.png";
        text.textContent = sessionText;

        buttons.id = "buttons";
        container.id = "container";
        img.id = "title";
        text.id = "text";
        singleplayer.id = "singleplayer";
        multiplayer.id = "multiplayer";
        options.id = "options";
        quit.id = "quit";

        buttons.appendChild(singleplayer);
        buttons.appendChild(multiplayer);
        buttons.appendChild(options);
        buttons.appendChild(quit);

        header.appendChild(img);
        header.appendChild(text);

        nav.appendChild(buttons);

        container.appendChild(header);
        container.appendChild(nav);

        document.body.appendChild(container);

        menu = container;
    }

    function clickSingleplayer(){
        new Audio('assets/audio/click.mp3').play();

        const container = document.createElement("div");
        const header = document.createElement("header");
        const img = document.createElement("img");
        const text = document.createElement("div");
        const nav = document.createElement("nav");
        const buttons = document.createElement("div");
        const instagram = document.createElement("button");
        const telegram = document.createElement("button");
        const twitter = document.createElement("button");
        const back = document.createElement("button");

        instagram.textContent = "Instagram";
        telegram.textContent = "Telegram";
        twitter.textContent = "Twitter";
        back.textContent = "Back";

        img.src = "assets/img/file.png";
        text.textContent = sessionText;

        buttons.id = "buttons";
        container.id = "container";
        img.id = "title";
        text.id = "text";
        instagram.id = "instagram";
        telegram.id = "telegram";
        twitter.id = "twitter";
        back.id = "back";

        buttons.appendChild(instagram);
        buttons.appendChild(telegram);
        buttons.appendChild(twitter);
        buttons.appendChild(back);

        header.appendChild(img);
        header.appendChild(text);

        nav.appendChild(buttons);

        container.appendChild(header);
        container.appendChild(nav);

        document.body.appendChild(container);
        
        removeEventListener("click", clickSingleplayer);
        removeEventListener("click", clickMultiplayer);
        removeEventListener("click", clickOptions);
        removeEventListener("click", clickQuit);
        
        instagram.style.gridArea = "instagram";
        telegram.style.gridArea = "telegram";
        twitter.style.gridArea = "twitter";
        back.style.gridArea = "back";

        buttons.style.gridTemplateColumns = "1fr";
        buttons.style.gridTemplateAreas = `"instagram"
                                            "telegram"
                                            "twitter"
                                            "back"`;

        document.getElementById("instagram").addEventListener("click", clickInstagram);
        document.getElementById("telegram").addEventListener("click", clickTelegram);
        document.getElementById("twitter").addEventListener("click", clickTwitter);
        document.getElementById("back").addEventListener("click", clickBack);
        
        menu.innerHTML = "";
        document.body.removeChild(menu);
        menu = container;
    }

    function clickBack() {
        new Audio('assets/audio/click.mp3').play();
        
        document.getElementById("buttons").style.display = "grid";
        document.getElementById("buttons").style.gridTemplateAreas = "\"singleplayer singleplayer singleplayer\" \"multiplayer multiplayer multiplayer\" \"options . quit-game\"";
        document.getElementById("buttons").style.gridTemplateRows = "unset";
        document.getElementById("buttons").style.gridTemplateColumns = "unset";
        
        menu.innerHTML = "";
        document.body.removeChild(menu);

        showMenu();
        setupMenu();
    }

    function clickInstagram() {
        new Audio('assets/audio/click.mp3').play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://www.instagram.com/gabrazio/", "_self");
        }
    }

    function clickTelegram() {
        new Audio('assets/audio/click.mp3').play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://t.me/Gabrazio", "_self");
        }
    }

    function clickTwitter(){
        new Audio('assets/audio/click.mp3').play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://twitter.com/Gabrazio", "_self");
        }
    }

    function clickInfinityCats(){
        new Audio('assets/audio/click.mp3').play();
        if(window.confirm('Do you want to leave this page?')){
            window.open("https://gabrazio.github.io/cats/", "_self");
        }
    }

    function clickMultiplayer(){
        new Audio('assets/audio/click.mp3').play();
    }

    function clickOptions(){
        new Audio('assets/audio/click.mp3').play();

        menu.innerHTML = "";
        document.body.removeChild(menu);

        const container = document.createElement("div");
        const header = document.createElement("header");
        const img = document.createElement("img");
        const text = document.createElement("div");
        const nav = document.createElement("nav");
        const buttons = document.createElement("div");
        const cats = document.createElement("button");
        const back = document.createElement("button");

        cats.textContent = "Infinity Cats";
        back.textContent = "Back";

        img.src = "assets/img/file.png";
        text.textContent = sessionText;

        buttons.id = "buttons";
        container.id = "container";
        img.id = "title";
        text.id = "text";
        cats.id = "cats";
        back.id = "back";

        buttons.appendChild(cats);
        buttons.appendChild(back);

        header.appendChild(img);
        header.appendChild(text);

        nav.appendChild(buttons);

        container.appendChild(header);
        container.appendChild(nav);

        document.body.appendChild(container);
        
        removeEventListener("click", clickSingleplayer);
        removeEventListener("click", clickMultiplayer);
        removeEventListener("click", clickOptions);
        removeEventListener("click", clickQuit);
        
        cats.style.gridArea = "cats";
        back.style.gridArea = "back";

        buttons.style.gridTemplateColumns = "1fr";
        buttons.style.gridTemplateAreas = `"cats"
                                           "back"`;

        document.getElementById("cats").addEventListener("click", clickInfinityCats);
        document.getElementById("back").addEventListener("click", clickBack);
        
        menu = container;
    }

    function clickQuit(){
        new Audio('assets/audio/click.mp3').play();
        if(window.confirm('Do you want to leave this page?')){
                window.open('https://www.google.com', "_self");
        }
    }

    function setupMenu() {
        // DOM Elements
        const singleplayer = document.getElementById("singleplayer");
        const mutiplayer = document.getElementById("multiplayer");
        const options = document.getElementById("options");
        const quit = document.getElementById("quit");

        // Event Listeners
        singleplayer.addEventListener("click", clickSingleplayer);
        mutiplayer.addEventListener("click", clickMultiplayer);
        options.addEventListener("click", clickOptions);
        quit.addEventListener("click", clickQuit);
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
}
