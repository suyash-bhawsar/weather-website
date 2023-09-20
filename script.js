const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityname.innerHTML = city
	/*try {
	   const response = await fetch(url, options);
	   const result = await response.text();
	   console.log(result);
   } catch (error) {
	   console.error(error);
   }/ */

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_tem.innerHTMLp = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degree.innerHTML = response.wind_degree
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunrise

		})
		.catch(err => console.error(err));
}
Submit.addEventlistener("click", (e) => {
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")

