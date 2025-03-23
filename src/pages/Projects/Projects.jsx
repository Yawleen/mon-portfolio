import style from "./Projects.module.css"
import FeatherIcon from "feather-icons-react"
import TechIcon from "../../components/TechIcon/TechIcon"
import { useProjects } from "../../hooks/useProjects";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation } from "react-router";
import { useEffect } from "react";
import ImageComponent from "../../components/Image/Image";

export default function Projects() {
    const { projects, loading } = useProjects();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.replace("#", "");
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location, projects]);

    if (loading) return <Spinner />

    return (
        <ul className={style.projectsList}>
            {projects.map(project => (
                <li key={project.id} id={project.id} className={style.project}>
                    <div className={style.projectIllustration}>
                        <div className={style.projectImageContainer}>
                            <ImageComponent src={project.image} alt={project.name} />
                        </div>
                        <div className={style.projectActions}>
                            <a className={style.projectAction} href={project.github} target="_blank">
                                <p className={style.projectActionName}>Code</p>
                                <FeatherIcon icon="code" size="10" stroke="#1B1B1B" strokeWidth={2.5} />
                            </a>
                            <a className={style.projectAction} href={project.link} target="_blank">
                                <p className={style.projectActionName}>Run</p>
                                <FeatherIcon icon="play" size="10" fill="#1B1B1B" stroke="#1B1B1B" strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                    <div className={style.projectInfo}>
                        <p className={style.projectName}>{project.name}</p>
                        <p className={style.projectDescription}>{project.description}</p>
                        <p className={style.projectFeaturesTitle}>Fonctionnalités principales</p>
                        <ul className={style.projectFeaturesList}>
                            {project.mainFeatures.map((feature, i) => (
                                <li key={i}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={style.techContainer}>
                            <p className={style.techTitle}>Technos utilisées :</p>
                            <ul className={style.techList}>
                                {project.tech.map(tech => (
                                    <li key={tech.name}>
                                        <TechIcon iconName={tech.icon.name} color={tech.icon.color} size={35} tooltipId={tech.icon.name} tooltipContent={tech.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}