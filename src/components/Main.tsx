import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { CityCard } from "./CityCard";


export const Main = () => {
	
	// const [parsedItem, setParsedItem] = useState([])
	// console.log(parsedItem, "parsed")
	
	const {citiesArray: city} = useAppSelector(state => state.citiesSlice)
	

	
	// useEffect(() => {
	// 	try {
			// setParsedItem(JSON.parse(localStorage.getItem("cities") || ""))
		// } catch (error) {
		// 	console.warn(error, "error")
		// }
	// }, [city.length])
	
	return (
		<div style={{display: "flex"}}>
			{
				//проверка идёт только по массиву а нужно добавить и по локал стореджу
				city.length == 0 ?
				// parsedItem.map((city) => <CityCard city={city}/>)
					<h1>No cities yet</h1>
								 :
				city.map((city: any) => <CityCard key={city.name} city={city}/>)
			}
		</div>
	);
};

