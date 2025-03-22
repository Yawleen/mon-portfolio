import style from "./Timeline.module.css"
import FeatherIcon from "feather-icons-react"
import { Fragment } from "react"

export default function Timeline({ eventsList }) {
    return (
        <div className={style.container}>
            {eventsList.map((event) => (
                <Fragment key={event.id}>
                    <div className={style.timelineContainer}>
                        <div className={style.timeline}>
                            <div className={style.bullet}>
                                <FeatherIcon icon="chevron-right" size="12" fill="white" stroke="white" strokeWidth={4} />
                            </div>
                        </div>
                    </div>
                    <div className={style.eventContainer}>
                        <div className={style.event}>
                            <p className={style.eventName}>{event.name}</p>
                            <p className={style.eventPeriod}>{event.period}</p>
                            <p className={style.eventPlace}>{event.place}</p>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}