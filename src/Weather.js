
import React, { useState } from 'react';
import axios from 'axios';
import ThreeDots from './ThreeDots';

export default function Weather() {
	const [loaded, setLoaded] = useState(false);
	const [city, setCity] = useState(' ');
	let [message, setMessage] = useState('');

	function handleChange(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		let APIKey = '001bc651977f4b024af4d84282b0f02a';
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

		function showWeather(response) {
			setLoaded(true);

			if (response.data !== null || response.data !== undefined) {
				setLoaded(false);
				setMessage(
					<ul>
						<li>Temperature: {Math.round(response.data.main.temp)}°C</li>
						<li>Description: {response.data.weather[0].description}</li>
						<li>Humidity: {response.data.main.humidity}%</li>
						<li>Wind: {response.data.wind.speed}km/h</li>
						<li>
							<img
								src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
								alt='Weather Icon'
							/>
						</li>
					</ul>
				);
			} else {
				setMessage(<p>Please enter a valid city</p>);
			}
		}

		axios
			.get(url)
			.then(showWeather)
			.catch((error) => {
				setLoaded(false);
				setMessage('Please enter a valid city');
			});
	}

	return (
		<div>
			{loaded ? (
				<ThreeDots
					className='message'
					visible={true}
					height='80'
					width='80'
					color='black'
					radius='9'
					ariaLabel='three-dots-loading'
					wrapperStyle={{}}
					wrapperClass=''
				/>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<input
							className='input'
							onChange={handleChange}
							type='search'
							placeholder='Type a city...'
						/>
						<button className='btn'>Search</button>
					</form>
					<div className='message'>{message}</div>
				</>
			)}
		</div>
	);
}
