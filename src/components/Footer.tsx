import { useAppSelector } from '../rtk/hooks'
import { Map } from './Map'

const Footer = () => {
    const weather = useAppSelector((state) => state.search.weather)
    const date = new Date()

    return (
        weather && (
            <div className="footer">
                <div className="footer__info">
                    <h1>
                        {weather.name.toUpperCase()}, {weather.sys.country}
                    </h1>
                    <h2>
                        {date.getHours()}:{date.getMinutes()}
                    </h2>
                    <span>{weather.weather[0].main.toUpperCase()}</span>
                    <br />
                    <span>FEELS LIKE: {Math.round(weather.main.feels_like)}</span>
                    <br />
                    <span>WIND: {weather.wind.speed}M/S</span>
                    <br />
                    <span>HUMIDITY: {Math.round(weather.main.humidity)}%</span>
                    <br />
                    <p className="coord">
                        {`Lotitude ${weather.coord.lat.toString().slice(0, 2)}˚
                        ${weather.coord.lat.toString().slice(3, 5)}'`}
                    </p>
                    <p className="coord">
                        {`Longitude ${weather.coord.lon.toString().slice(0, 2)}˚
                        ${weather.coord.lon.toString().slice(3, 5)}'`}
                    </p>
                </div>
                <div className="footer__map">
                    <Map />
                </div>
            </div>
        )
    )
}

export { Footer }
