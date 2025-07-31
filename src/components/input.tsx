import React from "react";

interface Iinput{
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string
}

function Input({handleChange, name}: Iinput) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} onChange={handleChange} className="border-2 max-sm:w-50" />
    </>
  );
}

export default Input;
