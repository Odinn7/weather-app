import React from 'react';
import { Box, Card, Modal, Typography, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { ICities, ICitiesWeather, IWeather, IWeatherList } from "../redux/ICities";
import {
	cancelIconStyle,
	modalBoxStyle,
	moreInfoBoxStyle,
	moreInfoText,
	moreInfoTextStyle,
} from "../Styles";


interface MoreInfoProps {
	open: boolean,
	handleClose: () => void,
	city: ICities,
	weather: IWeather[]
}

export const MoreInfo = ({open, handleClose, city, weather}: MoreInfoProps) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box component="div" sx={modalBoxStyle}>
				<IconButton style={{
					display: "flex",
					position: "absolute",
					alignItems: "flex-start",
					right: 10,
					top: 10
				}}>
					<CancelIcon
						color="error"
						sx={cancelIconStyle}
						onClick={handleClose}
					/>
				</IconButton>
				<Typography
					sx={{mb: 3, fontFamily: "Montserrat"}}
					variant="h4"
					component="h2"
				>
					More Information
				</Typography>
				<Box>
					<Typography sx={moreInfoText}>Country: {city.sys.country}</Typography>
					<Typography sx={moreInfoText}>City: {city.name}</Typography>
					<Typography sx={moreInfoText}>
						Weather: {city.weather.map((item: ICitiesWeather) => item.main)}
					</Typography>
					<Typography sx={moreInfoText}>
						Temperature: {Math.floor(city.main.temp)}°C
					</Typography>
					<Typography sx={moreInfoText}>Feels like: {city.main.feels_like}°C</Typography>
					<Typography sx={moreInfoText}>
						Sunrise: {new Date(city.sys.sunrise * 1000).toLocaleString()}
					</Typography>
					<Typography sx={moreInfoText}>
						Sunset: {new Date(city.sys.sunset * 1000).toLocaleString()}
					</Typography>
					<Typography sx={moreInfoText}>Wind: {city.wind.speed} m/s</Typography>
					<Typography sx={moreInfoText}>Temperature per day:</Typography>
					{
						<Box sx={{display: 'flex'}}>
							{
								weather.map(
									(weatherItemContainer: IWeather) => weatherItemContainer
										.list.slice(0, 7)
										.map(
											(weatherItem: IWeatherList) =>
												<Card sx={moreInfoBoxStyle}>
													<Typography style={moreInfoTextStyle}>
														{(
															weatherItem.main.temp
														)}°C
													</Typography>
													<Typography style={moreInfoTextStyle}>
														<>
															{
																new Date(weatherItem.dt * 1000)
																	.toLocaleTimeString('ru-RU')
															}
														</>
													</Typography>
												</Card>
										))}
						</Box>
					}
				</Box>
			</Box>
		</Modal>
	)
};
