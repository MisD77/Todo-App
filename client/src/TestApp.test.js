import * as React from "react";
import { render, fireEvent } from "@testing-library/react"

import { TestApp } from "./TestApp";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<TestApp />);

  getByText('TODOs');
  getByLabelText('What needs to be done?');
  getByText('Add #1');
});

