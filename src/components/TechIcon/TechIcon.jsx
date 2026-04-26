import { IconContext } from 'react-icons';
import { FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';
import style from './TechIcon.module.css';

export default function TechIcon({
  iconName,
  size = 24,
  color = 'white',
  tooltipId,
  tooltipContent,
}) {
  const icons = {
    react: FaReact,
    next: RiNextjsFill,
    html: FaHtml5,
    css: FaCss3Alt,
    js: SiJavascript,
    ts: SiTypescript,
    tailwindcss: RiTailwindCssFill,
  };

  const IconComponent = icons[iconName];

  return (
    <IconContext.Provider value={{ size, color }}>
      <IconComponent
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
      />
      <Tooltip
        id={tooltipId}
        place="bottom"
        className={style.customTooltip}
        arrowColor="transparent"
        offset={2}
      />
    </IconContext.Provider>
  );
}
