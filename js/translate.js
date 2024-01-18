async function translate() {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
	},
	body: new URLSearchParams({
		from: 'auto',
		to: 'fr',
		text: 'xin chào'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

translate()