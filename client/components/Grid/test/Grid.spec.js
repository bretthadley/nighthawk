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
        const component1 = shallow(<Grid spacing="lg"><p>Hello</p></Grid>);
        const component2 = shallow(<Grid lgSpacing="sm"><p>Hello</p></Grid>);
        const component3 = shallow(<Grid xlgSpacing="none"><p>Hello</p></Grid>);

        expect(component1.hasClass(styles['grid--spacing--lg'])).to.equal(true);

        expect(component2.hasClass(styles['lg--grid--spacing--sm'])).to.equal(true);

        expect(component3.hasClass(styles['xlg--grid--spacing--none'])).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<Grid className="custom-class"><p>Hello</p></Grid>);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
