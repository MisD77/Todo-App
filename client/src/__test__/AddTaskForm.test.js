import React from "react";
import { shallow } from "enzyme";
import AddTaskForm from "../components/AddTaskForm";
//import { Adapter } from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});
test('message box', ()=> {
  it("calls handleSubmit ", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<button onClick={mockCallBack}>Delete</button>);

    // wrapper.instance().handleSubmit = jest.fn();
    // let { handleSubmit } = wrapper.instance();
    // expect(handleSubmit).toHaveBeenCalledTimes(0);
    // wrapper.find("#button").simulate("click");
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    // wrapper.find(".btn").simulate("click");

    // expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
