import style from "./ContactMe.module.css"
import FlexItem from "../../FlexItem/FlexItem"

export default function ContactMe() {
    return (
        <FlexItem link="/contact">
            <div className={style.contact}>
                <h2 className={style.contactTitle}>
                    <span className={style.contactTitleBold}>Contactez</span>-moi
                </h2>
                <p className={style.contactSubtitle}>Des questions ?</p>
            </div>
        </FlexItem>
    )
}