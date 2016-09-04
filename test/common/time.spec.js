import { expect } from 'chai';
import { validate, stringToMins, split } from '../../common/time';

describe('time', () => {
    it('should return true when value ends in supported suffix', () => {
        expect(validate('1m')).to.be.true;
        expect(validate('1h')).to.be.true;
        expect(validate('1d')).to.be.true;
        expect(validate('1w')).to.be.true;
        expect(validate('1x')).to.be.false;
    });

    it('should split numbers and letters',  () => {
        expect(split('24m')).to.deep.equal({ value: 24, suffix: 'm' });
        expect(split('1d')).to.deep.equal({ value: 1, suffix: 'd' });
        expect(split('1.5h')).to.deep.equal({ value: 1.5, suffix: 'h' });
    });

    it('should convert to correct mins depending on suffix', () => {
        expect(stringToMins('1m')).to.equal(1);
        expect(stringToMins('70m')).to.equal(70);
        expect(stringToMins('1h')).to.equal(60);
        expect(stringToMins('1.5h')).to.equal(90);
        expect(stringToMins('1d')).to.equal(60 * 7.5);
        expect(stringToMins('1w')).to.equal(60 * 7.5 * 5);
    });
});
