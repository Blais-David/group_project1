const getVideo = function (artist) {

    const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&q=official+artist+${artist}+music+video&key=AIzaSyBDHgNrXt8uep7b275-JyfCa7gPVgYSJ3Y&part=snippet,contentDetails,statistics,status`;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        const displayVideos = $("#display-videos");
        // const videosDiv = $("<div>").addClass("col-md-4");
        let videos = response.items;

        //The path to a specific video ID.
        for (let i = 0; i < videos.length; i++) {
            let videoIdent = videos[i].id.videoId;
            const videoTitle = videos[i].snippet.title;

            if (videoTitle === `${artist} - `); {
                displayVideos.append(`<div class="col-md-6 mb-4"><div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" width="426" height="240" src="https://www.youtube.com/embed/${videoIdent}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>`);
            
            }


            // displayVideos.append(videosDiv);

            // const youTubePlayer = $(`<iframe width="426" height="240" src="https://www.youtube.com/embed/${videoIdent}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            // $('#player').append(youTubePlayer);

        }
    });

}
