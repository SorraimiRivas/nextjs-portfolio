type ButtonProps = {
  label?: string;
  icon: React.ReactNode;
  color?: string;
};

const Button = ({ label, icon, color }: ButtonProps) => {
  return (
    <button
      className={`${color} flex flex-row justify-center items-center gap-2 rounded-full py-3 px-7 font-semibold`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
