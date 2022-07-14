import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import axios from "axios";


export const CityCard = () => {
	const [gotData, setGotData] = useState<any>([])
	const [location, setLocation] = useState('')
	
	console.log(gotData, "city")
	console.log(location, "loc")
	
	const Fetch = () => {
			axios.get(
					 `http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=c230b726db7da00cfda51a9c0e8fedfe`)
				 .then((res: any) => setGotData(    [res.data]))
				 .catch(err => console.warn(err))
			setLocation('')
	}
	
	useEffect(() => {
			Fetch()
	}, [])
	
	return (
		<Card sx={{
			border: "2px solid #0C4F96", width: "250px", height: "250px", padding: "15px",
			margin: "15px", borderRadius: "15px"
		}} elevation={2}>
			<Typography sx={{fontFamily: "Montserrat"}}>
				{
					gotData.map((item: any) => <Typography key={item.name}>{item.name}</Typography>)
				}
			</Typography>
			<Typography sx={{fontFamily: "Montserrat"}}>
				{
					gotData.map((item: any) =>
						item.weather.map((tool: any) =>
							<Typography key={tool.main}>
								{tool.main}
							</Typography>))
				}</Typography>
			<Typography sx={{fontFamily: "Montserrat"}}>
				{
					gotData.map((item: any) =>
						<Typography>
							{
								Math.floor((
									item.main.temp - 32
								) * 5 / 9)}°C
						</Typography>)
				}
			</Typography>
			<ButtonGroup>
				<Button variant="contained" onClick={Fetch}>Update</Button>
				<Button variant="contained" >More</Button>
			</ButtonGroup>
		</Card>
	);
};
