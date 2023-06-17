window.onload = () => {//
    async function getPrewiew(){
        let url = 'https://api.thecatapi.com/v1/images/search?limit=10' + '&page=1&api_key=live_tVsqwwsPPdgBurscYsbyIYVW1bKzMti9drm9cKp2jmhirNd7El0BL8ykdzSZBPd0';
        await fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            url = String(data[0].url);
        }).catch((error) => {
            location.reload(true);
        });
        document.head.innerHTML += `<meta property="og:image" content="${url}">`;
    }

    getPrewiew();

    var header = document.getElementById("title");
    var pageNumber = 0;
    var actualScroll = 0;
    var oldScroll = 0;
    var firstRequest = true;
    var onRequest = false;
    var onLoading = false;

    setInterval(() => {
        onRequest = false;
    }, 5000)

    function showLoading(){
        const loading = document.createElement("div");
        document.body.appendChild(loading);
        loading.className = "loading";
        loading.innerHTML = "LOADING MORE CATS...";
        onLoading = true;
        return loading;
    }

    function hideLoading(loading){
        loading.remove();
        onLoading = false;
    }

    async function httpRequest(number, limit) {
        const loading = showLoading();
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
        hideLoading(loading);
    }

    httpRequest(pageNumber, 10);
    onRequest = false;
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
        
        if (($(window).scrollTop()) > ($(document).height() / 2) && (onRequest == false) && (onLoading == false)) {
            pageNumber++;
            httpRequest(pageNumber, 100);
        }
    });
}