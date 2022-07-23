import React, { useEffect, useState } from 'react';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Box } from "@mui/material";
import { citiesSlice } from "./redux/CitiesSlice";
import { useAppDispatch } from "./redux/hooks/hooks";

import './App.css';

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        try {
            const citiesStorage = localStorage.getItem('cities')
            if(citiesStorage) {
                const cities = JSON.parse(citiesStorage)
                dispatch(citiesSlice.actions.storageSync(cities))
            }
        } catch (error) {
            console.warn(error, "error")
        }
    }, [])

    return (
        <Box>
            <Header/>
            <Main/>
        </Box>
    );
}

export default App;