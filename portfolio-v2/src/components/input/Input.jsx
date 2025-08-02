import React from "react";
import styles from "./input.module.css";

const Input = React.forwardRef(function Input(
  { placeholder, type = "text", disabled = false, className = "", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={`${styles.input} ${className}`.trim()}
      {...props}
    />
  );
});

export default Input;
