import React from "react";
import dataDoctor from "../../data/dataDoctor";
import { useParams } from "react-router-dom";

export default function DoctorExperience() {
    const [info, setInfo] = React.useState(dataDoctor)
    const {id} = useParams()

    const currentId = id
    const newInfo = info.find(item => item.id == currentId)

    return (
        <section className="doctorTime--page">
            <h1>{newInfo.experience}</h1>
        </section>
    )
}