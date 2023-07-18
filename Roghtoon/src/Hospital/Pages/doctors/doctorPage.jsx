import React from "react";
import {AiOutlineFieldTime} from "react-icons/ai"
import { NavLink, useParams } from "react-router-dom";
import dataDoctor from "../../data/dataDoctor";

export default function DoctorPage() {
    const [doctorInfo, setDoctorInfo] = React.useState(dataDoctor)

    const doctorElement = doctorInfo.map(doctor => {
        return (
            <main className="doctor--card" key={doctor.id}>
                <img src={doctor.docImage} />
                 <div className="doctor--flex">
                        <h3 className="doctor--name">{doctor.doctorName}</h3>
                        <p className="doctor--icon"><AiOutlineFieldTime className="icon" /><span>{doctor.time}</span></p>
                        <h4 className="doctor--field">{doctor.field}</h4>
                 </div>
                 <NavLink className="visit-doctor" to={`/doctorPage/${doctor.id}`}>&rarr;</NavLink>
            </main>
        )
    })
    return (
        <main className="main--doctor">
            <h3 className="doctor--page--title">With our specialist doctor bring back your health.</h3>
            <section className="doctor--list">
            {doctorElement}
            </section>
        </main>
    )
}