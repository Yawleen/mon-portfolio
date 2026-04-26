import style from './AboutMe.module.css';
import FlexItem from '../../FlexItem/FlexItem';
import { ABOUT_ROUTE } from '../../../config/routes';

export default function AboutMe() {
  return (
    <FlexItem
      grow
      title="Qui suis-je ?"
      link={{ label: 'En savoir plus sur moi', href: ABOUT_ROUTE }}
    >
      <p className={style.aboutMeText}>
        Une aventurière avant tout ! J'ai exploré plusieurs chemins et je me
        suis beaucoup cherchée avant de trouver quelque chose qui me plaisait.
        Des sciences du Langage à l'IA pour enfin trouver ma place dans le
        Développement Web. Depuis 4 ans maintenant, je m'épanouis en tant que
        Développeuse Front-End et je travaille principalement avec des
        frameworks JS comme React et Next.js. 🤗
      </p>
    </FlexItem>
  );
}
