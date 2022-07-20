import { AppDispatch } from "./store";
import axios from "axios";
import { citiesSlice } from "./CitiesSlice";


export const fetchingCities = (location: string) => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c230b726db7da00cfda51a9c0e8fedfe`)
		dispatch(citiesSlice.actions.newCityFetching(response.data))
		console.log(response)
	} catch {
		console.warn("Fetching error")
	}
}