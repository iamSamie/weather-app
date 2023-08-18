import { MainInfo } from './components/MainInfo'
import { PickSearchResult } from './components/PickSearchResult'
import { Search } from './features/search/Search'
import { useAppSelector } from './rtk/hooks'

function App() {
    const sitiesName = useAppSelector((state) => state.search.geo)

    return (
        <div className="app">
            <div className="main">
                <div className="main_info">
                    <div className="header">
                        <div className="header__settings"></div>
                        <Search />
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
