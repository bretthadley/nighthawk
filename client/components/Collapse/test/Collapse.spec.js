import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Collapse from '../Collapse.js';

describe('Collapse/Collapse.js tests', () => {
    /**
     * Due to the rendered dom not being physical it's not possible to get the height of a element
     * Had to code in a props override to the Collapse component to make the callback testable.
     */
    it('Should call onRest when animation toggled', (done) => {
        const onRestCallback = sinon.spy();
        const component = mount(<Collapse onRest={onRestCallback} height={1} expanded={false} />);
        component.setProps({ expanded: true, height: 100 });

        setTimeout(() => {
            try {
                expect(onRestCallback.calledOnce).to.equal(true);
                done();
            } catch (e) {
                done(e);
            }
        }, 1000);
    });

    it('Should exist', () => {
        const component = shallow(<Collapse />);
        expect(component.find('.motion-collapse')).to.not.equal(null);
    });

    it('Should change the dom element when given correct prop componentType', () => {
        const component1 = shallow(<Collapse componentType="div" />);
        const component2 = shallow(<Collapse componentType="section" />);
        expect(component1.is('div')).to.equal(true);
        expect(component2.is('section')).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<Collapse className="custom-class" />);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});
