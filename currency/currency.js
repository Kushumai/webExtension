async function currency(){
    const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries?start_date=2024-01-15&end_date=2024-01-12&from=USD&to=EUR%2CGBP';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a834e8de7msh7bfc5012c1a4ab2p17dd94jsn60a208c258f8',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
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