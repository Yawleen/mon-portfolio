import style from "./Home.module.css"
import Title from "../../components/HomeParts/Title/Title"
import AboutMe from "../../components/HomeParts/AboutMe/AboutMe"
import Resume from "../../components/HomeParts/Resume/Resume"
import MyJob from "../../components/HomeParts/MyJob/MyJob"
import MyAvatar from "../../components/HomeParts/MyAvatar/MyAvatar"
import ContactMe from "../../components/HomeParts/ContactMe/ContactMe"
import MyProjects from "../../components/HomeParts/MyProjects/MyProjects"
import MyTech from "../../components/HomeParts/MyTech/MyTech"
import MyExperiences from "../../components/HomeParts/MyExperiences/MyExperiences"
import MyEducation from "../../components/HomeParts/MyEducation/MyEducation"
import MyCertifications from "../../components/HomeParts/MyCertifications/MyCertifications"
import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        document.title = "Yolène Dev Front-End | Portfolio";
    }, []);

    return (
        <div className={style.container}>
            <div className={style.column}>
                <Title />
                <AboutMe />
                <Resume />
            </div>
            <div className={style.column}>
                <MyJob />
                <MyAvatar />
                <ContactMe />
            </div>
            <div className={style.column}>
                <MyProjects />
                <MyTech />
            </div>
            <div className={style.column}>
                <MyExperiences />
                <MyEducation />
                <MyCertifications />
            </div>
        </div>
    )
}