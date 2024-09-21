import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTasks } from "../app";
import styles from "./AddTask.module.css";

export default function AddTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTasks({ name, description });
    navigate("/");
  };

  return (
    <div className={styles.Container}>
      <h2 id={styles.title}>Add Task</h2>
      <form id={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Task Name"
          id={styles.nameField}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Detailed Information here..."
          id={styles.desField}
          required
        />
        <button id={styles.submitBtn} type="submit">Add Task</button>
      </form>
    </div>
  );
}
