import { IconContext } from "react-icons";
import { FaHtml5, FaReact, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { Tooltip } from 'react-tooltip'
import style from "./TechIcon.module.css"

export default function TectIcon({ iconName, size = 24, color = "white", tooltipId, tooltipContent }) {
    const icons = {
        react: FaReact,
        next: RiNextjsFill,
        html: FaHtml5,
        css: FaCss3Alt,
        sass: FaSass,
        js: SiJavascript,
        ts: SiTypescript,
        tailwindcss: RiTailwindCssFill,
        redux: SiRedux,
        graphql: GrGraphQl
    };

    const IconComponent = icons[iconName];

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent data-tooltip-id={tooltipId} data-tooltip-content={tooltipContent} />
            <Tooltip id={tooltipId} place="bottom" className={style.customTooltip} arrowColor="transparent" offset={2} />
        </IconContext.Provider>
    );
}

