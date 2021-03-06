jest.mock("axios", () => ({
  post: jest.fn(),
  get: jest.fn(),
  put: jest.fn(),
}));

import axios from "axios";
import App from "../App";
import * as react from "react";

import {
  apiUrl,
  getAllTasks,
  addTask,
  updateTask,
  deleleteTask,
} from "../apiServices";

describe("When getAllTasks api call is passed", () => {
  test("should return all todo list on success", async () => {
    //afterEach(jest.clearAllMocks);
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

//unit test for get fails
describe("When getAllTask api call fails", () => {
  test("should return empty list ", async () => {
    //given
    const message = new Error("return empty list");
    axios.get.mockResolvedValueOnce(message);
    //when
    const result = await getAllTasks();
    //then
    expect(axios.get).toHaveBeenCalledWith(apiUrl);
    expect(result).toEqual(message);
  });
});

//unit test for post
describe("When addNewTodo api call passed", () => {
  test("should add a newTodo to the list ", async () => {
    //afterEach(jest.clearAllMocks);
    //given
    const task = { id: 1, name: "Buy eggs", date: "2020-02-09" };
    axios.post.mockResolvedValue(task);

    //when
    const result = await addTask(task);

    //then
    expect(result).toEqual({ id: 1, name: "Buy eggs", date: "2020-02-09" });
    expect(axios.post).toHaveBeenCalledWith(apiUrl, task);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});

//test the uodate
it("marks the todo as completed", async () => {
  // const updateTask = jest.fn(() => [
  //   { id: 1, completed: true, name: "Go to mom house" },
  // ]);

  const startState = [{ _id: 1, completed: false, name: "Go to mom house" }];
  const finishedState = [{ _id: 1, completed: true, name: "Go to mom house" }];

  axios.put.mockResolvedValueOnce(finishedState, 1);
  const result = updateTask(startState, 1);

  // console.log("result", result);

  expect(result).toEqual(finishedState);
  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith(apiUrl + "/" + 1, finishedState[0]);
});

// test("deleteTodo deletes the todo it is given", () => {
//   const startState = [{ id: 1, completed: false, name: "Buy Milk" }];
//   const finState = deleleteTask(startState, 1);
//   expect(finState).toEqual([]);
// });
