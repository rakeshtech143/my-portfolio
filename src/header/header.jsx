import "./header.css"

import { Link } from 'react-router-dom';

const Header = (props) => {

    return(
        <>
             <header id='header' className="header px-4 py-3 d-flex justify-content-between align-items-center shadow light-background">
                <h1 className="h5 fw-bold m-0">Rakesh Kushwaha</h1>
                <nav id="navmenu" className="d-flex align-items-center gap-3 navmenu">
                    <Link to="/" className="text-decoration-none">Home</Link>
                    <Link to="/about" className="text-decoration-none">About</Link>
                    <Link to="/resume" className="text-decoration-none">Resume</Link>
                    <Link to="/portfolio" className="text-decoration-none">Portfolio</Link>
                    <Link to="/contact" className="text-decoration-none">Contact</Link>
                    <button
                    onClick={() => props.setDarkMode(!props.darkMode)}
                    className="btn btn-primary btn-sm ms-3"
                    >
                    {props.darkMode ? 'Light' : 'Dark'} Mode
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header;