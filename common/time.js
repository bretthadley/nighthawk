const HOURS_IN_DAY = 7.5;
const DAYS_IN_WEEK = 5;
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
