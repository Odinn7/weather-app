import React from 'react';
import { useAppSelector } from "../redux/hooks/hooks";
import { CityCard } from "./CityCard";


export const Main = () => {
	const {citiesArray: cities} = useAppSelector(state => state.citiesSlice)
	return (
		<div style={{display: "flex", flexWrap: "wrap"}}>
			{
				cities.length == 0 ?
				<h1 style={{color: 'white', marginLeft: "25px"}}>
					Here no cities yet. Enter cities name in search panel.
				</h1>
								   :
				cities.map((city: any) => <CityCard key={city.name} city={city}/>)}
		</div>
	);
};

