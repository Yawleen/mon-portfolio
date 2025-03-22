import style from "./Timeline.module.css"
import FeatherIcon from "feather-icons-react"
import { Fragment } from "react"

export default function Timeline({ eventsList }) {
    if (eventsList.length > 0) {
        return (
            <>
                {eventsList.length > 1 ? (
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
                                        {event.details && <p className={style.eventDetails}>{event.details}</p>}
                                        {event.place && <p className={style.eventPlace}>{event.place}</p>}
                                        {event.link && <a className={style.eventLink} href={event.link} target="_blank">Consulter</a>}
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div className={style.eventContainer}>
                        <div className={style.event}>
                            <p className={style.eventName}>{eventsList[0].name}</p>
                            <p className={style.eventPeriod}>{eventsList[0].period}</p>
                            {eventsList[0].details && <p className={style.eventDetails}>{eventsList[0].details}</p>}
                            {eventsList[0].place && <p className={style.eventPlace}>{eventsList[0].place}</p>}
                            {eventsList[0].link && <a className={style.eventLink} href={eventsList[0].link} target="_blank">Consulter</a>}
                        </div>
                    </div>
                )}
            </>
        )
    }
}