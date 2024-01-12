"use client";

import { Field } from "formik";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange: any;
  value: string;
  error?: string;
  labelRight?: React.ReactNode;
};

export default function Input({
  id,
  name,
  label,
  type = "text",
  labelRight,
  placeholder,
  required = false,
  onChange,
  value,
  error,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-Negro" htmlFor={id}>
          {label} {required && "*"}
        </label>
        <div>{labelRight}</div>
      </div>
      <Field
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-Blanco border-Negro mt-3 rounded-[10px] border p-3"
        placeholder={placeholder}
        // required={required}
        {...rest}
      />
      {error && <div className="text-Naranja-1 ml-2">{error}</div>}
    </div>
  );
}
