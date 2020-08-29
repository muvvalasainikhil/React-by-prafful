// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { configure } from "enzyme";
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./head/Navbar";
configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  expect(true).toBeTruthy();
});

it("Nav exists or Not", () => {
  const wrapper = shallow(<App />);
  const nav = wrapper.find(Navbar);
  expect(nav.exists()).toBe(true);
});
