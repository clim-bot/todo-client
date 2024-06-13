import React, { useState } from 'react';
import { updateTask, deleteTask } from '../api';

const Task = ({ task, token, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    try {
      const updatedTask = { ...task, title, status };
      await updateTask(token, updatedTask);
      onUpdate(updatedTask);
      setIsEditing(false);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(token, task.id);
      onDelete(task.id);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
