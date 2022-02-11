jest.mock("axios", () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

import axios from "axios";
import App, { apiUrl, getAllTasks, addTodo } from "./App";

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

//unit test for get
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

//unit test for post
describe("When addNewTodo api call passed", () => {
  test("should add a newTodo to the list ", async () => {
    //given

    const context = {
      tasks: { id: 1, name: "Buy eggs", date: "2020-02-09" },
      commit: jest.fn(),
    };

    const response = {
      todos: [
        { id: 1, name: "Buy eggs", date: "2020-02-09" },
        { id: 2, name: "Finish a book", date: "2021-02-10" },
      ],
    };

    axios.post.mockResolvedValue(response);

    //when
    await App.addTodo(context);
    //then
    expect(axios.post).toHaveBeenCalledWith(apiUrl, newTask);
  });
});

describe("When addNewTodo api call fails", () => {
  test("shouldnot add a newTodo to the list ", async () => {});
});
