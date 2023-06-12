window.onload = () => {
    var header = document.getElementById("title");
    var pageNumber = 0;
    var actualScroll = 0;
    var oldScroll = 0;

    function httpRequest(number, limit) {
        let url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit + '&page=' + number + '&api_key=live_tVsqwwsPPdgBurscYsbyIYVW1bKzMti9drm9cKp2jmhirNd7El0BL8ykdzSZBPd0';
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            for (let i in data) {
                const img = document.createElement("img");
                img.setAttribute("src", String(data[i].url));
                img.setAttribute("width", "100%");
                document.body.appendChild(img);
            }
        }).catch((res) => {});
    }

    try{
        httpRequest(pageNumber, 10);
    } catch(e){
        alert("ERROR: 404! >:'3")
    }

    window.addEventListener('scroll', (event) => {
        actualScroll = $(window).scrollTop();

        if (actualScroll > oldScroll) {
            header.className = "hide-header";

        } else {
            header.className = "show-header";
        }

        oldScroll = actualScroll;

        if (($(window).scrollTop()) > ($(document).height() / 2)) {
            pageNumber++;
            httpRequest(pageNumber, 100);
        }
    });
}