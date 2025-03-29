import style from "./MyAvatar.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import Avatar from "/img/yolène_dev.webp"

export default function MyAvatar() {
    return (
        <FlexItem grow iconName="user-check">
            <div className={style.avatarContainer}>
                <img className={style.avatar} src={Avatar} alt="Yolène qui développe" loading="lazy" />
            </div>
        </FlexItem>
    )
}