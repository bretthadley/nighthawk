export const HOURS_IN_DAY = 7;
export const DAYS_IN_WEEK = 5;
const SUFFIXES = ['m', 'h', 'd', 'w'];

export const split = val => {
    const value = parseFloat(val.match(/[0-9]\D?[0-9]?/g)[0]);
    const suffix = val.match(/[a-zA-Z]/g)[0];
    return { value, suffix };
}

export const validate = val => {
    const { suffix } = split(val);
    return SUFFIXES.some(s => s === suffix);
}

export const stringToMins = val => {
    const { suffix, value } = split(val);
    if (suffix === 'm') {
        return value;
    } else if (suffix === 'h') {
        return value * 60;
    } else if (suffix === 'd') {
        return value * 60 * HOURS_IN_DAY;
    } else if (suffix === 'w') {
        return value * 60 * HOURS_IN_DAY * DAYS_IN_WEEK;
    }
}

export const minsToString = mins => {
    if(mins < 60) {
        return `${mins} minutes`;
    } else if((mins >= 60) && (mins < HOURS_IN_DAY * 60)) {
        const hours = mins / 60;
        return (hours > 1) ? `${hours} hours` : `1 hour`;
    } else if((mins >= HOURS_IN_DAY * 60) && (mins < DAYS_IN_WEEK * HOURS_IN_DAY * 60)) {
        const hours = mins / 60;
        const days = (hours / HOURS_IN_DAY).toFixed(2);
        return (days > 1) ? `${days} days` : `1 day`;
    } else if(mins >= DAYS_IN_WEEK * HOURS_IN_DAY * 60) {
        const hours = mins / 60;
        const days = (hours / HOURS_IN_DAY).toFixed(2);
        const weeks = days / DAYS_IN_WEEK;
        return (weeks > 1) ? `${weeks} weeks` : `1 week`;
    }
}
