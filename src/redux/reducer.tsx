import { ICities } from "./models/ICities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IUserState {
	cities: ICities[],
	isLoading: boolean,
	error: string
}

const initialState: IUserState = {
	cities: [],
	isLoading: false,
	error: ""
}

export const citiesSlice = createSlice({
	name: "city",
	initialState,
	reducers: {
		getCities(state, action: PayloadAction<any>) {
			state.cities =  action.payload
		}
	}
})

export default citiesSlice.reducer;