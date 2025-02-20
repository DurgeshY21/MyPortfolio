// import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
  return (

    <nav className= {styles.navbar}>
      <a className={styles.title} href='/'>Portfolio</a>

      <div className={styles.menu}>
      <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-button"/>
       <ul className={styles.menuItems}>
       <li><a href="#about">Home</a></li>
       <li><a href="#home"> About</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#training">Training</a></li>
       <li><a href="#internship">Internships</a></li>
       <li><a href="#certificate">Certificates</a></li>
       <li><a href="#contact">Contact</a></li>
       
       </ul>
      
      </div>
    </nav>
  )
}


