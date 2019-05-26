import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect, assert } from 'chai';

import App from './App';
import Skill from './components/Skill';
import Footer from './components/Footer';
import InnerLayout from './components/InnerLayout';
import Intro from './components/Intro';
import OuterLayout from './components/OuterLayout';
import Portfolio from './components/Portfolio';
import Splash from './components/Splash';
import Work from './components/Work';


import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('hmahmud01 component load test', function(){
	it('App OuterLayout Component Loaded', function() {
		const wrapper = shallow(<App />);
		const comps = <OuterLayout />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
	it('InnerLayout Component Loaded', function() {
		const wrapper = shallow(<OuterLayout />);	
		const comps = <InnerLayout />							
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Splash Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Splash />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Introduction Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Intro />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Experience Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Work />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Skill Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Skill />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Portfolio Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Portfolio />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
	it('Footer Component Loaded', function() {
		const wrapper = shallow(<OuterLayout />);
		const comps = <Footer />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
});