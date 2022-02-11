import React from "react";
import { render, cleanup, waitforElement } from "@testing-library/react";
import axios from "axios";
jest.mock("axios");
import { getAllTasks } from "./App";

describe("When getall task api call is passed", () => {
  test("should return all the todo list on success", async () => {
    //given
    const tasks = [
      { id: 1, name: "Buy eggs", date: "2020-02-09" },
      { id: 2, name: "Finish a book", date: "2021-02-10" },
    ];

    axios.get.mockResolvedValueOnce(tasks);

    //when
    const results = await getAllTasks();
    console.log(results);

    //then
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/api/tasks");
    expect(results).toEqual(tasks);
  });
});
