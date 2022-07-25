import { AppDispatch } from "./store";
import { getSevenDaysWeather, newCityFetching } from "./CitiesSlice";
import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5'
const endPoint = '&units=metric&appid=c230b726db7da00cfda51a9c0e8fedfe'

export const fetchingCities = (location: string) => async (dispatch: AppDispatch) => {
	try {
		const {data} = await axios.get(
			`${baseUrl}/weather?q=${location}${endPoint}`
		)
		const citiesStorage = localStorage.getItem("cities")
		if (citiesStorage && citiesStorage.length) {
			const parsedStorage = JSON.parse(citiesStorage)
			localStorage.setItem("cities", JSON.stringify([...parsedStorage, data]))
		} else {
			localStorage.setItem("cities", JSON.stringify([data]))
		}
		dispatch(newCityFetching(data))
		
	} catch {
		console.warn("Fetching error")
	}
}

export const fetchingForUpdateCity = (location: string) => async () => {
	await axios.get(
		`${baseUrl}/weather?q=${location}${endPoint}`
	)
}

export const fetchingForSevenDays = (location: string) => async (dispatch: AppDispatch) => {
	try {
		const {data: weatherData} = await axios.get(
			`${baseUrl}/forecast?q=${location}${endPoint}`
		)
		dispatch(getSevenDaysWeather(weatherData))
	} catch (e) {
		console.warn(e, "Error")
	}
}