/**
 * Created by brett.hadley on 17/06/2016.
 */
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/Cta.scss';
import Cta from '../Cta.js';

describe('Cta/Cta.js tests', () => {
    it('should be disabled when disabled prop is true', () => {
        const component = shallow(<Cta disabled />);
        expect(component.hasClass(styles.disabled)).to.equal(true);
    });

    it('should not be disabled when disabled prop is false', () => {
        const component = shallow(<Cta disabled={false} />);
        expect(component.hasClass(styles.disabled)).to.equal(false);
    });

    it('should have primary class when ctaType prop is primary', () => {
        const component = shallow(<Cta ctaType="primary" />);
        expect(component.hasClass(styles.primary)).to.equal(true);
    });

    it('should have secondary class when ctaType prop is secondary', () => {
        const component = shallow(<Cta ctaType="secondary" />);
        expect(component.hasClass(styles.secondary)).to.equal(true);
    });

    it('should have custom class when componentClass prop is passed', () => {
        const component = shallow(<Cta componentClass="custom-class" />);
        expect(component.hasClass('custom-class')).to.equal(true);
    });

    it('should fire onClick function when clicked', () => {
        const onClickCallback = sinon.spy();
        const component = shallow(<Cta onClick={onClickCallback} />);
        component.simulate('click');
        expect(onClickCallback.calledOnce).to.equal(true);
    });

    it('should have correct text when child passed', () => {
        const component = shallow(<Cta>Hello</Cta>);
        expect(component.text()).to.equal('Hello');
    });

    it('should have target blank when given openInNewTab', () => {
        const component = shallow(<Cta openInNewTab>Hello</Cta>);
        expect(component).to.have.attr('target', '_blank');
    });

    it('should have correct href when given property', () => {
        const url = 'www.google.com';
        const component = shallow(<Cta href={url}>Hello</Cta>);
        expect(component).to.have.attr('href', url);
    });

    it('should have correct role when given property', () => {
        const role = 'button';
        const component = shallow(<Cta ariaRole={role}>Hello</Cta>);
        expect(component).to.have.attr('role', role);
    });
});
