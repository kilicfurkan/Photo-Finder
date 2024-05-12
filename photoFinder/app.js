document.querySelector(".searchButton").addEventListener("click", search);
document.querySelector(".cleanButton").addEventListener("click", clean);

function search() {
    const searchInfo = document.querySelector(".searchInput").value;

    fetch(`https://api.unsplash.com/search/photos?query=${searchInfo}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID ZS9WEhPOTukk5O2riyWCDTBin9mUUpsPVv2rVirb-dA"
        }
    })
        .then(res => res.json())
        .then((data) => {
            data.results.forEach(e => {
                const photos = document.querySelector(".photos");
                let newImage = document.createElement("img");
                newImage.src = e.urls.small;
                newImage.className = "resultPhoto";

                photos.appendChild(newImage);
            });
        })
        .catch(err => console.log(err));
}

function clean() {
    let photos = document.querySelectorAll(".resultPhoto");
    photos.forEach(e => {
        e.remove();
    })
    document.querySelector(".searchInput").value = "";
}