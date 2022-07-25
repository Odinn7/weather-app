import React, { useState } from 'react';
import { Button, Box, Card, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { MoreInfo } from "./MoreInfo";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchingForSevenDays, fetchingForUpdateCity } from "../redux/asyncFunctions";
import { citiesSlice } from "../redux/CitiesSlice";
import { ICities, ICitiesWeather } from "../redux/ICities";
import {
	cancelIconStyle,
	cardBoxStyle,
	cardButtonStyle,
	cardsTextStyles,
	cardStyle
} from "../Styles";


interface CityCardProps {
	city: ICities,
}

export const CityCard = ({city}: CityCardProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const {citiesWeather: weather} = useAppSelector(state => state.citiesSlice)
	const location = city.name;
	
	const handleOpen = () => {
		dispatch(fetchingForSevenDays(location))
		dispatch(citiesSlice.actions.getSevenDaysWeather)
		setOpen(true);
	}
	
	const handleClose = () => {
		dispatch(citiesSlice.actions.deleteMoreInfo())
		setOpen(false);
	}
	
	const onCloseHandleClick = (id: number) => {
		dispatch(citiesSlice.actions.deleteCity(id))
		const citiesStorage = localStorage.getItem("cities")
		if (citiesStorage) {
			const parsedStorage = JSON.parse(citiesStorage)
			const filteredStorage = parsedStorage.filter(
				(storageItem: any) => storageItem.id !== id
			)
			localStorage.setItem("cities", JSON.stringify(filteredStorage))
		}
	}
	
	const onClickUpdateHandler = () => {
		dispatch(fetchingForUpdateCity(location))
	}
	
	return (
		<Card sx={cardStyle} elevation={2}>
			<Box sx={cardBoxStyle}>
				<Typography>
					<Typography sx={cardsTextStyles}>City: {city.name}</Typography>
					<Typography sx={cardsTextStyles}>
						Weather: {city.weather.map((item: ICitiesWeather) => item.main)}
					</Typography>
					<Typography sx={cardsTextStyles}>
						Temperature: {Math.floor(city.main.temp)}°C
					</Typography>
				</Typography>
				<CancelIcon
					color="error"
					sx={cancelIconStyle}
					onClick={() => onCloseHandleClick(city.id)}
				/>
			</Box>
			<Box sx={{display: "flex", justifyContent: "space-evenly"}}>
				<Button
					sx={cardButtonStyle}
					variant='contained'
					onClick={onClickUpdateHandler}
				>
					Update
				</Button>
				<Button
					sx={cardButtonStyle}
					variant="contained"
					onClick={handleOpen}
				>
					More
				</Button>
				<MoreInfo
					city={city}
					open={open}
					handleClose={handleClose}
					weather={weather}
				/>
			</Box>
		</Card>
	)
	
};

