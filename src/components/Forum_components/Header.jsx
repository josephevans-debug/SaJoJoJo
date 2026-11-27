import './Css/Header.css'

function Header() {
    return(
        <header className="Header">
            <div className="Headerleft">
                <button className="Homebtn">Home</button>
            </div>
            <input
                className="Searchbar"
                type="search"
                placeholder="Search"
            />
            <div className="Headerright">
                <button className="Createbtn">Create Post</button>
                <button className="Profilebtn" aria-label="Profile"></button>
            </div>
        </header>
    )
}

export default Header
