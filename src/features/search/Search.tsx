import { useState } from 'react'
import { useAppDispatch } from '../../rtk/hooks'
import { geoAsyncThunk } from './GeoAsyncThunk'

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch()

    const handleBlur = (text: string) => {
        if (searchValue) {
            dispatch(geoAsyncThunk(text))
        }
    }

    return (
        <div className="header__search">
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onBlur={() => handleBlur(searchValue)}
            />
        </div>
    )
}
export { Search }
