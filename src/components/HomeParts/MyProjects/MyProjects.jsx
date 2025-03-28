import style from "./MyProjects.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useProjects } from "../../../hooks/useProjects";
import Spinner from "../../Spinner/Spinner";
import { PROJECTS_ROUTE } from "../../../config/routes";

export default function MyProjects() {
    const { projects, loading } = useProjects();

    return (
        <FlexItem grow title="Mes projets" link={{ label: "Voir mes projets", href: PROJECTS_ROUTE }}>
            {loading && <Spinner />}
            <ul className={style.projectsList}>
                {projects.map(project => (
                    <li key={project.id} className={style.projectItem}>
                        <Link className={style.projectLink} aria-label={`Voir le projet ${project.name}`} to={`${PROJECTS_ROUTE}#${project.id}`}>
                            <span className={style.projectNameContainer}>
                                <span className={style.projectIcon}>
                                    <FeatherIcon icon={project.iconName} size="18" stroke="white" strokeWidth={2.5} />
                                </span>
                                <span className={style.projectName}>
                                    {project.name}
                                </span>
                            </span>

                            <span>
                                <FeatherIcon icon="chevron-right" size="24" stroke="white" strokeWidth={2.5} />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

        </FlexItem>
    )
}