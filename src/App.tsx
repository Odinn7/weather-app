import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import './App.css';

const App = () => {

	return (
		<Box>
			<Header/>
			<Main/>
		</Box>
	);
}

export default App;