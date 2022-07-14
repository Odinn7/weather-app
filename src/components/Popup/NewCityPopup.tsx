import React from 'react';
import { Box, Button, Modal, TextField, Typography } from "@mui/material";


const style = {
	display: "flex",
	flexDirection: "column",
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

const btnStyle = {
	margin: "0 25px",
	padding: "15px 35px",
	width: "150px"
}

export const NewCityPopup = ({open, handleClose}: any) => {
	
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box component="div" sx={{width: "100%"}}>
					<Typography
						sx={{mb: 5}}
						variant="h4"
						component="h2"
					>
						Add new City
					</Typography>
					<TextField
						fullWidth
						variant="outlined"
						label="Search"
						placeholder="Search..."
						onChange={event => event.target.value}
					/>
				</Box>
				<Box component="div" sx={{display: "flex", justifyContent: "space-evenly"}}>
					<Button variant="contained"
							sx={btnStyle}
					>
						Add
					</Button>
					<Button variant="contained"
							sx={btnStyle}
							color="error"
							onClick={handleClose}
					>
						Close
					</Button>
				</Box>
			
			</Box>
		</Modal>
	);
};

