import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar() {
    const [linkButton, setLinkButton] = React.useState(false)

    function toggleNav(){
        setLinkButton(prevState => !prevState)
    }

    return <header className="navbar--header">
        <nav className="header--navbar">
            <NavLink to="/" className="navbar--title">#ROGHTOON</NavLink>
            <div className="navbar--links enable--button">
                <NavLink to="service" className={({isActive}) => isActive ? "active-links" : null}>Services</NavLink>
                <NavLink to="doctorPage" className={({isActive}) => isActive ? "active-links" : null}>Find Doctor</NavLink>
                <NavLink to="about" className={({isActive}) => isActive ? "active-links" : null}>More</NavLink>
            </div>
        </nav>
        <nav className="header--navbar disable--button">
            <div className="mobile--navbar">
                <NavLink to="/" className="navbar--title">#ROGHTOON</NavLink>
                <img onClick={() => toggleNav()} src="/Hospital/svg.svg" className="navbar--svg" />
            </div>
            <div className={linkButton ? "navbar--links" : "navbar--links enable--button"}>
                <NavLink to="service" className={({isActive}) => isActive ? "active-links" : null}>Services</NavLink>
                <NavLink to="doctorPage" className={({isActive}) => isActive ? "active-links" : null}>Find Doctor</NavLink>
                <NavLink to="about" className={({isActive}) => isActive ? "active-links" : null}>More</NavLink>
            </div>
        </nav>
    </header>
}