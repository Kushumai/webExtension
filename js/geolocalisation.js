//geolocalisation

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function geo(pos) {
    let crd = pos.coords;

    lat = crd.latitude;
    long = crd.longitude ;

    console.log(lat)

  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  latlong = navigator.geolocation.getCurrentPosition(geo, error, options);
    console.log(latlong)
  
  
  // weather
  
  
  async function weather(lat, long) {
    const url = `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${long}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    }
    
   // weather()

   