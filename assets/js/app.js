//Show the result page


const showResult = function (e) {
    e.preventDefault();
    const input = $("#searchInputField").val().trim();
    Promise.all([getTM(input), getTMwLoc(input), requestBio(input), getVideo(input)]).then(function () {
        $(".home-page").hide();
        $(".result-page").show();
        // $(".home-page").addClass("hide");
        // $(".result-page").removeClass("hide");
    });

    $("#searchInputField").val("");
    $("#display-event").empty();
    $("#display-event2").empty();
    $("#display-videos").empty();
}

const showHome = function () {
    $(".result-page").hide();
    $(".home-page").show();
}


$("#checkbox1").click(function() {
    const showLocal = document.getElementById("display-event2")
    const showAll = document.getElementById("display-event")

    if($(this).is(":checked")) {
        showLocal.style.display = "flex";
        showAll.style.display = "none";
    } else {
        showLocal.style.display = "none";
        showAll.style.display = "flex";
    }
});

//Event listener for the single page application

$("#search-btn").on("click", showResult);
$("#newSearch").on("click", showHome);
