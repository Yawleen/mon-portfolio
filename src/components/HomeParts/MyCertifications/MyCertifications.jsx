import FlexItem from "../../FlexItem/FlexItem"
import Timeline from "../../Timeline/Timeline"
import { v4 as uuidv4 } from "uuid";

export default function MyCertifications() {
    const certifications = [
        {
            id: uuidv4(),
            name: "Certification Opquast",
            details: "Maîtrise de la Qualité en projet Web",
            period: "Valable du 20 avr. 2023 au 20 avr. 2026",
            link: "https://directory.opquast.com/fr/certificat/7PCHZ9/"
        },
    ];

    return (
        <FlexItem iconName="check" title="Mes certifications">
            <Timeline eventsList={certifications} />
        </FlexItem>
    )
}