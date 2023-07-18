import React from "react";

export default function Footer() {
    const year = new Date().getFullYear()
    return(
        <footer className="footer">
            <h3>&copy; #ROGHTTON {year}</h3>
        </footer>
    )
}