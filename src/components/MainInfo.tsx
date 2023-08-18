import { useEffect } from 'react'
import { fetchWeather } from '../features/search/WeatherAsyncThunk'
import { weatherThreeDays } from '../features/search/WeatherThreeDays'
import { useAppDispatch, useAppSelector } from '../rtk/hooks'
import { Center } from './Content/Center'
import { Footer } from './Content/Footer'

const MainInfo = () => {
    const dispatch = useAppDispatch()
    const coord = useAppSelector((state) => state.search.coord)
    useEffect(() => {
        try {
            dispatch(fetchWeather(coord!))
            dispatch(weatherThreeDays(coord!))
        } catch (error) {
            alert('Пожалуйста, попробуйте снова!')
        }
    }, [dispatch, coord])

    return (
        <>
            <Center />
            <Footer />
        </>
    )
}
export { MainInfo }
