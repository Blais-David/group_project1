//Show the result page

const showResult = function (e) {
    e.preventDefault();
    const input = $("#searchInputField").val().trim();
    getTM(input);
    requestBio(input);
    $(".home-page").addClass("hide");
    $(".result-page").removeClass("hide");
    $("#searchInputField").val("");
/*     console.log(input); */
}

const showHome = function () {
    $(".home-page").removeClass("hide");
    $(".result-page").addClass("hide");
}
//Event listener for the single page application

$("#search-btn").on("click", showResult);
$(".return").on("click", showHome);