import styles from "./button.module.css";

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
      {children}
    </button>
  );
}