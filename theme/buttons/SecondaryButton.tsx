import React from "react";

type Props = {
  text: string;
  type: string;
  leftIconPath: string;
  fullWidth: boolean;
  onClick: any;
  children: React.ReactNode;
};

export default function SecondaryButton({
  children,
  type = "button",
  leftIconPath,
  fullWidth = false,
}: Props) {
  return (
    <button
      type={type}
      className={`text-Azul-1 border-Azul-1 rounded-[10px] border px-6 py-3 ${
        fullWidth && "w-full"
      }`}
      onClick={onclick}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          {leftIconPath && <img src={leftIconPath} alt="" />}
          {children}
        </div>
      </div>
    </button>
  );
}
