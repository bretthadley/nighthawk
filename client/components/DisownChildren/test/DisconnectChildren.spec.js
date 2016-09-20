import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DisownChildren from '../DisownChildren.js';

describe('DisownChildren/DisownChildren.js tests', () => {
    it('Should render nothing if passed children', () => {
        const component = mount(
            <DisownChildren>
                <h1>Hello World</h1>
            </DisownChildren>
        );
        expect(component.html()).to.equal(null);
    });

    it('Should always render nothing', () => {
        const component = mount(<DisownChildren />);
        expect(component.html()).to.equal(null);
    });
});
