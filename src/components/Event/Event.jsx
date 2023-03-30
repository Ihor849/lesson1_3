import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock
} from "react-icons/fa";
import PropTypes from 'prop-types';
import css from './Event.module.css';
// import { formatEventStart } from 'utils/formatEventStart'
// import {formatEventDuretion} from 'utils/FormatEventDuration' вместо них
import { formatEventStart, formatEventDuretion } from 'utils'
import {iconSize} from "constans";

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuretion(start, end)

    // console.log(css);
    // console.log(css[type])
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                < FaMapMarkerAlt className={css.icon} size={iconSize.sm } />
                {location}
            </p>
            <p className={css.info}>
                < FaUserAlt className={css.icon} size={iconSize.md} />
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={iconSize.la}/>
                {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon}/>
                {duration}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </div>
    );
    
};
Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}