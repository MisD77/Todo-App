import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import React from "react";
import Header from "./components/Header";
Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  it("should render my component", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
