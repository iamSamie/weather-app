import { useEffect } from "react"
import { Center } from "./Center"
import { Footer } from "./Footer"
import { useAppDispatch, useAppSelector } from "../rtk/hooks"
import { fetchWeather } from "../features/search/WeatherAsyncThunk"

const MainInfo = () => {
    const dispatch = useAppDispatch()
    const coord = useAppSelector((state) => state.search.coord)
    useEffect(() => {
        try {
            dispatch(fetchWeather(coord!))
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
