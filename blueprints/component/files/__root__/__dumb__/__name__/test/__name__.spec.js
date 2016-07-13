import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/<%= pascalEntityName %>.scss';
import <%= pascalEntityName %> from '../<%= pascalEntityName %>.js';

describe('<%= pascalEntityName %>/<%= pascalEntityName %>.js tests', () => {
    it('should exist', () => {
        const component = shallow(<<%= pascalEntityName %> />);
        expect(component).to.not.equal(null);
    });
});
