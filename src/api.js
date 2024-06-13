import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const register = async (email, password) => {
  return axios.post(`${API_URL}/auth/register`, { email, password });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const getTasks = async (token) => {
  return axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: token },
  });
};

export const createTask = async (token, task) => {
  return axios.post(`${API_URL}/tasks`, task, {
    headers: { Authorization: token },
  });
};

export const updateTask = async (token, task) => {
  return axios.put(`${API_URL}/tasks`, task, {
    headers: { Authorization: token },
  });
};

export const deleteTask = async (token, taskId) => {
  return axios.delete(`${API_URL}/tasks`, {
    headers: { Authorization: token },
    data: { id: taskId },
  });
};
