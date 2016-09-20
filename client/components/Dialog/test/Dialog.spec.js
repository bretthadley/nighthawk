import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import styles from '../style/Dialog.scss';
import Dialog from '../Dialog.js';

describe('Dialog/Dialog.js tests', () => {
    it('Should exist', () => {
        const component = shallow(<Dialog open />);
        expect(component).to.not.equal(null);
    });

    it('Should change the dom element when given correct prop componentType', () => {
        const component1 = shallow(<Dialog open componentType="div" />);
        const component2 = shallow(<Dialog open componentType="section" />);
        expect(component1.is('div')).to.equal(true);
        expect(component2.is('section')).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<Dialog open className="custom-class" />);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
