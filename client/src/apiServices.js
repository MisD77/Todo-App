import axios from "axios";
export const apiUrl = "http://localhost:8080/api/tasks";

export function getAllTasks() {
  try {
    return axios.get(apiUrl);
  } catch (error) {
    return [];
  }
}

export function addTask(task) {
  return axios.post(apiUrl, task);
}

// export function deleteTask(id) {
//   return axios.delete(apiUrl + "/" + id);
// }

export function updateTask(task, id) {
  const filterTask = task.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    //axios.put(apiUrl + "/" + id, item);
    return item;
  });
  return filterTask;
}

export function deleleteTask(task, id) {
  return task.filter((task) => task.id !== id);
}
