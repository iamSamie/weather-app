import { ShortThreeDaysWeather } from '../../../rtk/initialStateTypes'

interface DaysProps {
    correctlyDate: (day: ShortThreeDaysWeather) => string | undefined
    thirdDay: ShortThreeDaysWeather
}

const ThirdDay = (props: DaysProps) => {
    const { correctlyDate, thirdDay } = props
    return (
        <div className="days">
            <p className="days">{correctlyDate(thirdDay)}</p>
            <span className="temp_number">{thirdDay.temp}</span>
            <img
                className="icon"
                alt="weather-icon"
                src={`https://openweathermap.org/img/wn/${thirdDay.icon}@2x.png`}
            />
        </div>
    )
}

export { ThirdDay }
