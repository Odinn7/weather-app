import React, { useCallback, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { MoreInfo } from "./MoreInfo";
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { citiesSlice } from "../redux/CitiesSlice";

export const CityCard = ({city}: any) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const dispatch = useAppDispatch();
	
	const onCloseHandleClick = () => {
		dispatch(citiesSlice.actions.deleteCity)
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
						<div> City: { city.name }</div>
						<div>Weather: {city.weather.map((item: any) => item.main)}</div>
						<div>Temperature: {Math.floor(city.main.temp)}°C</div>
					</Typography>
					<CancelIcon
						color="error"
						sx={{width: "25px", height: "25px", cursor: "pointer"}}
						onClick={onCloseHandleClick}
					/>
				</div>
				<ButtonGroup sx={{display: "flex", justifyContent: "space-evenly"}}>
					<Button variant="contained"
							onClick={() => console.log('click update')}>Update</Button>
					<Button variant="contained" onClick={handleOpen}>More</Button>
					<MoreInfo
						city={city}
						open={open}
						handleClose={handleClose}
					/>
				</ButtonGroup>
			</Card>
	)
	
};

