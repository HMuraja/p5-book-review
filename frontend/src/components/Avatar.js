import React from "react";
import styles from "../styles/Avatar.module.css";


const Avatar = ({ src, height = 45, text, navBar }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {navBar && 
      <br/>}
      {text}
    </span>
  );
};

export default Avatar;