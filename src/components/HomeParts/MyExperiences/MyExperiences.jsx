import style from "./MyExperiences.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import Timeline from "../../Timeline/Timeline"
import { v4 as uuidv4 } from "uuid";

export default function MyExperiences() {
  const experiences = [
    {
      id: uuidv4(),
      name: "Développeuse Front-End",
      period: "Juin 2022 - Sept. 2024",
      place: "Broke And Abroad, Paris"
    },
    {
      id: uuidv4(),
      name: "Stagiaire en IA",
      period: "Mars 2021 - Août 2021",
      place: "Office National d'Études et de Recherches Aérospatiales (ONERA), Palaiseau"
    },
  ];

  return (
    <FlexItem iconName="briefcase" title="Mes expériences*">
      <p className={style.text}>*Les plus signifiantes</p>
      <Timeline eventsList={experiences} />
    </FlexItem>
  )
}