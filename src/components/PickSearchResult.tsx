import { GeolocationType } from "../rtk/initialStateTypes"

function PickSearchResult(props: GeolocationType) {
    const {name, state} = props
    return <div className="search__results">
        <span>{name}, {state}</span>
    </div>
}

export { PickSearchResult }
