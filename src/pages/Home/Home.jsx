import style from "./Home.module.css"
import Title from "../../components/HomeParts/Title/Title"
import AboutMe from "../../components/HomeParts/AboutMe/AboutMe"
import Resume from "../../components/HomeParts/Resume/Resume"
import MyJob from "../../components/HomeParts/MyJob/MyJob"
import MyAvatar from "../../components/HomeParts/MyAvatar/MyAvatar"

export default function Home() {
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
            </div>
        </div>
    )
}