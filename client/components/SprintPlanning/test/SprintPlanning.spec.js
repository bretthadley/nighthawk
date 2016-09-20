import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../style/SprintPlanning.scss';
import SprintPlanning from '../SprintPlanning.js';

describe('SprintPlanning/SprintPlanning.js tests', () => {
    it('Should exist', () => {
        const component = shallow(<SprintPlanning />);
        expect(component).to.not.equal(null);
    });
});
