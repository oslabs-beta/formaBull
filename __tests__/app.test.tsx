import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import App from '../client/containers/App.tsx';
import { AddTab } from '../client/components/AddTab';

configure({ adapter: new Adapter() });

describe('FormaBull unit tests', () => {
  it('should render correctly with no props', () => {
    beforeAll(() => {
      let component
       component = shallow(<App />);
    });
    
    expect(component).toMatchSnapshot();
  });


  it('It should mount', () => {
    beforeAll(() => {
      let component
      component = shallow(<AddTab />);
    });
    expect(component.length).toBe(1)
  });


})


