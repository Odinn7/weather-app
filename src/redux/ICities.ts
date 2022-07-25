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

export interface ICitiesSys {
    country: string,
    sunrise: number,
    sunset: number
}

export interface ICitiesWind {
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

export interface IWeatherListMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
}

export interface IWeatherList {
    dt: number,
    main: IWeatherListMain
}

export interface IWeather {
    list: Array<IWeatherList>
}