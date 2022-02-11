import React from 'react';
import {render, cleanup, waitforElement} from '@testing-library/react'
import axios from "axios";
jest.mock("axios");
import App, { getAllTasks } from "./App";

describe("When api all pass", () => {
  test("should return all the todo list on success", async () => {
    //
    //render(<App />);
    const tasks = [
      { id: 1, name: "Buy eggs", date: "2020-02-09" },
      { id: 2, name: "Finish a book", date: "2021-02-10" },
    ];
    axios.get.mockResolvedValueOnce(tasks);

    //when
    const results = await App.getAllTasks();

    //then
    await expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8080/api/tasks"
    );
    //await expect(results).toEqual(tasks);
  });
});
