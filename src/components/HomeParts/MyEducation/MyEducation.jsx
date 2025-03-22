import FlexItem from "../../FlexItem/FlexItem"
import Timeline from "../../Timeline/Timeline"
import { v4 as uuidv4 } from "uuid";

export default function MyEducation() {
    const education = [
        {
            id: uuidv4(),
            name: "Mastère Développement Web",
            period: "Sept. 2022 - Sept. 2024",
            place: " ECV Digital, Paris"
        },
        {
            id: uuidv4(),
            name: "Master Traitement Automatique des Langues (NLP)",
            period: "Sept. 2019 - Sept. 2021",
            place: "Université Paris Nanterre"
        },
        {
            id: uuidv4(),
            name: "Licence Sciences du Langage",
            period: "Sept. 2016 - Juin 2019",
            place: "Université Paris Nanterre"
        },
        {
            id: uuidv4(),
            name: "Baccalauréat série ES",
            period: "Sept. 2015 - Juin 2016",
            place: "Lycée Paul Émile Victor, Osny"
        },
    ];

    return (
        <FlexItem grow iconName="book" title="Mes formations">
            <Timeline eventsList={education} />
        </FlexItem>
    )
}