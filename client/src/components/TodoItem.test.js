import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem Component", () => {
  test("should trigger a change when clicked", () => {
    const onChange = jest.fn();
    const { getByText, getByLabelText } = render(<TodoItem />);

    fireEvent.click(getByLabelText("Exercise"));
    expect(onChange).toHaveBeenCalled(1);
  });
});
