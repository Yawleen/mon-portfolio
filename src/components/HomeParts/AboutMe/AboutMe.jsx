import style from "./AboutMe.module.css"
import FlexItem from "../../FlexItem/FlexItem"

export default function AboutMe() {
    return (
        <FlexItem grow title="Qui suis-je ?" link="/a-propos-de-moi">
            <p className={style.aboutMeText}>
                Une développeuse front-end passionnée qui cherche à donner vie à des idées, à rendre le web accessible à tous et à offrir des
                expériences utilisateur marquantes.
            </p>
        </FlexItem>
    )
}