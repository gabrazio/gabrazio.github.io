window.onload = () => {
    var header = document.getElementById("title");
    var pageNumber = 0;
    var actualScroll = 0;
    var oldScroll = 0;
    var firstRequest = true;
    var onRequest = false;

    setInterval(() => {
        onRequest = false;
    }, 5000)

    async function httpRequest(number, limit) {
        // Elemento caricamento
        const loading = document.createElement("div");
        document.body.appendChild(loading);
        loading.className = "loading";
        loading.innerHTML = "LOADING MORE CATS...";

        onRequest = true;
        let url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit + '&page=' + number + '&api_key=live_tVsqwwsPPdgBurscYsbyIYVW1bKzMti9drm9cKp2jmhirNd7El0BL8ykdzSZBPd0';
        await fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            for (let i in data) {
                const img = document.createElement("img");
                img.setAttribute("src", String(data[i].url));
                img.setAttribute("width", "100%");
                document.body.appendChild(img);
            }
        }).catch((error) => {
            if(firstRequest == true){
                location.reload(true);
            }
        });
        loading.remove();
    }

    httpRequest(pageNumber, 10);
    httpRequest(pageNumber++, 100);
    firstRequest = false;

    window.addEventListener('scroll', (event) => {
        actualScroll = $(window).scrollTop();

        if (actualScroll > oldScroll) {
            header.className = "hide-header";

        } else {
            header.className = "show-header";
            halfScroll = false;
        }

        oldScroll = actualScroll;
        
        if (($(window).scrollTop()) > ($(document).height() / 2) && (onRequest == false)) {
            pageNumber++;
            httpRequest(pageNumber, 100);
        }
    });
}