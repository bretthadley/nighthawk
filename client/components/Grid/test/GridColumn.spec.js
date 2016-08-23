/**
 * Created by brett.hadley on 17/06/2016.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/Grid.scss';
import GridColumn from '../GridColumn.js';


describe('Grid/GridColumn.js tests', () => {
    it('should be null when no children passed to the grid', () => {
        const component = shallow(<GridColumn xs="one-whole" />);
        expect(component.html()).to.equal(null);
    });

    it('should be div when no component type is given', () => {
        const component = shallow(<GridColumn><p>Hello</p></GridColumn>);
        expect(component.type()).to.equal('div');
    });

    it('should be correct element when component type is given', () => {
        const component = shallow(<GridColumn componentType="a"><p>Hello</p></GridColumn>);
        expect(component.type()).to.equal('a');
    });

    it('should have the grid item class', () => {
        const component = shallow(<GridColumn><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles.grid__item)).to.equal(true);
    });

    it('should have the width grid class when given property default', () => {
        const component = shallow(<GridColumn default="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['one-whole'])).to.equal(true);
    });

    it('should have xs grid class when given property', () => {
        const component = shallow(<GridColumn xs="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['xs--one-whole'])).to.equal(true);
    });

    it('should have sm grid class when given property', () => {
        const component = shallow(<GridColumn sm="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['sm--one-whole'])).to.equal(true);
    });

    it('should have md grid class when given property', () => {
        const component = shallow(<GridColumn md="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['md--one-whole'])).to.equal(true);
    });

    it('should have lg grid class when given property', () => {
        const component = shallow(<GridColumn lg="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['lg--one-whole'])).to.equal(true);
    });

    it('should have xlg grid class when given property', () => {
        const component = shallow(<GridColumn xlg="one-whole"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['xlg--one-whole'])).to.equal(true);
    });

    it('should allow for multiple grid layouts per breakpoint', () => {
        const component = shallow(<GridColumn xs="one-whole" sm="one-half" md="one-third" lg="one-quarter" xlg="one-fifth"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['xs--one-whole'])).to.equal(true);
        expect(component.hasClass(styles['sm--one-half'])).to.equal(true);
        expect(component.hasClass(styles['md--one-third'])).to.equal(true);
        expect(component.hasClass(styles['lg--one-quarter'])).to.equal(true);
        expect(component.hasClass(styles['xlg--one-fifth'])).to.equal(true);
    });

    it('should allow for push/pull grid layouts per breakpoint', () => {
        const component = shallow(<GridColumn xsPull="one-whole" smPush="one-half" mdPull="one-third" lgPush="one-quarter" xlgPull="one-fifth"><p>Hello</p></GridColumn>);
        expect(component.hasClass(styles['pull--xs--one-whole'])).to.equal(true);
        expect(component.hasClass(styles['push--sm--one-half'])).to.equal(true);
        expect(component.hasClass(styles['pull--md--one-third'])).to.equal(true);
        expect(component.hasClass(styles['push--lg--one-quarter'])).to.equal(true);
        expect(component.hasClass(styles['pull--xlg--one-fifth'])).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<GridColumn className="custom-class"><p>Hello</p></GridColumn>);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
