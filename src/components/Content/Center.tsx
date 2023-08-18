import { useAppSelector } from '../../rtk/hooks'
import { List, ShortThreeDaysWeather } from '../../rtk/initialStateTypes'
import { FirstDay } from './ThreeDaysBlock/FirstDay'
import { MainIconBlock } from './ThreeDaysBlock/MainIconBlock'
import { SecondDay } from './ThreeDaysBlock/SecondDay'
import { ThirdDay } from './ThreeDaysBlock/ThirdDay'

const Center = () => {
    const celsius = useAppSelector((state) => state.search.weather)
    const threeDaysWeather = useAppSelector((state) => state.search.weatherThreeDays)

    let firstDay: ShortThreeDaysWeather,
        secondDay: ShortThreeDaysWeather,
        thirdDay: ShortThreeDaysWeather
        
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

    const correctlyDate = (day: ShortThreeDaysWeather) => {
        if (day) {
            return `${day.date.slice(8, 10)}.${day.date.slice(5, 7)}.${day.date.slice(0, 4)}`
        }
    }

    return (
        <div className="center">
            <div className="center__number">{celsius && Math.round(celsius.main.temp)}</div>
            <div className="center__weather">
                <MainIconBlock />
                {firstDay! && secondDay! && thirdDay! && (
                    <div className="center__weather__three_days">
                        <FirstDay correctlyDate={correctlyDate} firstDay={firstDay} />
                        <SecondDay correctlyDate={correctlyDate} secondDay={secondDay} />
                        <ThirdDay correctlyDate={correctlyDate} thirdDay={thirdDay} />
                    </div>
                )}
            </div>
        </div>
    )
}
export { Center }
