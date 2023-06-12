window.onload = () => {
    var header = document.getElementById("title");
    var pageNumber = 0;
    var actualScroll = 0;
    var oldScroll = 0;
    var halfScroll = false;
    var onRequest = false;

    function httpRequest(number, limit) {
        let url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit + '&page=' + number + '&api_key=live_tVsqwwsPPdgBurscYsbyIYVW1bKzMti9drm9cKp2jmhirNd7El0BL8ykdzSZBPd0';
        fetch(url).then((res) => {
            console.log("RICHIESTA INVIATA!");
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
                const err_box = document.createElement("div");
                err_box.className = "error";
                const err_msg = document.createElement("span");
                err_msg.innerHTML = "ERROR: 404 >:'3";
                err_box.appendChild(err_msg);
                document.body.appendChild(err_box);
            }
        });
        onRequest = false;
        halfScroll = false;
    }

    httpRequest(pageNumber, 10);
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

        if (($(window).scrollTop()) > ($(document).height() / 2)) {
            halfScroll = true;
        }

        if ((halfScroll == true) && onRequest == false){
            pageNumber++;
            httpRequest(pageNumber, 100);
        }
    });
}