import { useAppSelector } from '../rtk/hooks'
import { List, ShortThreeDaysWeather } from '../rtk/initialStateTypes'

const Center = () => {
    const celsius = useAppSelector((state) => state.search.weather)
    const threeDaysWeather = useAppSelector((state) => state.search.weatherThreeDays)
    const weather = useAppSelector((state) => state.search.weather)
    let firstDay
    let secondDay
    let thirdDay
    if (threeDaysWeather) {
        const list = threeDaysWeather.list.map((elem: List) => ({
            temp: Math.round(elem.main.temp),
            main: elem.weather[0].main,
            description: elem.weather[0].description,
            icon: elem.weather[0].icon,
            date: elem.dt_txt,
        }))
        const now = new Date()
        const threeDays = list.filter((elem: ShortThreeDaysWeather) => {
            return (
                elem.date.slice(8, 10) !== String(now.getDate()) &&
                elem.date.slice(8, 10) <= String(now.getDate() + 3)
            )
        })

        firstDay = threeDays[5]
        secondDay = threeDays[13]
        thirdDay = threeDays[21]
    }
    // console.log(weather.weather[0].icon)
    return (
        <div className="center">
            <div className="center__number">{celsius && Math.round(celsius.main.temp)}</div>
            <div className="center__weather">
                <div className="center__weather__icon">
                    {weather && (
                        <img
                            id="center__weather__icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather-icon"
                        />
                    )}
                </div>
                {firstDay && secondDay && thirdDay && (
                    <div className="center__weather__three_days">
                        <div className="days">
                            <p>{`${firstDay.date.slice(8, 10)}.${firstDay.date.slice(
                                5,
                                7
                            )}.${firstDay.date.slice(0, 4)}`}</p>
                            <span className="temp_number">{firstDay.temp}</span>
                            <img
                                className="icon"
                                alt="weather-icon"
                                src={`https://openweathermap.org/img/wn/${firstDay.icon}@2x.png`}
                            />
                        </div>
                        <div className="days">
                            <p>
                                {' '}
                                <p>{`${secondDay.date.slice(8, 10)}.${secondDay.date.slice(
                                    5,
                                    7
                                )}.${secondDay.date.slice(0, 4)}`}</p>
                            </p>
                            <span className="temp_number">{secondDay.temp}</span>
                            <img
                                className="icon"
                                alt="weather-icon"
                                src={`https://openweathermap.org/img/wn/${secondDay.icon}@2x.png`}
                            />
                        </div>
                        <div className="days">
                            <p>
                                {' '}
                                <p>{`${thirdDay.date.slice(8, 10)}.${thirdDay.date.slice(
                                    5,
                                    7
                                )}.${thirdDay.date.slice(0, 4)}`}</p>
                            </p>
                            <span className="temp_number">{thirdDay.temp}</span>
                            <img
                                className="icon"
                                alt="weather-icon"
                                src={`https://openweathermap.org/img/wn/${thirdDay.icon}@2x.png`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export { Center }
