export interface ICities {
	id: number,
	name: string,
	weather: [
		{
			main: string,
			description: string
		}
	],
	main: {
		temp: number,
		feels_like: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		humidity: number,
	},
	sys: {
		country: string,
		sunrise: number,
		sunset: number
	},
	wind: {
		speed: number,
		deg: number
	},
	
}

export interface IWeather {
	list: [
		{
			"dt": number,
			"main": {
				"temp": number,
				"feels_like": number,
				"temp_min": number,
				"temp_max": number,
				"pressure": number,
				"sea_level": number,
				"grnd_level": number,
				"humidity": number,
				"temp_kf": number
			}
		}
	]
}