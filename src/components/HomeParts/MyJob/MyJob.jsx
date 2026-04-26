import style from './MyJob.module.css';
import FlexItem from '../../FlexItem/FlexItem';
import Typewriter from 'typewriter-effect';
import FeatherIcon from 'feather-icons-react';

export default function MyJob() {
  return (
    <FlexItem iconName="code">
      <div className={style.appNameContainer}>
        <div className={style.itemIcon}>
          <FeatherIcon
            icon="terminal"
            size="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </div>
        <code className={style.appName}>
          ~/Desktop/Dev/Web/React/mon-portfolio
        </code>
        <Typewriter
          options={{
            strings: 'npm run dev',
            autoStart: true,
            cursor: '▮',
            pauseFor: 300000,
          }}
        />
      </div>
      <div className={style.jobInfo}>
        <p className={style.jobName}>Développeuse Front-End</p>
      </div>
    </FlexItem>
  );
}
