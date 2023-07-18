import React from "react";
import { FaHandsHelping } from 'react-icons/fa';
import { BiLogoGmail, BiSupport } from 'react-icons/bi';

export default function AboutUs(){
    return (
        <section className="About--page--content">
            <main className="about--content">
            <img src="/Hospital/h-image.jpg" />
                <div className="about--desc">
                    <h1>About Us</h1>
                    <h5>Welcome to Rogh Hospital, founded by Attal Group in 2012, located in Kabul, Afghanistan. As a premier healthcare institution, we are committed to providing exceptional services to our patients. With a dedicated team of medical professionals and state-of-the-art facilities, we ensure round-the-clock care and support.</h5>
                </div>
            </main>
            <div className="about--cards">
                <div className="about--card">
                <p className="about--icon"><FaHandsHelping /></p>
                <h3>At our hospital, we believe that everyone deserves access to quality healthcare, regardless of their financial situation. That's why we offer assistance to those who cannot afford the cost of an operation.</h3>
                </div>
                <div className="about--card">
                <p className="about--icon"><BiLogoGmail /></p>
                <h3> Our email address, rogh@info.com, can also be used for any feedback or questions you may have. Please don't hesitate to reach out to us. We are here to support and assist you in any way we can.</h3>
                </div>
                <div className="about--card">
                <p className="about--icon"><BiSupport /></p>
                <h3>Having 24/7 patient support shows a commitment to providing excellent customer service and ensuring patient satisfaction. Keep up the good work!</h3>
                </div>
            </div>
        </section>
    )
}