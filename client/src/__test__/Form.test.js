import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import Form from '../components/FormComponent';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {generateLabel} from '../components/FormComponent';
const faker = require('faker');

configure({ adapter: new Adapter() });

// Testing Component
it("Renders succesfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form></Form>, div);
});

// Testing Input
it('Capture email correctly onChange', function(){
    const component = mount(<Form />);
    // Returns first input component: email
    const input = component.find('input').at(0);
    const email = faker.Internet.email();
    input.instance().value = email;
    input.simulate('change');
    expect(component.state().email).toEqual(email);
});


it('Capture city correctly onChange', function(){
    const component = mount(<Form />);
    const input = component.find('input').at(2);
    const city = faker.Address.city();
    input.instance().value = city;
    input.simulate('change');
    expect(component.state().originCity).toEqual(city);
});


it('Capture zip correctly onChange', function(){
    const component = mount(<Form />);
    const input = component.find('input').at(5);
    const zip = faker.Address.zipCode();
    input.instance().value = zip;
    input.simulate('change');
    expect(component.state().originZip).toEqual(zip);
});

it('Email validation on correct value', function(){
    const component = mount(<Form />);
    // Returns first input component: email
    const input = component.find('input').at(0);
    const email = faker.Internet.email();
    const match = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.instance().value = email;
    input.simulate('change');
    expect(match.test(component.state().email)).toBe(true);
});