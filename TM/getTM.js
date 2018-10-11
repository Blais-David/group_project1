const getTM = function(artistName) {
  const queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=MdV4MZfCLGKGQ2tYAK3tZAsVQk74dUcp&keyword=${artistName}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    let eventsList = response._embedded.events[1].name;
    const header1 = $("#htmlAName");
    const newh1 = $("<h1>");

    newh1.text(`${eventsList}`);
    header1.append(newh1);


    for (let i = 0; i < response._embedded.events.length; i++) {
      
      console.log(response);
    //   console.log(response._embedded.events[i].dates.start.localDate);
      
      let eventDate = response._embedded.events[i].dates.start.localDate;
      let eventURL = response._embedded.events[i].url;

      const display = $("#display");
      const newDiv = $("<div>");

      newDiv.html(`<p><em>${eventDate}</em></p>`);

      display.append(newDiv);

      for (let j = 0; j < response._embedded.events[i]._embedded.venues.length; j++) {
        
        // console.log(response._embedded.events[i]._embedded.venues)
        // console.log(response._embedded.events[i]._embedded.venues[j].name, response._embedded.events[i]._embedded.venues[j].city.name, response._embedded.events[i]._embedded.venues[j].state.name);
        let venueName = response._embedded.events[i]._embedded.venues[j].name;
        let venueCity = response._embedded.events[i]._embedded.venues[j].city.name;
        
        let venueCountry = response._embedded.events[i]._embedded.venues[j].country.name;
        let venueAddress = response._embedded.events[i]._embedded.venues[j].address.line1;

        const display = $('#display');
        const newDiv = $('<div>');

        
        if (response._embedded.events[i]._embedded.venues[j].country.countryCode == 'US'){
        let venueState = response._embedded.events[i]._embedded.venues[j].state.name;
        newDiv.html(`<p><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, ${venueState}, ${venueCountry}</p> <p><a href=${eventURL}>Link to Event</a></p>`);
  
        display.append(newDiv);
        
      }else{
        newDiv.html(`<p><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, ${venueCountry}</p> <p><a href=${eventURL}>Link to Event</a></p>`);
  
        display.append(newDiv);

        console.log("hey");
        
      }
        }
  
    }

  });
};

// _embedded.events[1]._embedded.venues[0].city
// _embedded.events[0].url
// _embedded.events[0]._embedded.venues
// _embedded.events[3].dates.start.localDate
// _embedded.venues[0].state
// _embedded.venues[0].city
// _embedded.venues[0].country
