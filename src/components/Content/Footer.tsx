import { useAppSelector } from '../../rtk/hooks'
import { Map } from './Map'

const Footer = () => {
    const weather = useAppSelector((state) => state.search.weather)

    const getCoord = (coordinate: number) => {
        if (weather) {
            return `${coordinate.toString().slice(0, 2)}˚ ${coordinate.toString().slice(3, 5)}'`
        }
    }

    return (
        weather && (
            <div className="footer">
                <div className="footer__info">
                    <h1>
                        {weather.name.toUpperCase()}, {weather.sys.country}
                    </h1>
                    <span>{weather.weather[0].description.toUpperCase()}</span>
                    <br />
                    <span>Ощущается как: {Math.round(weather.main.feels_like)}</span>
                    <br />
                    <span>Ветер: {weather.wind.speed}м/с</span>
                    <br />
                    <span>Влажность: {Math.round(weather.main.humidity)}%</span>
                    <br />
                    <p className="coord">
                        {`Lotitude ${getCoord(weather.coord.lat)}`}
                    </p>
                    <p className="coord">
                        {`Longitude ${getCoord(weather.coord.lon)}`}
                    </p>
                </div>
                <div className="footer__map">
                    {weather && <Map lat={weather.coord.lat} lon={weather.coord.lon} />}
                </div>
            </div>
        )
    )
}

export { Footer }
