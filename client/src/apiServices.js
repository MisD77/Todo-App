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

export function updateTask(id, task) {
  return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
  return axios.delete(apiUrl + "/" + id);
}
