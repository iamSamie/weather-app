import { ShortThreeDaysWeather } from '../../../rtk/initialStateTypes'

interface DaysProps {
    correctlyDate: (day: ShortThreeDaysWeather) => string | undefined
    firstDay: ShortThreeDaysWeather
}

const FirstDay = (props: DaysProps) => {
    const { correctlyDate, firstDay } = props
    return (
        <div className="days">
            <p className="days">{correctlyDate(firstDay)}</p>
            <span className="temp_number">{firstDay.temp}</span>
            <img
                className="icon"
                alt="weather-icon"
                src={`https://openweathermap.org/img/wn/${firstDay.icon}@2x.png`}
            />
        </div>
    )
}

export { FirstDay }
