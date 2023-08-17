import { useAppSelector } from '../rtk/hooks'
import { Map } from './Map'

const Footer = () => {
    const weather = useAppSelector((state) => state.search.weather)

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
                    <span>Ветер: {weather.wind.speed}M/S</span>
                    <br />
                    <span>Влажность: {Math.round(weather.main.humidity)}%</span>
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
                    {weather && <Map lat={weather.coord.lat} lon={weather.coord.lon} />}
                </div>
            </div>
        )
    )
}

export { Footer }
