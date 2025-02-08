import { useState } from "react";

export const InputField = ({
  id,
  label,
  type = "text",
  autoComplete = "off",
  value,
  onChange,
  error,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <div className="relative w-full max-w-sm mb-6">
      <input
        autoComplete={autoComplete}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full border-0 border-b-2 p-2 rounded focus:outline-none focus:ring-0 ${
          error ? "border-b-red-500" : "border-b-gray-300"
        }`}
      />
      <label
        htmlFor={id}
        className={`select-none absolute left-2 text-sm transition-all duration-200 ${
          isFocused || value ? "top-[-15px]" : "top-[10px]"
        } ${
          isFocused ? "text-blue-600" : error ? "text-red-500" : "text-gray-400"
        }`}
      >
        {label}
      </label>
      {
        <p
          className={`mt-1 text-sm text-red-500 ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          Please fill in this field.
        </p>
      }
    </div>
  );
};
