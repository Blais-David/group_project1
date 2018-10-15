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

<<<<<<< HEAD
=======
// // For location search
// const runLocationSearch = function(e) {
//   e.preventDefault();
//   const input2 = $("#userRadius").val();
//   const input3 = $("#userCityName").val();
//   $("userRadius","#userCityName").val("");
//   getTMloc(input2, input3);
//   console.log(input2, input3)
// };


>>>>>>> 6c60d78bc78258a58fe1b66fb4ad3225ac5b2e76
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
