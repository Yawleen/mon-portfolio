import style from "./MyJob.module.css"
import FlexItem from "../../FlexItem/FlexItem"
import Typewriter from 'typewriter-effect';
import FeatherIcon from "feather-icons-react";


export default function MyJob() {
  return (
    <FlexItem iconName="code">
      <div className={style.appNameContainer}>
        <div className={style.itemIcon}><FeatherIcon icon="terminal" size="20" stroke="white" strokeWidth={2.5} /></div>
        <code className={style.appName}>C:\Users\yoleneconstable\Documents\my-portfolio&gt;</code>
        <Typewriter
          options={{
            strings: "npm run dev",
            autoStart: true,
            cursor: "▮",
            pauseFor: 300000
          }}
        />
      </div>
      <div className={style.jobInfo}>
        <p className={style.jobName}>Développeuse Front-End JavaScript</p>
      </div>
    </FlexItem>
  )
}