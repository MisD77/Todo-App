import React from "react";
import { render, cleanup, waitforElement } from "@testing-library/react";
import axios from "axios";
jest.mock("axios");
import { apiUrl, getAllTasks } from "./App";

describe("When getAllTasks api call is passed", () => {
  test("should return all todo list on success", async () => {
    //given
    const todos = [
      { id: 1, name: "Buy eggs", date: "2020-02-09" },
      { id: 2, name: "Finish a book", date: "2021-02-10" },
    ];

    axios.get.mockResolvedValueOnce(todos);

    //when
    const results = await getAllTasks();

    //then
    expect(axios.get).toHaveBeenCalledWith(apiUrl);
    expect(results).toEqual(todos);
  });
});

describe("When getAllTask api call fails", () => {
  test("should return empty list ", async () => {
    //given
    const message = "Network Error";
    axios.get.mockRejectedValue(new Error(message));

    //when
    const result = await getAllTasks();

    //then
    expect(axios.get).toHaveBeenCalledWith(apiUrl);
    expect(result).toEqual([]);
  });
});
