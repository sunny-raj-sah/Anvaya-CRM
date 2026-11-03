const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
    required,
  min,
}) => {
  return (
    <div className="mb-3">

      <label className="form-label fw-semibold">
        {label}
      </label>

      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
          required={required}
        min={min}
        onChange={onChange}
      />

    </div>
  );
};

export default Input;