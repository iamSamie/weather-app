import { useAppSelector } from '../../../rtk/hooks'

const MainIconBlock = () => {
    const weather = useAppSelector((state) => state.search.weather)

    return (
        <div className="center__weather__icon">
            {weather && (
                <img
                    id="center__weather__icon"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                />
            )}
        </div>
    )
}

export { MainIconBlock }
