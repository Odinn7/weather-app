import React from 'react';
import { useAppSelector } from "../redux/hooks/hooks";
import { CityCard } from "./CityCard";


export const Main = () => {
    const {citiesArray: cities} = useAppSelector(state => state.citiesSlice)

    return (
        <div style={ {display: "flex"} }>
            {
                cities.length == 0 ?
                    <h1>No cities yet</h1>
                    :
                    cities.map((city: any) => <CityCard key={ city.name } city={ city }/>)
            }
        </div>
    );
};

