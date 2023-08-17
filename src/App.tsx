import { error } from 'console'
import { MainInfo } from './components/MainInfo'
import { PickSearchResult } from './components/PickSearchResult'
import { Search } from './features/search/Search'
import { useAppSelector } from './rtk/hooks'
import { Error } from './components/Error'

function App() {
    const sitiesName = useAppSelector((state) => state.search.geo)
    const err = useAppSelector((state) => state.search.status)
    return (
        <div className="app">
            <div className="main">
                <div className="main_info">
                    <div className="header">
                        <div className="header__settings"></div>
                        <Search />
                        {err && err === 'error' && <Error />  }
                        {sitiesName &&
                            sitiesName.map((elem) => <PickSearchResult key={elem.lat} {...elem} />)}
                    </div>
                    <MainInfo />
                </div>
                <div className="main_picture"></div>
            </div>
        </div>
    )
}

export default App
