import { createAsyncThunk } from "@reduxjs/toolkit";
import { Coord, RootWeather } from "../../rtk/initialStateTypes";

export const fetchWeather = createAsyncThunk(
    'fetchWeather',
    async (coord: Coord) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=d36aa69487bec96f39ebe45d0ae17087&units=metric&lang=ru`
        )
        return (await response.json()) as RootWeather
    }
)