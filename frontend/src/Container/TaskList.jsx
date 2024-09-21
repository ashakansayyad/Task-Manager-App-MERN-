import React from "react";
import { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../app";
import Task from "../components/task";
import styles from "./TaskList.module.css";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const taskData = async () => {
      const { data } = await getTasks();
   
      setTasks(data || []);
    
    };
    taskData();
  }, []);

  const handleStatus = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    // console.log(newStatus);
    await updateTask(id, { Completed: newStatus });

    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, Completed: newStatus } : task
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.listTitle}>Task List</h2>
      {tasks.length === 0 ? (
        <div className={styles.empty} >
        <h2>You don't have any task </h2>
        <button onClick={()=>navigate('/add')}>Add Task</button> 
        </div>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            handleDelete={handleDelete}
            handleStatus={handleStatus}
          />
        ))
      )}
    </div>
  );
}
