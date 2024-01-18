// // Copyright 2022 Google LLC

// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at

// //     https://www.apache.org/licenses/LICENSE-2.0

// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

// // 'use strict';

// const newPerms = {
//   permissions: ['topSites']
// };

// const sites_div = document.getElementById('display_top');
// const todo = document.getElementById('display_todo');
// const form = document.querySelector('form');
// const footer = document.querySelector('footer');

// const createTop = () => {
//   chrome.topSites.get((topSites) => {
//     topSites.forEach((site) => {
//       const div = document.createElement('div');
//       div.className = 'colorFun';
//       const tooltip = document.createElement('span');
//       tooltip.innerText = site.title;
//       tooltip.className = 'tooltip';
//       const url = document.createElement('a');
//       url.href = site.url;
//       const hostname = new URL(site.url).hostname;
//       const image = document.createElement('img');
//       image.title = site.title;
//       image.src = 'https://logo.clearbit.com/' + hostname;
//       url.appendChild(image);
//       div.appendChild(url);
//       div.appendChild(tooltip);
//       sites_div.appendChild(div);
//     });
//   });
// };

// chrome.permissions.contains({ permissions: ['topSites'] }).then((result) => {
//   if (result) {
//     // The extension has the permissions.
//     createTop();
//   } else {
//     // The extension doesn't have the permissions.
//     const button = document.createElement('button');
//     button.innerText = 'Allow Extension to Access Top Sites';
//     button.addEventListener('click', () => {
//       chrome.permissions.request(newPerms).then((granted) => {
//         if (granted) {
//           console.log('granted');
//           sites_div.innerText = '';
//           createTop();
//         } else {
//           console.log('not granted');
//         }
//       });
//     });
//     footer.appendChild(button);
//   }
// });

// form.addEventListener('submit', () => {
//   const todo_value = document.getElementById('todo_value');
//   chrome.storage.sync.set({ todo: todo_value.value });
// });

// function setToDo() {
//   chrome.storage.sync.get(['todo']).then((value) => {
//     if (!value.todo) {
//       todo.innerText = '';
//     } else {
//       todo.innerText = value.todo;
//     }
//   });
// }

// setToDo();

// async function translate() {
//     const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
// 		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		from: 'auto',
// 		to: 'fr',
// 		text: 'xin chào'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// translate()


//geolocalisation

    // let options = {
    //     enableHighAccuracy: true,
    //     timeout: 10000,
    //     maximumAge: 0,
    //   };
      
    //   function geo(pos) {
    //     let crd = pos.coords;
    
    //     let lat = crd.latitude;
    //     let long = crd.longitude ;
    
    //     let coordonnees = `${lat}/${long}`
    // return coordonnees
    //   }
      
    //   function error(err) {
    //     console.warn(`ERREUR (${err.code}): ${err.message}`);
    //   }
      
    //  let latlong = navigator.geolocation.getCurrentPosition(geo, error, options);
    //  console.log(latlong)
    let optionsGeoLoc = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
      
      function obtenirCoordonnees(successCallback, errorCallback, options) {
        function geo(pos) {
          let crd = pos.coords;
          let lat = crd.latitude;
          let long = crd.longitude;

          successCallback(lat, long);
        }
      
        function error(err) {
          console.warn(`ERREUR (${err.code}): ${err.message}`);
          errorCallback(err);
        }
      
        navigator.geolocation.getCurrentPosition(geo, error, options);
      }
      

      async function weather(lat,long) {
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
            const result = await response.json();
            let keyWord =  result.weather[0].main
            return keyWord
        } catch (error) {
            console.error(error);
        }
        }

        let optionsUnsplash = {
            method: 'GET',
          };
          
          async function unsplash(keyWord) {
            let url = `https://api.unsplash.com/search/photos?client_id=Mfk2AQJLf2duZ7Epwe8xOPvxrjylPjjQ3WhGnNBNj9A&query=${keyWord}`;
            try {
              const response = await fetch(url, optionsUnsplash);
              const data = await response.json();
              console.log(data.results[0].urls.raw);
              document.body.style.backgroundImage = `url(${data.results[0].urls.raw})`;
              document.body.style.backgroundSize = 'cover';
            } catch (error) {
              console.log(error);
            }
          }

      
      // Appeler la fonction et utiliser le callback pour afficher les coordonnées
      obtenirCoordonnees(
        function(lat, long) {
            weather(lat, long).then((keyWord) => {
              // Utiliser keyWord ou effectuer d'autres opérations ici
              unsplash(keyWord);
            });
          },
          function(error) {
            console.error(error);
          },
          optionsGeoLoc
        );
    
// weather



    

    
    weather()
    







// photo unsplash
// let keyWord = 'snow';
// let url = `https://api.unsplash.com/search/photos?client_id=Mfk2AQJLf2duZ7Epwe8xOPvxrjylPjjQ3WhGnNBNj9A&query=${keyWord}`
// let option = {
//     method:'GET'
// }
// async function unsplash(){
// await fetch(url, option)
// .then((response) =>  response.json())
// .then((data) => {
//     console.log(data.results[0].urls.raw)
//     document.body.style.backgroundImage = `url(${data.results[0].urls.raw})`;
//     document.body.style.backgroundSize = "cover";

    
// })
// .catch((error) => console.log(error));
// }
// unsplash()