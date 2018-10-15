const video = $(this).attr('video-player')
const queryURL = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBDHgNrXt8uep7b275-JyfCa7gPVgYSJ3Y`

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {

    const youtubeDiv = $('<div>').addClass('video-player');

    const 
}