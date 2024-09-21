import React from 'react'
import styles from "./EditTask.module.css"
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { updateTask } from '../app';
import {useNavigate} from 'react-router-dom';
import { getSpeceficTask } from '../app';
export default function EditTask() {
const [task,setTask]=useState({});
const navigate =useNavigate();
const {id} = useParams();

useEffect(()=>{
  const fetchTask =async()=>{
    const {data} = await getSpeceficTask(id);
    setTask(data);
  };
  fetchTask();

},[id]);

const handleSubmit =async(e)=>{
  e.preventDefault();
  await updateTask(id,task);
  navigate('/')
}


  return (
    <div className={styles.editTaskContainer} >
      <h1 className={styles.title} >Edit Task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Enter New Task :</h3>
        <input
          type="text"
          value={task.name || ""}
          onChange={(e) => setTask({...task,name:e.target.value})}
          placeholder={task.name}
          className={styles.nameField}
          required
        />
        <h3>Enter New Description : </h3>
        <textarea
          value={task.description || ""}
          onChange={(e) => setTask({...task,description:e.target.value})}
          placeholder={task.description}
          className={styles.desField}
          required
        />
        <button className={styles.addBtn} type="submit">Add Task</button>
      </form>
    </div>
  )
}
