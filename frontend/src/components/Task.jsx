import React from "react";
import { Link } from "react-router-dom";
import styles from "./Task.module.css";

export default function Task({ task, handleDelete, handleStatus }) {

  const createdAt = new Date(task.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = createdAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour24: "true",
  });
  return (
    <div className={styles.taskContainer}>
      <h2>{task.name}</h2>
      <p id={styles.description}>{task.description}</p>
      <div className={styles.statusConta}>
        <p id={styles.status}>Status : {task.Completed ? "Completed" : "Pending.."} </p>
        <button
          type="button"
          className={styles.changeStatus}
          onClick={() => handleStatus(task._id, task.Completed)}
        >
          change
        </button>
      </div>

      <p id={styles.dateTime}>
        {formattedDate} {formattedTime}
      </p>

      {/* Passing props in link tag  and use the state method*/}
      <Link id={styles.edit} to={`/edit/${task._id}`}>Edit</Link>

      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => handleDelete(task._id)}
      >
        Delete
      </button>
    </div>
  );
}
