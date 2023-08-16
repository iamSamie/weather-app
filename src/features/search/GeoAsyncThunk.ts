import { createAsyncThunk } from '@reduxjs/toolkit'
import { GeolocationType } from '../../rtk/initialStateTypes'

export const geoAsyncThunk = createAsyncThunk(
    '@@geo',
    async (sity: string) => {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${sity}&limit=5&appid=d36aa69487bec96f39ebe45d0ae17087`
    )
    return (await response.json()) as GeolocationType[]
})
