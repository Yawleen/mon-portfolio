import style from "./FlexItem.module.css"
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";

export default function FlexItem({ grow, children, iconName, title, titleColor, bgColor, link }) {
    const getItemStyle = () => {
        let style = {};

        if (grow) {
            style.flexGrow = 1;
        }

        if (bgColor) {
            style.backgroundColor = bgColor;
        }

        return style;
    };


    return (
        <div {...(Object.keys(getItemStyle()).length > 0 && { style: getItemStyle() })} className={style.item}>
            {link && <Link to={link} className={style.itemLink}></Link>}
            {(iconName || link) && <div className={style.itemIcon}><FeatherIcon icon={link ? "arrow-up-right" : iconName} size="20" stroke={link ? "#26989c" : "white"} strokeWidth={2.5} /></div>}
            {title && <h2 {...(titleColor && { style: { color: titleColor } })} className={style.itemTitle}>{title.split(" ")[0]} <span className={style.itemTitleBold}>{title.split(" ").slice(1).join(" ")}</span></h2>}
            {children}
        </div>
    )
}