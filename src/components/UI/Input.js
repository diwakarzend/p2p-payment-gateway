import React from "react";

export default function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  error,
  errorMessage,
  ...rest
}) {
  return (
    <div className={`${className} form-group-wrap`}>
      <div className="form-group rounded-lg relative border border-black border-solid">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`block px-6 py-4 h-16 w-full text-12 text-grey appearance-none focus:outline-none bg-transparent relative z-10`}
          {...rest}
        />
        <label
          for={name}
          className={`absolute text-12 text-grey top-0 left-0 text-lg bg-white h-16 px-6 py-5 rounded-lg duration-300`}
        >
          {placeholder}
        </label>
      </div>
      {error && (
        <div className="error-msg text-red text-left text-12 mt-2">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
