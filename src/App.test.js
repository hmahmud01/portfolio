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
	it('Main App Wrapper Component Loaded', function() {
		const wrapper = shallow(<App />);
		const comps = <OuterLayout />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
	it('Inner Side of the wrapper Component Loaded', function() {
		const wrapper = shallow(<OuterLayout />);	
		const comps = <InnerLayout />							
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Splash(Home Page) Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Splash />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Introduction(of Hasan Mahmud) Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Intro />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Experience(Over career experience with timeline) Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Work />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Skill(All Skill Set) Component Loaded', function() {
		const wrapper = shallow(<InnerLayout />);
		const comps = <Skill />;
		expect(wrapper.contains(comps)).to.equal(true);
  });
  it('Portfolio(works outside of the job experience) Component Loaded', function() {
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