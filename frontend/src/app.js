
import axios from 'axios';

const API_URL = "http://localhost:5000/api";


// 1.Create and  Send new task to backend 
export const createTasks = (task) => {
    return axios.post(`${API_URL}/tasks`,task);
}

// 2.get all tasks from backend 
export const getTasks = ()=>{
    return axios.get(`${API_URL}/tasks`);
}

// 3.get the specefic task from backend
export const getSpeceficTask = (id) => {
    return axios.get(`${API_URL}/tasks/${id}`);
}

// 4.Update the specefic task 
export const updateTask = (id,updatedTask) => {
    return axios.put(`${API_URL}/tasks/${id}`,updatedTask);
}

// 5.Delete specefic task
export const deleteTask = (id) => {
    return axios.delete(`${API_URL}/tasks/${id}`);
}