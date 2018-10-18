// Last.FM ajax call -- designed to retrieve a biography of the artist as well as an image
const requestBio = function (userQuery) {
    const api_key = `2d3b9c4428453cbdd901c3f5715de047`;
    const targetURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userQuery}&autocorrect=1&api_key=${api_key}&format=json`;

    $.ajax({
        //url: `https://cors-anywhere.herokuapp.com/${targetURL}`,
        url: targetURL,
        method: 'GET'
    }).then(function (response) {
         
        let bioParse = response.artist.bio.content;
        let bioFinal=  bioParse.slice(0, 1000);
        
        // Get Image URL for user's query
        // response.artist.image[] produces an array of varying sizes of images
        // index of 2 = large image
        let imageURL = '';
        
        for (let i = 0; i < response.artist.image.length; i++) {
            imageURL = response.artist.image[5]["#text"]; 
        }
        // Create a link for users to read the rest of the bio
        let bioUrl = response.artist.bio.links.link.href;
        // create final HTML components
        const artistImage = $(`<img src="${imageURL}" class="card-img-left rounded d-block float-left mt-3 mr-4 mb-2" alt="artist picture">`);
        const bio = $(`<p class="card-text text-justify mt-3">${bioFinal}<a href=${bioUrl}>...Read more</a></p><i><small><p style="color:gray; float:right; margin-bottom:10px">-Last.fm™</i></small></p>`);

        //clear out the artist-meta card div
        $('#artist-meta').html("");

        //append them to the artist-meta div
        $('#artist-meta').append(artistImage);
        $('#artist-meta').append(bio);

        //set the title of the card to the artists name
        $('#artist-name').text(response.artist.name);
    });
};