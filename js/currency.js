async function currency(){
    const url = 'https://api.unsplash.com/search/photos?client_id=Mfk2AQJLf2duZ7Epwe8xOPvxrjylPjjQ3WhGnNBNj9A&query=snow';
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Mfk2AQJLf2duZ7Epwe8xOPvxrjylPjjQ3WhGnNBNj9A'
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

currency()