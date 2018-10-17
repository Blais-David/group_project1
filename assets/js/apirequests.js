// Last.FM ajax call -- designed to retrieve a biography of the artist as well as an image
const requestBio = function (userQuery) {
    const api_key = `2d3b9c4428453cbdd901c3f5715de047`;
    const correctionURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getCorrection&artist=${userQuery}&api_key=${api_key}&format=json`;
    console.log(correctionURL)
    
    // const targetURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${correctName}&api_key=${api_key}&format=json`;


    $.ajax({
        //url: `https://cors-anywhere.herokuapp.com/${targetURL}`,
        url: correctionURL,
        method: 'GET'
    }).then(function (call) {
        const correctName = call.corrections.correction.artist.name
        
        const targetURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${correctName}&api_key=${api_key}&format=json`;
        console.log(targetURL)

        $.ajax({
            url:targetURL,
            method: 'GET'
        }).then(function(response) {
        console.log(response)
        let bioParse = response.artist.bio.content;
        bioParse = bioParse.split(`\n`);
        let bioFinal = `${bioParse[0]}\n${bioParse[2]}`; 

        // Get Image URL for user's query
        // response.artist.image[] produces an array of varying sizes of images
        // index of 2 = large image
        let imageURL = '';
        
        for (let i = 0; i < response.artist.image.length; i++) {
            imageURL = response.artist.image[2]["#text"]; 
        }
        // create final HTML components
        const artistImage = $(`<img src="${imageURL}" class="card-img-left rounded mx-auto d-block" alt="artist picture">`);
        const bio = $(`<p class="card-text text-justify mt-4">${bioFinal}</p>`);

        //clear out the artist-meta card div
        $('#artist-meta').html("");

        //append them to the artist-meta div
        $('#artist-meta').append(artistImage);
        $('#artist-meta').append(bio);

        //set the title of the card to the artists name
        $('#artist-name').text(correctName);
        });

    });
};

// 6f693d5a7ed0563d6c255ae3ec916ca6