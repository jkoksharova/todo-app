import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import {Link} from "react-router-dom";

configure({ adapter: new Adapter() });

describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />);
    const welcome = <Link to="/" className="navbar-brand">Todo App</Link>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});