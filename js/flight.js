async function test2() {

const url = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/monthly?destination=JFK&origin=CDG&length=3&currency=EUR'
const option = {
  method: 'GET',
  headers: {
    'X-Access-Token':'86f719fe8812663020c5943980994835',
    'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
    'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
  }
}
try {
    const response = await fetch(url,option);
    const result = await response.text();
    console.log("le try:", result);
} catch (error) {
    console.log( "le catch:",error)
}
}

test2()