import style from "./Contact.module.css"
import FeatherIcon from "feather-icons-react"
import Map from "../../components/Map/Map"
import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
        document.title = "Yolène Dev Front-End | Contact";
    }, []);

    return (
        <div className={style.contactContainer}>
            <div className={style.mapContainer}>
                <Map />
            </div>
            <div className={style.contact}>
                <div className={style.mailContainer}>
                    <a href="mailto:yoleneconstable@gmail.com" className={style.mail}>
                        <FeatherIcon icon="mail" size="20" fill="white" stroke="#1B1B1B" strokeWidth={1} />
                        <span className={style.contactText}>yoleneconstable@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/constable-yolene/" target="_blank" className={style.linkedIn}>
                        <FeatherIcon icon="linkedin" size="20" fill="white" stroke="transparent" />
                        <span className={style.contactText}>LinkedIn</span>
                    </a>
                </div>
                <a href="https://github.com/Yawleen" target="_blank" className={style.github}>
                    <FeatherIcon icon="github" size="50" fill="white" stroke="transparent" />
                </a>
            </div>
        </div>
    )
}