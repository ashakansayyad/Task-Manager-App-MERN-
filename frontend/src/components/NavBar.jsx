import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className={styles.container} >
       <nav className={styles.navContainer} >
             <NavLink id={styles.home} to={'/'}>Home</NavLink> 
             <NavLink id={styles.addtask} to={'/add'}>Add Task</NavLink> 
       </nav>
    </div>
  )
}
