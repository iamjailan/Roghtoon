import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import dataService from "../../data/dataService";
import { useEffect } from "react";

export default function ServiceDetails() {
    const {id} = useParams()
    const location = useLocation()

    const serviceId = id
    const filterService = dataService.find(item => item.id == serviceId)

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <main className="back--button--service">
        <Link className="services--back" to={`..${search}`} relative="path"> &larr; Back to {type} Services</Link>
            <div className="services--details--page">
                <img src={filterService.image}/>
                <section>
                    <h1 className="services--details--title">{filterService.type} Services</h1>
                    <h4 className="services--details--desc">{filterService.desc}</h4>
                </section>
            </div>
        </main>
    )
}