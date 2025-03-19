import style from "./Title.module.css"
import FlexItem from "../../FlexItem/FlexItem"

export default function Title() {
    return (
        <FlexItem iconName="globe">
            <h1 className={style.title}>
                Mon <span className={style.titleBold}>voyage</span> dans le monde du <span className={style.titleBold}>Développement Web</span>
            </h1>
        </FlexItem>
    )
}