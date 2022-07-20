import { createSlice } from "@reduxjs/toolkit";
import { ICities } from "./ICities";


interface CityState {
	citiesArray: ICities[]
}

const initialState: CityState = {
	citiesArray: []
}

export const citiesSlice = createSlice({
	name: "cities",
	initialState,
	reducers: {
		newCityFetching(state, action) {
			state.citiesArray.push(action.payload)
		},
		deleteCity(state, action) {
			state.citiesArray.filter(action.payload)
		}
	},
})

export default citiesSlice.reducer
