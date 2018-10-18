const requestDisco = function (userQuery) {
    const api_key = `2d3b9c4428453cbdd901c3f5715de047`;
    const targetAlbums = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${userQuery}&api_key=${api_key}&limit=10&format=json`;

    $.ajax({
        url: targetAlbums,
        method: 'GET'
    }).then(function (response) {
        const displayAlbums = $("#arist-albums .card-body");

        const albumArray = [];

        const imageArray = [];

        for (let i = 0; i < response.topalbums.album.length; i++) {
            albumArray.push(response.topalbums.album[i].url);
            imageArray.push(response.topalbums.album[i].image[2]["#text"]);
        }

        for (let j = 0; j < albumArray.length; j++) {
            let link = $(`<div class="card event-card"><div class="card-body"><p class="card-text text-justify"><a href="${albumArray[j]}"><img class="m-2 justify-content-center" id="coverArt" src="${imageArray[j]}"></a></p></div></div>`);

            $("#album-container").append(link);
        }
    });
}