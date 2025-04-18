import style from "./Resume.module.css"
import FlexItem from "../../FlexItem/FlexItem"

export default function Resume() {
    return (
        <FlexItem iconName="download" title="Mon CV" titleColor="#1B1B1B" bgColor="#ffffff79">
            <a className={style.link} aria-label="Voir mon CV" href={`${import.meta.env.BASE_URL}docs/CV_CONSTABLE_Yolène_Développeuse_Front-End.pdf`} download />
        </FlexItem>
    )
}