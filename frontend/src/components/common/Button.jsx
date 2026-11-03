
const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  size,
  fullWidth = false,
}) => {
  const isPrimary = variant === "primary";

  const buttonStyle = {
    backgroundColor: isPrimary ? "#5946d2" : "#f0edff",
    color: isPrimary ? "#ffffff" : "#5946d2",
    border: `1px solid ${isPrimary ? "#5946d2" : "#e5e0ff"}`,
    borderRadius: "9px",
    fontWeight: "600",
    fontSize: "14px",
    padding: size === "sm" ? "7px 16px" : "10px 20px",
    transition: "all 0.2s ease",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.65 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(event) => {
        if (disabled) return;

        event.currentTarget.style.backgroundColor = isPrimary
          ? "#4432b2"
          : "#e5e0ff";

        event.currentTarget.style.borderColor = isPrimary
          ? "#4432b2"
          : "#d5ccff";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor = isPrimary
          ? "#5946d2"
          : "#f0edff";

        event.currentTarget.style.borderColor = isPrimary
          ? "#5946d2"
          : "#e5e0ff";
      }}
    >
      {children}
    </button>
  );
};

export default Button;
