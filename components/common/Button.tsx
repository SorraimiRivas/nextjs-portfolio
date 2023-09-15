import { FC } from "react";

type ButtonProps = {
  label?: string;
  icon: React.ReactNode;
  color?: string;
};

const Button: FC<ButtonProps> = ({ label, icon, color }) => {
  return (
    <button
      className={`${color} flex flex-row justify-center items-center gap-2 rounded-full p-3 font-semibold`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
