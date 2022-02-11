import GetFirstTask from './GetFirstTask';
import axios from 'axios';
jest.mock("axios");

it("returns the title of the first album", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "My First Album",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
    ],
  });

  const title = await GetFirstTask();
  expect(title).toEqual("My First Album");
});
