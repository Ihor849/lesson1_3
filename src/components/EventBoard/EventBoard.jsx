import PropTypes from 'prop-types'

import { Event } from 'components/Event/Event'
// import css from './EventBoard.module.css'
import {Board} from './EventBoard.styled'


export const EventBoard = ({events}) => {
    // console.log(events)
    return (
        <Board>
            {events.map(({name,location,speaker,type,time}) => (
                <Event
                    key={name}
                    name={name}
                    location={location}
                    speaker={speaker}
                    type={type}
                    start={time.start}
                    end={time.end} />
            // <div key={event.name}>{event.name}</div>
            ))}
        </Board>
    );

}
EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
           name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact( {
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            })
        },),
    ),
};