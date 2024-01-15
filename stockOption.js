async function quotes() {
    const url = 'https://real-time-quotes1.p.rapidapi.com/api/v1/symbol/stock?includeNames=false';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
		'X-RapidAPI-Host': 'real-time-quotes1.p.rapidapi.com'
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

quotes()