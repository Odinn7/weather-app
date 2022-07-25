import React, { useEffect } from 'react';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { storageSync } from "./redux/CitiesSlice";
import { useAppDispatch } from "./redux/hooks/hooks";

const App = () => {
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		try {
			const citiesStorage = localStorage.getItem('cities')
			if (citiesStorage) {
				const cities = JSON.parse(citiesStorage)
				dispatch(storageSync(cities))
			}
		} catch (error) {
			console.warn(error, "error")
		}
	}, [])
	
	return (
		<Box>
			<Header/>
			<Routes>
                <Route path={'/'} element={<Main/>}/>
			</Routes>
		</Box>
	);
}

export default App;