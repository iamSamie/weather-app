import { useAppSelector } from "../rtk/hooks"

const Center = () => {
    const celsius = useAppSelector((state) => state.search.weather)

    return (
        <div className="center">
            <div className="center__number">{celsius && Math.round(celsius.main.temp)}</div>
            <div className="center__weather"></div>
        </div>
    )
}
export { Center }
