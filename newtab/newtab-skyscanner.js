// curl --request POST 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create' --header 'x-api-key: sh428739766321522266746152871799' --data ' {"query":{"market":"UK","locale":"en-GB","currency":"GBP","query_legs":[{"origin_place_id":{"iata":"LHR"},"destination_place_id":{"iata":"SIN"},"date":{"year":2024,"month":12,"day":22}}],"adults":1,"cabin_class":"CABIN_CLASS_ECONOMY"}}'
// function test() {
//     async function test() {
//     const url = "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create";
//     const options = {
//       headers: {
//         Authorization: "sh428739766321522266746152871799"
//       },
//       data: {
//         "query":{"market":"UK","locale":"en-GB","currency":"GBP","query_legs":[{"origin_place_id":{"iata":"LHR"},"destination_place_id":{"iata":"SIN"},"date":{"year":2024,"month":12,"day":22}}],"adults":1,"cabin_class":"CABIN_CLASS_ECONOMY"}
//     //    query:{market:"UK",locale:"en-GB",currency:"GBP",query_legs:[{origin_place_id:{iata:"LHR"},destination_place_id:{iata:"SIN"},date:{year:2024,month:12,day:22}}],adults:1,cabin_class:"CABIN_CLASS_ECONOMY"}}
//       }
//     }

//     await fetch(url, options)
//       .then( res => res.json() )
//       .then( data => console.log(data) );
// }

async function test2() {

const url = 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create'
const option = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-api-key': 'sh428739766321522266746152871799',
//    'content-type': 'application/x-www-form-urlencoded'
  },
 body: query({
		locale: "en-GB",
		currency: 'en',
		text: "GBP",

	})
    }
    try {
        const response = await fetch(url,option);
        const result = await response.text();
        console.log("le try:", result);
    } catch (error) {
        console.log(error)
    }
}



// test()
test2()
