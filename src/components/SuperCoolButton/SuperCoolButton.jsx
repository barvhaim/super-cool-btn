import React from 'react';
import styles from "./super-cool-button.module.scss";

const SuperCoolButton = ({title}) => {
  return (
    <button className={styles['super-cool-button']} role={"button"}>
      {title}
    </button>
  );
};

export default SuperCoolButton;

