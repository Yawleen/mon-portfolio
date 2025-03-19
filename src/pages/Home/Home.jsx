import style from "./Home.module.css"
import Title from "../../components/HomeParts/Title/Title"
import AboutMe from "../../components/HomeParts/AboutMe/AboutMe"

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.column}>
                <Title/>
                <AboutMe/>
            </div>
        </div>
    )
}