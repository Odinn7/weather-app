import React, { ChangeEvent, useCallback, useState } from "react";
import { AppBar, Box, Typography, Button, Toolbar } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from "../redux/hooks/hooks";
import { fetchingCities } from "../redux/asyncFunctions";
import { Search, StyledInputBase, SearchIconWrapper, appBarStyles } from "../Styles";


export const Header = () => {
	const [location, setLocation] = useState<string>('')
	const dispatch = useAppDispatch()
	
	const onClickAddCityHandler = () => {
		if (location) {
			dispatch(fetchingCities(location))
		} else {
			alert("Please enter the city")
		}
		setLocation('')
	}
	
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			if (location) {
				dispatch(fetchingCities(location))
			} else {
				alert("Please enter the city")
			}
			setLocation('')
		}
	}
	
	const onChangeInputValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setLocation(event.target.value)
	}, [])
	
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static" sx={appBarStyles}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1, display: {xs: 'none', sm: 'block'},
							fontFamily: "Montserrat"
						}}>
						Weather App
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon/>
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{'aria-label': 'search'}}
							value={location}
							onChange={onChangeInputValueHandler}
							onKeyDown={handleKeyDown}
						/>
					</Search>
					<Button
						sx={{ml: 3, height: 40, backgroundColor: "#22446e"}}
						onClick={onClickAddCityHandler}
						variant="contained"
					>
						Add New City
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

