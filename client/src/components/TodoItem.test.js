import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";
import { act } from "react-dom/test-utils";

describe("TodoItem Component", () => {
  test("rendered checkbox", () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <TodoItem item={["test", true]} />
    );
    const checkBox = getByTestId("todo-checkbox");

    expect(checkBox).toBeTruthy();
  });
});
