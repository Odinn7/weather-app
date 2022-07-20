import React from 'react';
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";


const style = {
	display: "flex",
	justifyContent: "space-between",
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	height: 500,
	backgroundColor: 'background.paper',
	border: '2px solid #0C4F96',
	boxShadow: "0 5px 20px 3px #0C4F96",
	p: 4,
};

export const MoreInfo = ({open, handleClose, city}: any) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<div style={{
					display: "flex",
					position: "absolute",
					alignItems: "flex-start",
					right: 10,
					top: 10
				}}>
					<CancelIcon
						color="error"
						sx={{width: "25px", height: "25px", cursor: "pointer"}}
						onClick={handleClose}
					/>
				
				</div>
				<Box component="div" sx={{width: "100%"}}>
					<Typography
						sx={{mb: 5, fontFamily: "Montserrat"}}
						variant="h4"
						component="h2"
					>
						More Information
					</Typography>
					<Typography sx={{fontSize: 25, fontFamily: "Montserrat"}}>
						<div>Country: {city.sys.country}</div>
						<div> City: {city.name}</div>
						<div>Weather: {city.weather.map((item: any) => item.main)}</div>
						<div>Temperature: {Math.floor(city.main.temp)}°C</div>
						<div>Feels like: {city.main.feels_like}°C</div>
						<div>Sunrise: {new Date(city.sys.sunrise * 1000).toLocaleString()}</div>
						<div>Sunset: {new Date(city.sys.sunset * 1000).toLocaleString()}</div>
						<div>Wind: {city.wind.speed} m/s</div>
					</Typography>
				</Box>
			</Box>
		</Modal>
	)
		;
};
