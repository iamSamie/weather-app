import { useState } from 'react'
import { Lupa } from '../../components/Lupa'
import { useAppDispatch } from '../../rtk/hooks'
import { geoAsyncThunk } from './GeoAsyncThunk'

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch()

    const handleClickSearch = (text: string) => {
        if (searchValue) {
            try {
                dispatch(geoAsyncThunk(text))
            } catch (error) {
                alert('Пожалуйста, введите город!')
            }
        } else {
            alert('Пожалуйста, введите город!')
        }
    }

    return (
        <div className="header__search">
            <div className="header__search__block">
                <input
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <div className="background__lupa" onClick={() => handleClickSearch(searchValue)}>
                    <Lupa />
                </div>
            </div>
        </div>
    )
}
export { Search }
