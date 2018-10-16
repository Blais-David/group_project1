//Show the result page

const showResult = function (e) {
    e.preventDefault();
    const input = $("#searchInputField").val().trim();
    getTM(input);
    getTMwLoc(input);
    requestBio(input);
    $(".home-page").addClass("hide");
    $(".result-page").removeClass("hide");
    $("#searchInputField").val("");
    console.log(input);
    getVideo(input);
    getTM(input);
}

const showHome = function () {
    $(".home-page").removeClass("hide");
    $(".result-page").addClass("hide");
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
$(".return").on("click", showHome);
