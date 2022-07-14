import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NewCityPopup } from "../Popup/NewCityPopup";


export const Header = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar sx={{
					display: "flex", justifyContent: "space-between", backgroundColor: "#0C4F96"
				}}>
					<Typography component="div" sx={{fontFamily: "Montserrat"}} variant="h4">
						Weather website
					</Typography>
					<Button onClick={handleOpen} variant="contained">New City</Button>
					<NewCityPopup open={open} handleClose={handleClose}/>
				</Toolbar>
			
			</AppBar>
		</Box>
	);
};