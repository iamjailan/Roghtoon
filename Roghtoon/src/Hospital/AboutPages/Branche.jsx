import React from "react";

export default function Branches(){
    return (
        <main className="main--branch">
            <h1>Branches</h1>
            <section className="branches--page">
                <div className="branch--card">
                    <img src="/Hospital/b-1.jpg"/>
                    <h3>Rogh Dental Clinic</h3>
                    <p>Rogh Dental Clinic located in Shahr-e-Naw of kabul city have 24/7 patient services</p>
                    <button className="branch--btn">Visit Clinic</button>
                </div>
                <div className="branch--card">
                    <img src="/Hospital/b-1.jpg"/>
                    <h3>Rogh Children Hospital</h3>
                    <p>Rogh Children Hospital located in Baharistan of kabul city have 24/7 patient services, we have corporation with France Children Hospital.</p>
                    <button className="branch--btn">Visit Clinic</button>
                </div>
                <div className="branch--card">
                    <img src="/Hospital/b-1.jpg"/>
                    <h3>Wardak Private Hospital</h3>
                    <p>Wardak Private Hospital located in Sayed Abad district of Wardak Province have 24/7 patient services, this our Provincial Branch.</p>
                    <button className="branch--btn">Visit Clinic</button>
                </div>
            </section>
        </main>
    )
}