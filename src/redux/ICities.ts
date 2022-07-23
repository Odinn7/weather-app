export interface ICitiesWeather {
    main: string,
    description: string
}

export interface ICitiesMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
}

interface ICitiesSys {
    country: string,
    sunrise: number,
    sunset: number
}

interface ICitiesWind {
    speed: number,
    deg: number
}

export interface ICities {
    id: number,
    name: string,
    weather: Array<ICitiesWeather>,
    main: ICitiesMain,
    sys: ICitiesSys,
    wind: ICitiesWind,
}

export interface IWeatherList {
    "dt": number,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "sea_level": number,
        "grnd_level": number,
        "humidity": number,
        "temp_kf": number
    }
}

export interface IWeather {
    list: Array<IWeatherList>
}