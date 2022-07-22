import { AppDispatch } from "./store";
import { citiesSlice } from "./CitiesSlice";
import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5'
const ApiKey = 'c230b726db7da00cfda51a9c0e8fedfe'

export const fetchingCities = (location: string) => async (dispatch: AppDispatch) => {
	try {
		const { data } = await axios.get(
			`${baseUrl}/weather?q=${location}&units=metric&appid=${ApiKey}`
		)
		dispatch(citiesSlice.actions.newCityFetching(data))
		console.log(data, "fetched data")
	} catch {
		console.warn("Fetching error")
	}
}

export const fetchingForSixDays = (location: string) => async (dispatch: AppDispatch) => {
	try {
		const {data: weatherData} = await axios.get(
			`${baseUrl}/forecast?q=${location}&units=metric&appid=${ApiKey}`
		)
		dispatch(citiesSlice.actions.getFiveDaysWeather(weatherData))
		console.log(weatherData, "five days")
	} catch (e) {
		console.warn(e, "Error")
	}
}