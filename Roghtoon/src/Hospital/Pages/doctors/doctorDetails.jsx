import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import dataDoctor from "../../data/dataDoctor";
import {AiOutlineFieldTime} from "react-icons/ai"

export default function DoctorDetail() {
    const {id} = useParams()
    const [doctorInfo, setDoctorInfo] = React.useState(dataDoctor)
    
    const doctorId = id
    const filterDoctor = doctorInfo.find(item => item.id == doctorId)

    return (
        <section className="doctor--details--page">
            <div className="back--class">
                <Link to="../doctorPage" className="back--link">&larr;Back to Doctors</Link>
            </div>
            <main className="doctor--details--card">
                <div className="doctor--details--mini">
                    <img src={filterDoctor.docImage}/>
                    <div className="doctor--details--info">
                        <div className="doctor--details--name">
                            <h2>{filterDoctor.doctorName}</h2>
                            <p className="doctor--icons"><AiOutlineFieldTime className="icon" />{filterDoctor.time}</p>
                        </div>
                        <h1>{filterDoctor.field}</h1>
                    </div>
                </div>
                <h3 className="doctor--details--desc">{filterDoctor.desc}</h3>
            <div className="doctor--details--links">
                <NavLink to="" end className={({isActive}) => isActive ? "active-links" : null}>Time</NavLink>
                <NavLink to="education" className={({isActive}) => isActive ? "active-links" : null}>Education</NavLink>
                <NavLink to="experience" className={({isActive}) => isActive ? "active-links" : null}>Experience</NavLink>
            </div>
            <Outlet/>
            </main>
        </section>
    )
}