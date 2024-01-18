
let keyWord = 'snow';
let url = `https://api.unsplash.com/search/photos?client_id=Mfk2AQJLf2duZ7Epwe8xOPvxrjylPjjQ3WhGnNBNj9A&query=${keyWord}`
let option = {
    method:'GET'
}
async function unsplash(){
await fetch(url, option)
.then((response) =>  response.json())
.then((data) => {
    console.log('tralala',data)
})
.catch((error) => console.log(error));
}
unsplash()

console.log('toto')