import style from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { HOME_ROUTE, PROJECTS_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE } from "../../config/routes";

export default function Navbar() {
    const location = useLocation();

    const navBarItems = [
        {
            iconName: "home",
            route: HOME_ROUTE,
            name: "Accueil"
        },
        {
            iconName: "folder",
            route: PROJECTS_ROUTE,
            name: "Projets"
        },
        {
            iconName: "user",
            route: ABOUT_ROUTE,
            name: "À propos"
        },
        {
            iconName: "mail",
            route: CONTACT_ROUTE,
            name: "Contact"
        },

    ];

    return (
        <nav className={style.navBar}>
            <ul className={style.navBarList}>
                {navBarItems.map(item => (
                    <li key={item.iconName} className={style.navBarItem}>
                        <Link to={item.route} className={style.navBarLink}>
                            {location.pathname === item.route ? (
                                <span className={style.activeItem}>
                                    <FeatherIcon className={style.icon} icon={item.iconName} size="16" fill="white" stroke="#212121" strokeWidth={1} />
                                    <p className={style.itemName}>{item.name}</p>
                                </span>
                            ) :
                                (
                                    <span className={style.iconContainer}>
                                        <FeatherIcon icon={item.iconName} size="16" fill="#a8acf0" stroke="#fafafa" strokeWidth={2.5} />
                                    </span>
                                )}

                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}