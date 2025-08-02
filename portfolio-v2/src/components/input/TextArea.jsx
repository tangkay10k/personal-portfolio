import React from "react";
import styles from "./input.module.css";

const TextArea = React.forwardRef(function Input(
  { placeholder, rows, disabled = false, className = "", ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      disabled={disabled}
      placeholder={placeholder}
      className={`${styles.textArea} ${className}`.trim()}
      {...props}
    />
  );
});

export default TextArea;