import style from "./ContactMe.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import { CONTACT_ROUTE } from "../../../config/routes"

export default function ContactMe() {
    return (
        <FlexItem link={CONTACT_ROUTE}>
            <div className={style.contact}>
                <h2 className={style.contactTitle}>
                    <span className={style.contactTitleBold}>Contactez</span>-moi
                </h2>
                <p className={style.contactSubtitle}>Des questions ?</p>
            </div>
        </FlexItem>
    )
}