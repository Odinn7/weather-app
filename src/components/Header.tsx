import React, { ChangeEvent, KeyboardEventHandler, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchingCities, fetchingForSixDays } from "../redux/asyncFunctions";
import { Search, StyledInputBase, toolbarStyles } from "../Styles";
import { SearchRounded } from "@mui/icons-material";
import { ICities } from "../redux/ICities";


export const Header = () => {
    const [location, setLocation] = useState<string>('')
    const dispatch = useAppDispatch()
    const {citiesArray: city} = useAppSelector(state => state.citiesSlice)

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
        <Box sx={ {flexGrow: 1} }>
            <AppBar position="static">
                <Toolbar sx={ toolbarStyles }>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ {
                            flexGrow: 1, display: {xs: 'none', sm: 'block'},
                            fontFamily: "Montserrat"
                        } }
                    >
                        Weather App
                    </Typography>
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={ {'aria-label': 'search'} }
                            value={ location }
                            onChange={ onChangeInputValueHandler }
                            onKeyDown={ handleKeyDown }
                        />
                        <SearchRounded sx={ {mr: 2} }/>
                    </Search>
                    <Button sx={ {ml: 3, height: 40} } onClick={ onClickAddCityHandler } variant="contained">
                        Add New City
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

