// const getVideos = function (artistSearch) {

//     const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&q=official+artist+${artistSearch}+music+video&key=AIzaSyBDHgNrXt8uep7b275-JyfCa7gPVgYSJ3Y&part=snippet,contentDetails,statistics,status`;

//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function (response) {

//         const videos = response.items;

//         console.log(videos);

//         //The path to a specific video ID.
//         for (let i = 0; i < videos.length; i++) {
//             const videoIdent = videos[i].id.videoId;
//             console.log(videoIdent);
//             console.log(videoTitle);

//             const youTubePlayer = $(`<iframe width="480" height="270" src="https://www.youtube.com/embed/${videoIdent}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
//             $('#player').append(youTubePlayer);

//         }
//     });

// }