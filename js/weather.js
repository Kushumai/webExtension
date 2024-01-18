async function weather() {
const url = 'https://open-weather13.p.rapidapi.com/city/latlon/48.8566/2.3522';
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

weather()

// faire conversion du résultat des températures