import { addCoordinates, removeGeo } from "../features/search/searchSlice"
import { useAppDispatch } from "../rtk/hooks"
import { Coord, GeolocationType } from "../rtk/initialStateTypes"

function PickSearchResult(props: GeolocationType) {
    const {name, state, lat, lon} = props
    const dispatch = useAppDispatch()

    const handleClick = ({lat, lon}: Coord) => {
        dispatch(addCoordinates({lat, lon}))
        dispatch(removeGeo())
    }

    return (
        <div className="search__results" onClick={() => handleClick({ lat, lon })}>
            <span>
                {name}, {state}
            </span>
        </div>
    )
}

export { PickSearchResult }
