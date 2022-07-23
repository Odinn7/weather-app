import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { MoreInfo } from "./MoreInfo";
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchingCities, fetchingForSixDays } from "../redux/asyncFunctions";
import { citiesSlice } from "../redux/CitiesSlice";


export const CityCard = ({city}: any) => {
	const [open, setOpen] = useState(false);
	const dispatch = useAppDispatch();

	console.log(city.id, "id id id id idid i")
	
	const {citiesWeather: weather} = useAppSelector(state => state.citiesSlice)
	console.log(weather, "cities Weather")
	const location = city.name;
	
	
	const handleOpen = () => {
		dispatch(fetchingForSixDays(location))
		dispatch(citiesSlice.actions.getFiveDaysWeather)
		setOpen(true);
	}
	const handleClose = () => {
		dispatch(citiesSlice.actions.deleteMoreInfo)
		setOpen(false);
	}
	
	const onCloseHandleClick = (id :number) => {
		dispatch(citiesSlice.actions.deleteCity(id))
		localStorage.removeItem("cities")
	}
	
	const onClickUpdateHandler = (location: any) => {
		dispatch(fetchingCities(location))
		
	}
	
	return (
		<Card sx={{
			display: "flex", flexDirection: "Column",
			justifyContent: "space-between",
			border: "2px solid #0C4F96", width: "250px", height: "250px", padding: "15px",
			margin: "15px", borderRadius: "15px"
		}} elevation={2}>
			<div style={{
				display: "flex",
				justifyContent: "space-between",
			}}>
				<Typography sx={{
					fontFamily: "Montserrat", display: "flex", flexDirection: "column"
				}}>
					<div> City: {city.name}</div>
					<div>Weather: {city.weather.map((item: any) => item.main)}</div>
					<div>Temperature: {Math.floor(city.main.temp)}°C</div>
				</Typography>
				<CancelIcon
					color="error"
					sx={{width: "25px", height: "25px", cursor: "pointer"}}
					onClick={() =>onCloseHandleClick(city.id)}
				/>
			</div>
			<ButtonGroup sx={{display: "flex", justifyContent: "space-evenly"}}>
				<Button variant="contained"
						onClick={onClickUpdateHandler}>Update</Button>
				<Button variant="contained" onClick={handleOpen}>More</Button>
				<MoreInfo
					city={city}
					open={open}
					handleClose={handleClose}
					weather={weather}
				/>
			</ButtonGroup>
		</Card>
	)
	
};

