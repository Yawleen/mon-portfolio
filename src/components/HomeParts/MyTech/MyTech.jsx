import style from "./MyTech.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import TechIcon from "../../TechIcon/TechIcon"

export default function MyTech() {
    const tech = [
        {
            iconName: "react",
            color: "#82e3ff",
            name: "ReactJS"
        },
        {
            iconName: "next",
            color: "#000",
            name: "Next.js"
        },
        {
            iconName: "html",
            color: "#dd4b25",
            name: "HTML"
        },
        {
            iconName: "css",
            color: "#3293d8",
            name: "CSS"
        },
        {
            iconName: "js",
            color: "#f0db4f",
            name: "JavaScript"
        },
        {
            iconName: "sass",
            color: "#c66494",
            name: "Sass"
        },
        {
            iconName: "ts",
            color: "#317ed1",
            name: "TypeScript"
        },
        {
            iconName: "graphql",
            color: "#e63cae",
            name: "GraphQL"
        },
    ];

    return (
        <FlexItem title="Mes technos" titleColor="#1B1B1B" bgColor="#fafafa" >
            <ul className={style.techList}>
                {tech.map(techno => (<li key={techno.iconName}>
                    <TechIcon iconName={techno.iconName} color={techno.color} size={45} tooltipId={techno.iconName} tooltipContent={techno.name} />
                </li>))}
            </ul>
        </FlexItem>
    )
}