import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About(){
    return (
        <section>
            <nav className="moore--navbar">
                <NavLink to="" end className={({isActive}) => isActive ? "active-links" : null}>About Us</NavLink>
                <NavLink to="branches" className={({isActive}) => isActive ? "active-links" : null}>Branches</NavLink>
                <NavLink to="feedback" className={({isActive}) => isActive ? "active-links" : null}>Feedback</NavLink>
            </nav>
            <Outlet />
        </section>
    )
}