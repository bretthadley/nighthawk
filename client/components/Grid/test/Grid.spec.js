/**
 * Created by brett.hadley on 28/06/2016.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/Grid.scss';
import Grid from '../Grid.js';


describe('Grid/Grid.js tests', () => {
    it('should be null when no children passed to the grid', () => {
        const component = shallow(<Grid />);
        expect(component.html()).to.equal(null);
    });

    it('should be div when no component type is given', () => {
        const component = shallow(<Grid><p>Hello</p></Grid>);
        expect(component.type()).to.equal('div');
    });

    it('should be correct element when component type is given', () => {
        const component = shallow(<Grid componentType="a"><p>Hello</p></Grid>);
        expect(component.type()).to.equal('a');
    });

    it('should reverse class when given property reverse', () => {
        const component = shallow(<Grid reverse><p>Hello</p></Grid>);
        expect(component.hasClass(styles['grid--rev'])).to.equal(true);
    });

    it('should have correct align class when given property', () => {
        const component1 = shallow(<Grid align="right"><p>Hello</p></Grid>);
        const component2 = shallow(<Grid align="center"><p>Hello</p></Grid>);

        expect(component1.hasClass(styles['grid--right'])).to.equal(true);
        expect(component1.hasClass(styles['grid--center'])).to.equal(false);

        expect(component2.hasClass(styles['grid--center'])).to.equal(true);
        expect(component2.hasClass(styles['grid--right'])).to.equal(false);
    });

    it('should have correct align verticle class when given property', () => {
        const component1 = shallow(<Grid alignVertical="middle"><p>Hello</p></Grid>);
        const component2 = shallow(<Grid alignVertical="bottom"><p>Hello</p></Grid>);

        expect(component1.hasClass(styles['grid--middle'])).to.equal(true);
        expect(component1.hasClass(styles['grid--bottom'])).to.equal(false);

        expect(component2.hasClass(styles['grid--bottom'])).to.equal(true);
        expect(component2.hasClass(styles['grid--middle'])).to.equal(false);
    });

    it('should have correct spacing class when given property', () => {
        const component1 = shallow(<Grid spacing="narrow"><p>Hello</p></Grid>);
        const component2 = shallow(<Grid spacing="full"><p>Hello</p></Grid>);
        const component3 = shallow(<Grid spacing="wide"><p>Hello</p></Grid>);

        expect(component1.hasClass(styles['grid--narrow'])).to.equal(true);
        expect(component1.hasClass(styles['grid--full'])).to.equal(false);
        expect(component1.hasClass(styles['grid--wide'])).to.equal(false);

        expect(component2.hasClass(styles['grid--full'])).to.equal(true);
        expect(component2.hasClass(styles['grid--narrow'])).to.equal(false);
        expect(component2.hasClass(styles['grid--wide'])).to.equal(false);

        expect(component3.hasClass(styles['grid--wide'])).to.equal(true);
        expect(component3.hasClass(styles['grid--full'])).to.equal(false);
        expect(component3.hasClass(styles['grid--narrow'])).to.equal(false);
    });

    it('should have custom class when componentClass prop is passed', () => {
        const component = shallow(<Grid componentClass="custom-class"><p>Hello</p></Grid>);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
