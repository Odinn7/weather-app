import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICities, IWeather } from "./ICities";


interface CityState {
	citiesArray: ICities[],
	citiesWeather: IWeather[]
}

const initialState: CityState = {
	citiesArray: [],
	citiesWeather: []
}

export const citiesSlice = createSlice({
	name: "cities",
	initialState,
	reducers: {
		newCityFetching(state, action) {
			state.citiesArray.push(action.payload)
		},
		getFiveDaysWeather(state, action) {
			state.citiesWeather.push(action.payload)
		},
		deleteMoreInfo (state) {
			state.citiesWeather.length = 0
		},
		deleteCity(state, action: PayloadAction<number>) {
			state.citiesArray = state.citiesArray.filter(
				(city: any) => city.id !== action.payload
			)
		}
	},
})

export default citiesSlice.reducer
