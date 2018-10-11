// For artist search
const runArtistSearch = function(e) {
  e.preventDefault();
  const input = $("#artist").val().trim();
  $("#artist").val("");
  getTM(input);
};

// For location search
const runLocationSearch = function(e) {
  e.preventDefault();
  const input2 = $("#userRadius").val();
  const input3 = $("#userCityName").val();
  $("userRadius","#userCityName").val("");
  getTMloc(input2, input3);
  console.log(input2, input3)
};


//For Clearing data
const clearDiv = function(e) {
  e.preventDefault();
  $("#display").empty();
  $("#htmlAName").empty();
  console.log("peanut");
};

$("#searchNY").on("click", runLocationSearch);
$("#searchA").on("click", runArtistSearch);
$("#clear").on("click", clearDiv);
