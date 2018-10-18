const showResult = function (e) {
    e.preventDefault();
    const input = $("#searchInputField").val().trim();
    Promise.all([getTM(input), getTMwLoc(input), requestBio(input), getVideo(input), requestDisco(input)]).then(function () {
        $(".home-page").addClass("hide");
        $(".result-page").removeClass("hide");
    });

    $("#searchInputField").val("");
    $("#display-event").empty();
    $("#album-container").empty();
    $("#display-event2").empty();
    $("#display-videos").empty();
}

const showHome = function () {
    $(".result-page").addClass("hide");
    $(".home-page").removeClass("hide");
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
$("#btnSearch").on("click", showHome);
$("#btnSearch2").on("click", showHome);

