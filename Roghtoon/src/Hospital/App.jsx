import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import SharedNav from "./Pages/sharedLayout/sharedNav";
import DoctorPage from "./Pages/doctors/doctorPage";
import Home from "./Pages/home";
import Service from "./Pages/services/servicePage";
import About from "./Pages/About";
import ServiceDetails from "./Pages/services/servicesDetails";
import DoctorDetail from "./Pages/doctors/doctorDetails";
import DoctorEducation from "./Pages/doctors/doctorEducation";
import DoctorExperience from "./Pages/doctors/doctorExperience";
import DoctorTime from "./Pages/doctors/doctorTime";
import AboutUs from "./AboutPages/AboutUs";
import Branches from "./AboutPages/Branche";
import Feedback from "./AboutPages/feedback";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedNav />}>
                    <Route index element={<Home />}/>
                    <Route path="doctorPage" element={<DoctorPage />}/>
                    <Route path="doctorPage/:id" element={<DoctorDetail />}>
                        <Route index element={<DoctorTime />} />
                        <Route path="experience" element={<DoctorExperience />} />
                        <Route path="education" element={<DoctorEducation />} />
                    </Route>
                    <Route path="service" element={<Service />}/>
                    <Route path="service/:id" element={<ServiceDetails />}/>
                    <Route path="about" element={<About />}>
                        <Route index element={<AboutUs />} />
                        <Route path="branches" element={<Branches />} />
                        <Route path="feedback" element={<Feedback />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}