import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/Overlay.scss';
import Overlay from '../Overlay.js';

describe('Overlay/Overlay.js tests', () => {
    it('Should have default theme of dark', () => {
        const defaultTheme = shallow(<Overlay />);
        expect(defaultTheme.hasClass(styles['overlay--dark'])).to.equal(true);
    });

    it('Should have correct light theme class', () => {
        const light = shallow(<Overlay theme="light" />);
        expect(light.hasClass(styles['overlay--light'])).to.equal(true);
    });

    it('Should have correct dark theme class', () => {
        const dark = shallow(<Overlay theme="dark" />);
        expect(dark.hasClass(styles['overlay--dark'])).to.equal(true);
    });

    it('Should have default overlay class', () => {
        const component = shallow(<Overlay />);
        expect(component.hasClass(styles.overlay)).to.equal(true);
    });

    it('Should exist', () => {
        const component = shallow(<Overlay />);
        expect(component).to.not.equal(null);
    });

    it('Should change the dom element when given correct prop componentType', () => {
        const component1 = shallow(<Overlay componentType="div" />);
        const component2 = shallow(<Overlay componentType="section" />);
        expect(component1.is('div')).to.equal(true);
        expect(component2.is('section')).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<Overlay className="custom-class" />);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});

