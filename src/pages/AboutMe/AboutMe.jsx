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
                        Tout a commencé en <span>2019</span> lorsque j'ai souhaité intégrer un <span>Master Traitement Automatique des Langues (Natural Language Processing)</span> à l'Université Paris Nanterre.
                        Avant cela, j'avais brièvement découvert l'informatique en licence, ce qui m'a donné envie de poursuivre dans ce domaine. J'ai commencé à étudier l'<span>IA</span> et j'ai développé mes premiers programmes avec <span>Python</span>.
                        En deuxième année de Master, j'ai eu un <span>déclic</span> lors d'un cours sur les <span>bases de données et PHP</span>. J'ai développé mon premier site dynamique avec <span>HTML, CSS, JS, PHP et SQL</span> et j'ai réalisé que le <span>Développement Web</span> m'attirait plus que l'IA. Pourquoi ? Parce que j'avais le sentiment de comprendre et de maîtriser ce que je faisais et rien ne me paraissait abstrait.
                        J'ai découvert le Front-End et le Back-End, mais j'ai vite su que c'était le Front-End qui me passionnait le plus car il me permettait d'exprimer ma créativité et d'obtenir des résultats concrets rapidement. <br /><br />
                        Même si je ne souhaitais pas continuer dans l'IA, j'ai tenu à aller au bout de mon Master et j'ai obtenu mon diplôme en 2021. Par la suite, <span>déterminée à me réorienter</span>, j'ai consacré une année entière à me former de manière <span>autodidacte</span> au Développement Web.
                        Pendant cette période, j'ai combiné <span>théorie et projets concrets</span> pour acquérir les bases nécessaires et intégrer un <span>Mastère en Développement Web</span>.
                        En <span>2022</span>, j'ai franchi le cap et intégré un <span>Mastère en alternance</span> pour aquérir rapidement de l'expérience professionnelle.
                        Pendant deux ans, j'ai étudié tout en occupant <span>un poste de Développeuse Front-End dans une startup</span>. Cette première expérience m'a confirmé que j'étais à ma place. Je me sentais enfin utile car je pouvais, grâce à mon code, <span>donner vie à des idées</span> et <span>créer des solutions utiles aux autres</span>.<br /><br />
                        Aujourd'hui, forte de cette expérience et de ces apprentissages, je suis prête à <span>relever de nouveaux défis</span> et à continuer à donner vie à des idées innovantes grâce au développement Front-End.
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