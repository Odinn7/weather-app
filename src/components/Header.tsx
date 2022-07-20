import React, { useCallback, useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchingCities } from "../redux/fetchingCtites";


const Search = styled('div')(({theme}) => (
	{
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}
));
const StyledInputBase = styled(InputBase)(({theme}) => (
	{
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}
));

export const Header = () => {
	const [location, setLocation] = useState('')
	const {citiesArray: city} = useAppSelector(state => state.citiesSlice)
	
	const dispatch = useAppDispatch()
	
	//	в локал сторедж не записывается по клику с первого раза, необходим второй клик
	
	const onClickAddCityHandler = () => {
		dispatch(fetchingCities(location))
		localStorage.setItem("cities", JSON.stringify(city))
		setLocation('')
		// тут же закидывать в локал сторедж после запроса (запрос лучше по клику)
	}
	const onChangeInputValueHandler = useCallback((e: any) => {
		setLocation(e.target.value)
	}, [])
	
	
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar sx={{
					display: "flex", justifyContent: "space-between", backgroundColor: "#0C4F96"
				}}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1, display: {xs: 'none', sm: 'block'},
							fontFamily: "Montserrat"
						}}
					>
						Weather App
					</Typography>
					<Search sx={{mr: 2, fontFamily: "Montserrat"}}>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{'aria-label': 'search'}}
							value={location}
							onChange={onChangeInputValueHandler}
						/>
					</Search>
					<Button onClick={onClickAddCityHandler} variant="contained">
						Add New City
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

