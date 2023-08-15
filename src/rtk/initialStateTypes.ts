export interface RootWeather {
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
}

export interface Wind {
    speed: number
    deg: number
}

export interface Clouds {
    all: number
}

export interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}


export interface GeolocationType {
    name: string
    lat: number
    lon: number
    country: string
    state: string
}