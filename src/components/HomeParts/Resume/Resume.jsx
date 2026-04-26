import style from './Resume.module.css';
import FlexItem from '../../FlexItem/FlexItem';

export default function Resume() {
  return (
    <FlexItem
      iconName="download"
      title="Mon CV"
      titleColor="#1B1B1B"
      bgColor="#ffffff79"
    >
      <a
        className={style.link}
        aria-label="Voir mon CV"
        href={`${import.meta.env.BASE_URL}docs/cv_yolene_constable_dev_frontend.pdf`}
        download
      />
    </FlexItem>
  );
}
