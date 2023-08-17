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
    coord: Coord
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

export type Coord = {
    lon: number
    lat: number
}

// export interface WeatherThreeDaysType {
//     list: ShortThreeDaysWeather[]
// }
export interface ShortThreeDaysWeather {
    temp: number
    main: string
    description: string
    icon: string
    date: string
}

export interface WeatherThreeDaysType {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
    rain?: Rain
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Clouds {
    all: number
}

export interface Wind {
    speed: number
    deg: number
    gust: number
}

export interface Sys {
    pod: string
}

export interface Rain {
    '3h': number
}

export interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

