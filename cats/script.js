window.onload = () => {
    var pageNumber = 0;

    function httpRequest(number, limit){
        let url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit + '&page=' + number + '&api_key=live_tVsqwwsPPdgBurscYsbyIYVW1bKzMti9drm9cKp2jmhirNd7El0BL8ykdzSZBPd0';
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            for(let i in data){
            const img = document.createElement("img");
            img.setAttribute("src", String(data[i].url));
            img.setAttribute("width", "100%");
            document.body.appendChild(img);
        }}).catch((res) => {});
    }

    httpRequest(pageNumber, 10);

    window.addEventListener('scroll', (event) => {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            pageNumber++;
            httpRequest(pageNumber, 100);
        }
    });                
}