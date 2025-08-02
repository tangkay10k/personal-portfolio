import styles from "./button.module.css";
import { SpinnerCircular } from "spinners-react";

export default function Button({
  type = "button",
  disabled,
  className = "",
  onClick,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.button}`}
      {...props}
    >
      {disabled ? <SpinnerCircular color="var(--grey)" size={20} /> : children}
    </button>
  );
}
