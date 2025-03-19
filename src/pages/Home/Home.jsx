import style from "./Home.module.css"
import Title from "../../components/HomeParts/Title/Title"

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.column}>
                <Title/>
            </div>
        </div>
    )
}