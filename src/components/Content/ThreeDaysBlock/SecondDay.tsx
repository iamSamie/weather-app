import { ShortThreeDaysWeather } from '../../../rtk/initialStateTypes'

interface DaysProps {
    correctlyDate: (day: ShortThreeDaysWeather) => string | undefined
    secondDay: ShortThreeDaysWeather
}

const SecondDay = (props: DaysProps) => {
    const { correctlyDate, secondDay } = props
    return (
        <div className="days">
            <p className="days">{correctlyDate(secondDay)}</p>
            <span className="temp_number">{secondDay.temp}</span>
            <img
                className="icon"
                alt="weather-icon"
                src={`https://openweathermap.org/img/wn/${secondDay.icon}@2x.png`}
            />
        </div>
    )
}

export { SecondDay }
