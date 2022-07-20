import React, { useEffect, useState } from 'react';
import { useAppSelector } from "../redux/hooks/hooks";
import { CityCard } from "./CityCard";


export const Main = () => {
	const {citiesArray: city} = useAppSelector(state => state.citiesSlice)
	useEffect(() => {
		localStorage.getItem("cities")
	}, [])
	return (
		<div style={{display: "flex"}}>
			{
				//проверка идёт только по массиву а нужно добавить и по локал стореджу
				city.length !== 0 ?
				(
				localStorage.getItem("cities") && city.map((city: any) => <CityCard key={city.name} city={city}/>)
				)
								  :
				<h1>No cities</h1>
			}
		</div>
	);
};

