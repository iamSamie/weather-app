import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Coord, GeolocationType, RootWeather } from '../../rtk/initialStateTypes'
import { geoAsyncThunk } from './GeoAsyncThunk'
import { fetchWeather } from './WeatherAsyncThunk'

type InitialStateTypes = {
    searchValue: string
    status: 'idle' | 'loading' | 'error' | 'success'
    weather: RootWeather
    geo: GeolocationType[] | null
    coord: Coord | null
}

const searchSlice = createSlice({
    name: 'search',
    initialState: {} as InitialStateTypes,
    reducers: {
        addCoordinates: (state, action: PayloadAction<Coord>) => {
            state.coord = action.payload
        },
        addSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        removeGeo: (state) => {
            state.geo = null
            state.searchValue = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(geoAsyncThunk.fulfilled, (state, action) => {
            state.geo = action.payload
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weather = action.payload
                state.coord = null
            })
    },
})
export default searchSlice.reducer
export const {addCoordinates, removeGeo, addSearchValue} = searchSlice.actions