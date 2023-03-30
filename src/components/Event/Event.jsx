import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock
} from "react-icons/fa";
import PropTypes from 'prop-types';
// import css from './Event.module.css';
import {Card, EventName, Info, Chip} from './Event.styled'
// import { formatEventStart } from 'utils/formatEventStart'
// import {formatEventDuretion} from 'utils/FormatEventDuration' вместо них
import { formatEventStart, formatEventDuretion } from 'utils'
import {iconSize} from "constants";

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuretion(start, end)

    // console.log(css);
    // console.log(css[type])
    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                < FaMapMarkerAlt size={iconSize.sm } />
                {location}
            </Info>
            <Info>
                < FaUserAlt size={iconSize.md} />
                {speaker}
            </Info>
            <Info>
                <FaCalendarAlt size={iconSize.la}/>
                {formattedStart}
            </Info>
            <Info>
                <FaClock />
                {duration}
            </Info>
            <Chip eventType={type} >{type}</Chip>
        </Card>
    );
    
};
// Chip
/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */
Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}