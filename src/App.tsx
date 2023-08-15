import { Search } from "./features/search/Search"

function App() {
    return (
        <div className="app">
            <div className="main">
                <div className="main_info">
                    <div className="header">
                        <div className="header__settings"></div>
                        <Search />
                    </div>
                    <div className="center">
                        <div className="center__number"></div>
                        <div className="center__weather"></div>
                    </div>
                    <div className="footer">
                        <div className="footer__info"></div>
                        <div className="footer__map"></div>
                    </div>
                </div>
                <div className="main_picture"></div>
            </div>
        </div>
    )
}

export default App
