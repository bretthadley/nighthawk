/**
 * Created by Brett Hadley on 23/08/2016.
 */
export function isOneOf(one, of) {
    if (Array.isArray(of)) {
        return of.indexOf(one) >= 0;
    }
    return one === of;
}
