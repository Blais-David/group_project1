const getTMwLoc = function(artistName) {
  
  
    navigator.geolocation.getCurrentPosition(function(position){
      const lat = (position.coords.latitude);
      const long = (position.coords.longitude);
    
    const queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=MdV4MZfCLGKGQ2tYAK3tZAsVQk74dUcp&keyword=${artistName}&radius=100&latlong=${lat},${long}`
    
    $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {

      for (let i = 0; i < response._embedded.events.length; i++) {

          const display = $("#display-event2");
          const cardDiv = $("<div>").addClass("col-md-6");

          if (response._embedded.events[i].classifications[0].segment.name == "Music") {
              let eventsList = response._embedded.events[i].name;
              let eventDate = response._embedded.events[i].dates.start.localDate;
              let eventTime = response._embedded.events[i].dates.start.localTime;
              let eventURL = response._embedded.events[i].url;

              for (let j = 0; j < response._embedded.events[i]._embedded.venues.length; j++) {

                  let venueName = response._embedded.events[i]._embedded.venues[j].name;
                  let venueCity = response._embedded.events[i]._embedded.venues[j].city.name;

                  let venueCountry = response._embedded.events[i]._embedded.venues[j].country.name;
                  let venueAddress = response._embedded.events[i]._embedded.venues[j].address.line1;


                  if (response._embedded.events[i]._embedded.venues[j].country.countryCode == "US") {
                      let venueState = response._embedded.events[i]._embedded.venues[j].state.name;

                      cardDiv.html(`<div class="card event-card"><div class="card-header"><h6 class="card-title text-center"><strong>Event</strong></h6></div><div class="card-body"><p class="card-text text-justify">${eventsList}</p><p class="card-text text-justify"><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, <span class="state">${venueState}</span>, ${venueCountry}</p><p class="card-text d-flex bd-highlight text-justify event-date"><span class="flex-grow-1 bd-highlight">${eventDate}</span><span>${eventTime}<span></p><p class="card-text text-justify"><a href=${eventURL}>Link to Event</a></p></div></div>`);

                      display.append(cardDiv);


                  } else {

                      cardDiv.html(`<div class="card event-card"><div class="card-header"><h6 class="card-title text-center"><strong>Event</strong></h6></div><div class="card-body"><p class="card-text text-justify">${eventsList}</p><p class="card-text text-justify"><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, <span class="state"> ${venueCountry}</span></p><p class="card-text d-flex bd-highlight text-justify event-date"><span class="flex-grow-1 bd-highlight">${eventDate}</span><span>${eventTime}<span></p><p class="card-text text-justify"><a href=${eventURL}>Link to Event</a></p></div></div>`);

                      display.append(cardDiv);
                  }
              }


          } //else {
          //display.append('<p>No Result</p>');
          //}
      }
  });
});
    };