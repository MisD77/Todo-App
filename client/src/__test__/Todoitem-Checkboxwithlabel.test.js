import { cleanup, fireEvent, render } from "@testing-library/react";
import Todoitem from "../components/TodoItem";

afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <TodoItem labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
