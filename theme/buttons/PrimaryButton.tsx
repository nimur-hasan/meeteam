import React from "react";

type Props = {
  text: string;
  type: string;
  fullWidth: boolean;
  onClick: any;
  children: React.ReactNode;
};

export default function PrimaryButton({
  text,
  type = "button",
  fullWidth = false,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={`text-Blanco bg-Azul-1 rounded-[10px] px-6 py-3 ${
        fullWidth && "w-full"
      }`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
