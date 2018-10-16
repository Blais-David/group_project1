const getTMwLoc = function(artistName) {
  
  
    navigator.geolocation.getCurrentPosition(function(position){
      const lat = (position.coords.latitude);
      const long = (position.coords.longitude);
      console.log(lat, long)
    
    const queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=MdV4MZfCLGKGQ2tYAK3tZAsVQk74dUcp&keyword=${artistName}&radius=100&latlong=${lat},${long}`
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      const display2 = $("#display2")
      const newDiv2 = $("<div>");
      
  
      for (let i = 0; i < response._embedded.events.length; i++) {
        const display = $("#display");
          const newDiv = $("<div>");
  
          if (response._embedded.events[i].classifications[0].segment.name == "Music"){
        
          let eventsList = response._embedded.events[i].name;
          let eventDate = response._embedded.events[i].dates.start.localDate;
          let eventURL = response._embedded.events[i].url;
              
  
          newDiv.html(`<h1>${eventsList}</h1><p><em>${eventDate}</em></p>`);
  
          display.append(newDiv);
  
          for (let j = 0; j < response._embedded.events[i]._embedded.venues.length; j++) {
            
            let venueName = response._embedded.events[i]._embedded.venues[j].name;
            let venueCity = response._embedded.events[i]._embedded.venues[j].city.name;
  
            let venueCountry = response._embedded.events[i]._embedded.venues[j].country.name;
            let venueAddress = response._embedded.events[i]._embedded.venues[j].address.line1;
  
            const display = $("#display");
            const newDiv = $("<div>");
  
            if ( response._embedded.events[i]._embedded.venues[j].country.countryCode == "US") {
              let venueState = response._embedded.events[i]._embedded.venues[j].state.name;
              newDiv.html(`<p><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, ${venueState}, ${venueCountry}</p> <p><a href=${eventURL}>Link to Event</a></p>`);
  
              display.append(newDiv);
            } else {
              newDiv.html(`<p><strong>${venueName}</strong> at ${venueAddress} ${venueCity}, ${venueCountry}</p> <p><a href=${eventURL}>Link to Event</a></p>`);
  
              display.append(newDiv);
            }
          }
        
      
      }else{
          newDiv2.html(`<p>No Results</p>`);
              display2.append(newDiv2);
          }
        }
      });
    })
  };