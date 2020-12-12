import Moment from 'moment';

const calculatedTime = (date)=> {
        let duration = Moment.duration(Moment().diff(Moment(date)));
        const days = Math.floor(duration.asDays());
        const daysFormatted = days ? `${days} days ` : ''; 
        const hours = duration.hours();
        const hoursFormatted = `${hours} hours `;
        const minutes = duration.minutes();
        const minutesFormatted = `${minutes} minutes`;
        return daysFormatted ? daysFormatted : hoursFormatted ? hoursFormatted : minutesFormatted ? minutesFormatted : 'now';
    };



export default calculatedTime;