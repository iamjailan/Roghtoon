import React from "react";
import {NavLink} from "react-router-dom"

export default function Home() {
    return (
        <main className="home--page">
        <h1>Rogh Hospital Available 24/7 at your service</h1>

            <h4>Rogh Hospital is a leading healthcare institution dedicated to providing exceptional medical care and services to patients in need.</h4>
            <NavLink className="home--page--btn" to="/service">Service</NavLink>
        </main>
    )
}