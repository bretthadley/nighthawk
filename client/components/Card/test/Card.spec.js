import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import styles from '../style/Card.scss'; // TODO add tests for classes
import { Card, CardHeader, CardContent, CardActions } from '../';

describe('Card/Card.js tests', () => {
    it('Should exist', () => {
        const component = shallow(
            <Card>
                <CardHeader>
                    <img
                        alt="example"
                        src="http://placekitten.com/200/50"
                    />
                </CardHeader>
            </Card>);
        expect(component).to.not.equal(null);
    });

    it('Should change the dom element when given correct prop componentType', () => {
        const component1 = shallow(<Card componentType="div" />);
        const component2 = shallow(<Card componentType="section" />);
        expect(component1.is('div')).to.equal(true);
        expect(component2.is('section')).to.equal(true);
    });

    it('should have custom class when className prop is passed', () => {
        const component = shallow(<Card className="custom-class" />);
        expect(component.hasClass('custom-class')).to.equal(true);
    });
});

describe('Card/CardHeader.js tests', () => {
    it('Should exist', () => {
        const component = shallow(<CardHeader />);
        expect(component).to.not.equal(null);
    });

    it('Should allow for text to be entered', () => {
        const component = shallow(<CardHeader>Hello</CardHeader>);
        expect(component.text()).to.equal('Hello');
    });

    it('Should allow for children dom elements', () => {
        const component = shallow(<CardHeader><p>Hello</p></CardHeader>);
        expect(component.contains(<p>Hello</p>)).to.equal(true);
    });
});

describe('Card/CardContent.js tests', () => {
    it('Should exist', () => {
        const component = shallow(<CardContent />);
        expect(component).to.not.equal(null);
    });

    it('Should allow for text to be entered', () => {
        const component = shallow(<CardContent>Hello</CardContent>);
        expect(component.text()).to.equal('Hello');
    });

    it('Should allow for children dom elements', () => {
        const component = shallow(<CardContent><p>Hello</p></CardContent>);
        expect(component.contains(<p>Hello</p>)).to.equal(true);
    });

    it('Should have title <H3> when given property of title', () => {
        const component = shallow(<CardContent title="My Title" />);
        expect(component.find('h3').text()).to.equal('My Title');
    });
});

describe('Card/CardActions.js tests', () => {
    it('Should exist', () => {
        const component = shallow(<CardActions />);
        expect(component).to.not.equal(null);
    });

    it('Should allow for text to be entered', () => {
        const component = shallow(<CardActions>Hello</CardActions>);
        expect(component.text()).to.equal('Hello');
    });

    it('Should allow for children dom elements', () => {
        const component = shallow(<CardActions><p>Hello</p></CardActions>);
        expect(component.contains(<p>Hello</p>)).to.equal(true);
    });
});
