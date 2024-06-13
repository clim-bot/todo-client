import React, { useEffect, useState } from 'react';
import { getTasks, createTask } from '../api';
import Task from './Task';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(token);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Fetch tasks failed:', error);
      }
    };

    fetchTasks();
  }, [token]);

  const handleCreateTask = async () => {
    try {
      const newTask = { title: newTaskTitle, status: newTaskStatus };
      const response = await createTask(token, newTask);
      setTasks([...tasks, response.data.task]);
      setNewTaskTitle('');
      setNewTaskStatus('');
    } catch (error) {
      console.error('Create task failed:', error);
    }
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Status"
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
        />
        <button onClick={handleCreateTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id} // Add a unique key prop here
          task={task}
          token={token}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
