// For artist search
const runArtistSearch = function(e) {
  e.preventDefault();
  const input = $("#artist").val().trim();
  $("#artist").val("");
  getTM(input);
};

//For Clearing data
const clearDiv = function(e) {
  e.preventDefault();
  $("#display").empty();
  $("#display2").empty();
  $("#htmlAName").empty();
  console.log("peanut");
};


$("#searchA").on("click", runArtistSearch);
$("#clear").on("click", clearDiv);
