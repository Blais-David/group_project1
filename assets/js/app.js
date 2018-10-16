//Show the result page

const showResult = function (e) {
    e.preventDefault();
    $(".home-page").addClass("hide");
    $(".result-page").removeClass("hide");
    const input = $("#searchInputField").val().trim();
    $("#searchInputField").val("");
    console.log(input);
    getVideos(input);
    getTM(input);
}

const showHome = function () {
    $(".home-page").removeClass("hide");
    $(".result-page").addClass("hide");
}
//Event listener for the single page application

$("#search-btn").on("click", showResult);
$(".return").on("click", showHome);