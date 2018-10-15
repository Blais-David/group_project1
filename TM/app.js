// For artist search
const runArtistSearch = function(e) {
  e.preventDefault();
  const input = $("#artist").val().trim();
//   const input2 = $("#userRadius").val();
//   const input3 = $("#userCityName").val();
  $("#artist").val("");
//   $("#userRadius").val("");
//   $("#userCityName").val("");
  getTM(input);
//   getImage(input);
};

//For Clearing data
const clearDiv = function(e) {
  e.preventDefault();
  $("#display").empty();
  $("#display2").empty();
  $("#htmlAName").empty();
  $("#artImage").empty();
  console.log("peanut");
};


$("#searchA").on("click", runArtistSearch);
$("#clear").on("click", clearDiv);
