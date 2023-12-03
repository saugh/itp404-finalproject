import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Root () {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light mb-2">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand me-5">
                        aesth
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/outfits" className="nav-link">
                                    Outfits
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/albums" className="nav-link">
                                    Albums
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/favorites" className="nav-link">
                                    Favorites
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer text="aesth FASHION LOG - 2023"/>
        </div>
    )
}