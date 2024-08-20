import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

export const getAllTasks = () => taskApi.get('/')

export const getTask = (taskId) => taskApi.get(`/${taskId}/`)

export const createTask = (task) => taskApi.post('/', task)

export const deleteTask = (taskId) => taskApi.delete(`/${taskId}/`)

export const updateTask = (taskId, task) => taskApi.put(`/${taskId}/`, task)