import { render } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem Component", () => {
  test("rendered checkbox", () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <TodoItem item={["test", true]} />
    );
    const checkBox = getByTestId("todo-checkbox");

    expect(checkBox).toBeTruthy();
  });
});
