import { useAppSelector } from '../rtk/hooks'
import { List,  ShortThreeDaysWeather } from '../rtk/initialStateTypes'

const Center = () => {
    const celsius = useAppSelector((state) => state.search.weather)
    const threeDaysWeather = useAppSelector((state) => state.search.weatherThreeDays)
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
        // resultAvarageTemp = {
        //     first: {
        //         'temp': threeDays[5],
        //     },
        //     second: {
        //         'temp': threeDays[13],
        //     },
        //     third: {
        //         'temp': threeDays[21],
        //     },
        // }
        firstDay = threeDays[5]
        secondDay = threeDays[13]
        thirdDay = threeDays[21]
    }
    return (
        <div className="center">
            <div className="center__number">{celsius && Math.round(celsius.main.temp)}</div>
            <div className="center__weather">
                <div className="center__weather__icon"></div>
                {firstDay && secondDay && thirdDay && (
                    <div className="center__weather__three_days">
                        <div className="days">
                            <h3>{firstDay.date}</h3>
                            <span className="temp_number">{firstDay.temp}</span>
                            {/* <span className="icon">{firstDay.icon}</span> */}
                        </div>
                        <div className="days">
                            <h3>{secondDay.date}</h3>
                            <span className="temp_number">{secondDay.temp}</span>
                            {/* <span className="icon">{secondDay.icon}</span> */}
                        </div>
                        <div className="days">
                            <h3>{thirdDay.date}</h3>
                            <span className="temp_number">{thirdDay.temp}</span>
                            {/* <span className="icon">{thirdDay.icon}</span> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export { Center }
