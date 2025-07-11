import axios from 'axios';

export const API_BASE_URL = "http://localhost:5000/api/users";
export const LOGS_URL = "http://localhost:5000/api";
// Get all users
export const getUsers = () =>
  axios.get(`${API_BASE_URL}/getusers`);

// Create a new user
export const createUser = (user) =>
  axios.post(`${API_BASE_URL}/createuser`, user);

// Update an existing user
export const updateUser = (id, user) =>
  axios.put(`${API_BASE_URL}/editeuser/${id}`, user);

// Soft delete a user
export const deleteUser = (id) =>
  axios.delete(`${API_BASE_URL}/deleteuser/${id}`);

// (Optional) Get logs
export const getLogs = () =>
  axios.get(`${LOGS_URL}/logs`);
