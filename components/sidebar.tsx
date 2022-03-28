import TextField from "@mui/material/TextField";
import * as React from "react";
import styles from "../styles/Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <TextField label="Name"></TextField>
    </div>
  );
}
