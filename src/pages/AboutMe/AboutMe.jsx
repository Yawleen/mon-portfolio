import style from "./AboutMe.module.css"
import Map from "../../components/Map/Map"
import FeatherIcon from "feather-icons-react"

export default function AboutMe() {
    const personality = [{ color: "#c0392b", word: "Empathique 👂" }, { color: "#f39c12", word: "Aventurière ✈️" }, { color: "#4a90e2", word: "Ambiverte sociable 🎭" }, { color: "#d4ac4b", word: "Curieuse 🔍" }, { color: "#27ae60", word: "Persévérante 💪🏽" }, { color: "#8e44ad", word: "Perfectionniste 🎯" }];
    
    return (
        <div className={style.aboutMe}>
            <div className={style.codingJourneyContainer}>
                <p className={style.aboutMeTitle}>Au-delà du portfolio</p>
                <p className={style.aboutMeSubtitle}>Pour en savoir plus sur moi</p>
                <div className={style.codingJourney}>
                    <p className={style.codingJourneyTitle}>Mon aventure dans le code</p>
                    <p className={style.codingJourneyText}>
                        Tout a commencé en 2019 lorsque j'ai souhaité intégrer un Master Traitement Automatique des Langues (Natural Language Processing) à l'Université Paris Nanterre.
                        Avant cela, j'avais brièvement découvert l'informatique en licence, ce qui m'a donné envie de poursuivre dans ce domaine. J'ai commencé à étudier l'IA et j'ai développé mes premiers programmes avec Python.
                        C'est en deuxième année de Master que j'ai eu un déclic, lors d'un cours sur les bases de données et PHP. J'ai développé mon premier site dynamique avec HTML, CSS, JS, PHP et SQL et j'ai réalisé que le Développement Web m'attirait plus que l'IA. Pourquoi ? Parce que j'avais le sentiment de comprendre et de maîtriser ce que je faisais et rien ne me paraissait abstrait.
                        J'ai découvert le Front-End et le Back-End, mais j'ai vite su que c'était le Front-End qui me passionnait le plus, car il me permettait d'exprimer ma créativité et d'obtenir des résultats concrets rapidement. <br /><br />
                        Même si je ne souhaitais pas continuer dans l'IA, j'ai tenu à aller au bout de mon Master et j'ai obtenu mon diplôme en 2021. Par la suite, déterminée à me réorienter, j'ai consacré une année entière à me former en autodidacte au Développement Web.
                        Pendant cette période, j'ai combiné théorie et projets concrets pour acquérir les bases nécessaires et me sentir légitime à intégrer un Mastère en Développement Web.
                        En 2022, j'ai franchi le cap et intégré un Mastère en alternance pour aquérir rapidement de l'expérience professionnelle.
                        Pendant deux ans, j'ai étudié tout en occupant un poste de Développeuse Front-End dans une startup. Cette première expérience m'a confirmé que j'étais à ma place. Je me sentais enfin utile car je pouvais, grâce à mon code, donner vie à des idées et créer des solutions utiles aux autres.<br /><br />
                        Aujourd'hui, forte de cette expérience et de ces apprentissages, je suis prête à relever de nouveaux défis et à continuer à donner vie à des idées innovantes grâce au développement Front-End.
                    </p>
                    <div className={style.decoration}></div>
                </div>
            </div>
            <div className={style.myPersonaContainer}>
                <div className={style.mapContainer}>
                    <Map />
                </div>
                <div className={style.myPersona}>
                    <div className={style.titleContainer}>
                        <FeatherIcon icon="user" size="20" stroke="white" strokeWidth={2.5} />
                        <p className={style.myPersonaTitle}>Mon persona</p>
                    </div>
                    <p className={style.myPersonaSubtitle}>Quelques mots pour me décrire</p>
                    <ul className={style.wordsList}>
                        {personality.map((personalityWord, i) => <li key={i} style={{ background: personalityWord.color }} className={style.word}>{personalityWord.word}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}