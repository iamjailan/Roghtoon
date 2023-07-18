import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import dataService from "../../data/dataService";

export default function Service(){
    const [service, setService] = React.useState(dataService)
    const [searchParam, setSearchParam] = useSearchParams()

    const filterType = searchParam.get("type")

    const displayFilter = filterType ? service.filter(item => item.type.toLocaleLowerCase() === filterType) : service

    const serviceElement = displayFilter.map(item => {
        return (
            <Link state={{search: `?${searchParam.toString()}`, type: filterType}} to={`/service/${item.id}`} className="service-card--link">
            <section className="service--card" key={item.id}>
                <img src={item.image} alt={item.type} />
                <div className="service--details">
                    <h1 className="services--title">{item.type}</h1>
                    <h4 className="services--note">We have 24/7 {item.type} Services</h4>
                </div>
            </section>
            </Link>
        )
    })
    return (
        <main className="service">
        <h1 className="our--services">Our Services</h1>
        <div className="service--list">
            <Link to="?type=emergency">Emergency</Link>
            <Link to="?type=surgery">Surgery</Link>
            <Link to="?type=cardiology">Cardiology</Link>
            <Link to="?type=oncology">Oncology</Link>
            {filterType ? <Link  to="." className="clear--services">Clear</Link> : null}
        </div>
            <div className="services--list">
            {serviceElement}
            </div>
        </main>
    )
}