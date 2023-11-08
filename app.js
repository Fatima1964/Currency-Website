const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// API Base URL (Replace with your API URL)
const apiUrl = 'https://jsonplaceholder.typicode.com';


// GET Request to Retrieve Tasks
app.get('/tasks', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const tasks = response.data;
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST Request to Create a Task
app.post('/tasks', async (req, res) => {
  try {
    const response = await axios.post(apiUrl, req.body);
    const newTask = response.data;
    res.json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a task' });
  }
});

// PUT Request to Update a Task (assuming the API supports it)
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const response = await axios.put(`${apiUrl}/${taskId}`, req.body);
    const updatedTask = response.data;
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the task' });
  }
});

// DELETE Request to Delete a Task (assuming the API supports it)
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    await axios.delete(`${apiUrl}/${taskId}`);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the task' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
