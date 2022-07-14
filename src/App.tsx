import React from 'react';
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { CityCard } from "./components/CityCard";

import './App.css';
import { NewCityPopup } from "./components/Popup/NewCityPopup";

const App = () => {
	// const {} = useAppSelector(state => state.citiesReducer)
	return (
		<Box>
			<Header/>
			<CityCard/>
		</Box>
	);
}

export default App;