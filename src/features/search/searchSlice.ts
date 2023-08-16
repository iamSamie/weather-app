import { createSlice } from '@reduxjs/toolkit'
import { GeolocationType, RootWeather } from '../../rtk/initialStateTypes'
import { geoAsyncThunk } from './GeoAsyncThunk'

type InitialStateTypes = {
    searchValue: string
    status: 'idle' | 'loading' | 'error' | 'success'
    weather: RootWeather
    geo: GeolocationType[]
}

const searchSlice = createSlice({
    name: 'search',
    initialState: {} as InitialStateTypes,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(geoAsyncThunk.fulfilled, (state, action) => {
            state.geo = action.payload
        })
    },
})
export default searchSlice.reducer
