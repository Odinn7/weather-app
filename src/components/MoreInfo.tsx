import React from 'react';
import { Box, Modal, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { ICities, ICitiesWeather, IWeather, IWeatherList } from "../redux/ICities";
import { boxStyle, typographyStyle } from "../Styles";


interface MoreInfoStateProps {
    open: boolean,
    handleClose: () => void,
    city: ICities,
    weather: IWeather[]
}

export const MoreInfo = ({open, handleClose, city, weather}: MoreInfoStateProps) => {

    return (
        <Modal
            open={ open }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ boxStyle }>
                <div style={ {
                    display: "flex",
                    position: "absolute",
                    alignItems: "flex-start",
                    right: 10,
                    top: 10
                } }>
                    <CancelIcon
                        color="error"
                        sx={ {width: "25px", height: "25px", cursor: "pointer"} }
                        onClick={ handleClose }
                    />

                </div>
                <Box component="div" sx={ {width: "100%"} }>
                    <Typography
                        sx={ {mb: 5, fontFamily: "Montserrat"} }
                        variant="h4"
                        component="h2"
                    >
                        More Information
                    </Typography>
                    <Typography sx={ {fontSize: 15, fontFamily: "Montserrat"} }>
                        <Typography sx={ typographyStyle }>Country: { city.sys.country }</Typography>
                        <Typography sx={ typographyStyle }> City: { city.name }</Typography>
                        <Typography
                            sx={ typographyStyle }>Weather: { city.weather.map((item: ICitiesWeather) => item.main) }</Typography>
                        <Typography sx={ typographyStyle }>Temperature: { Math.floor(city.main.temp) }°C</Typography>
                        <Typography sx={ typographyStyle }>Feels like: { city.main.feels_like }°C</Typography>
                        <Typography
                            sx={ typographyStyle }>Sunrise: { new Date(city.sys.sunrise * 1000).toLocaleString() }</Typography>
                        <Typography
                            sx={ typographyStyle }>Sunset: { new Date(city.sys.sunset * 1000).toLocaleString() }</Typography>
                        <Typography sx={ typographyStyle }>Wind: { city.wind.speed } m/s</Typography>
                        <Box>
                            {
                                <Box sx={ {display: 'flex', flexDirection: "column"} }>
                                    <Typography sx={ typographyStyle }>
                                        Temperature per day:
                                    </Typography>
                                    <Box style={ {display: "flex"} }>
                                        {
                                            weather.map(
                                                (weatherItem: IWeather) => weatherItem.list.slice(0, 7).map(
                                                    (ili: IWeatherList) => <Typography style={
                                                        {
                                                            marginRight: "5px",
                                                            border: "1px solid black",
                                                            fontSize: "10px",
                                                            paddingBottom: "5px",
                                                            paddingTop: "5px",
                                                            width: "15vw",
                                                            height: "4vh",
                                                            display: 'flex',
                                                            flexDirection: "column",
                                                            justifyContent: "space-between",
                                                        }
                                                    }>
                                                        <Typography sx={typographyStyle} style={ {display: "flex", justifyContent: "center"} }>
                                                            { (ili.main.temp) }°C
                                                        </Typography>
                                                        <Typography sx={typographyStyle} style={ {display: "flex", justifyContent: "center"} }>
                                                            <>
                                                                { new Date(ili.dt * 1000).toLocaleTimeString('ru-RU') }
                                                                { new Date(ili.dt).getHours }
                                                            </>
                                                        </Typography>
                                                    </Typography>)
                                            ) }
                                    </Box>
                                </Box>
                            }
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </Modal>
    )
        ;
};
