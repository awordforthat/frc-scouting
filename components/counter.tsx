/* eslint-disable no-unused-vars */
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styles from "../styles/Counter.module.scss";

interface ICounterProps {
  label?: string;
  onChange?: (value: number) => void;
}

export function Counter({ label, onChange }: ICounterProps) {
  const [value, setValue] = useState<number>(0);

  /**
   * Report value changes.
   */
  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <div className={styles.counterContainer}>
      <div className={styles.label}>{label}</div>
      <div className={styles.counter}>
        <div className={styles.button} onClick={decrease}>
          <span>-</span>
        </div>
        <div className={styles.value}>{value}</div>
        <div className={styles.button} onClick={increase}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}
