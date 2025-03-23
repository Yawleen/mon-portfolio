import style from "./MyProjects.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useProjects } from "../../../hooks/useProjects";
import Spinner from "../../Spinner/Spinner";

export default function MyProjects() {
    const { projects, loading } = useProjects();
    const projectsPath = "/mes-projets";

    return (
        <FlexItem grow title="Mes projets" link={projectsPath}>
            {loading && <Spinner />}
            <ul className={style.projectsList}>
                {projects.map(project => (
                    <li key={project.id} className={style.projectItem}>
                        <Link className={style.projectLink} to={`${projectsPath}#${project.id}`}>
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