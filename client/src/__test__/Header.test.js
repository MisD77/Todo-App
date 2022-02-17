import { render } from "@testing-library/react";
import Header from "../components/Header";

test("should render header of the app", () => {
  const { getByText } = render(<Header />);
  //const result =
  getByText("MY TODO APP");
  //expect(getByText('MY TODO APP')).toEqual('MY TODO APP')
});

test("should render header with text", () => {
  const { getByText } = render(<Header text="Hello" />);
  //const result =
  getByText("Hello");
  //expect(getByText('MY TODO APP')).toEqual('MY TODO APP')
});
