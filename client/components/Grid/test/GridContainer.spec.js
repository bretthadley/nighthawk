/**
 * Created by brett.hadley on 17/06/2016.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/Grid.scss';
import GridContainer from '../GridContainer.js';

describe('Grid/GridContainer.js tests', () => {
    it('should be null when no children passed to the grid', () => {
        const component = shallow(<GridContainer />);
        expect(component.html()).to.equal(null);
    });

    it('should be div when no component type is given', () => {
        const component = shallow(<GridContainer><p>Hello</p></GridContainer>);
        expect(component.type()).to.equal('div');
    });

    it('should be correct element when component type is given', () => {
        const component = shallow(<GridContainer componentType="a"><p>Hello</p></GridContainer>);
        expect(component.type()).to.equal('a');
    });

    it('should have the grid container class', () => {
        const component = shallow(<GridContainer><p>Hello</p></GridContainer>);
        expect(component.hasClass(styles['grid-container'])).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<GridContainer className="custom-class"><p>Hello</p></GridContainer>);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
