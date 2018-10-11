const render = function (countryCode, avg){
    const display = $("#display");
    const newDiv = $("<div>").addClass("box");

    newDiv.text(`${countryCode}: ${avg}`);
    
    // if (avg > 40) {
    //     newDiv.addClass("red")   ;
    // } else if (avg > 20) {
    //     newDiv.addClass("purple");
    // } else {
    //     newDiv.addClass("blue");
    // }
    
    display.append(newDiv);

    
}