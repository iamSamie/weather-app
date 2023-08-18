import { useEffect, useState } from 'react'
import { Lupa } from '../../components/Lupa'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks'
import { geoAsyncThunk } from './GeoAsyncThunk'
import { addSearchValue } from './searchSlice'

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch()
    const val = useAppSelector((state) => state.search.searchValue)

    const handleClickSearch = (text: string) => {
    if (searchValue) {
        try {
                dispatch(geoAsyncThunk(text))
                dispatch(addSearchValue(searchValue))
            } catch (error) {
                alert('Пожалуйста, введите город!')
            }
        } else {
            alert('Пожалуйста, введите город!')
        }
    }

    useEffect(() => {
        if (!val) setSearchValue('')
    }, [val])

    return (
        <div className="header__search">
            <div className="header__search__block">
                <input
                    placeholder='Введите город...'
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
