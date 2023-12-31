import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  cardWidth?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className,
  cardWidth = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`${className} ${cardWidth} rounded-lg text-white px-3 py-3 duration-200 font-medium bg-[#149eca]`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
