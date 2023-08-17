import { createAsyncThunk } from '@reduxjs/toolkit'
import { Coord, WeatherThreeDaysType } from './../../rtk/initialStateTypes'

export const weatherThreeDays = createAsyncThunk(
    'ThreeDaysWeather',
    async (coord: Coord) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=d36aa69487bec96f39ebe45d0ae17087&units=metric&lang=ru&cnt=32`
    )
    return await response.json() as WeatherThreeDaysType
})

