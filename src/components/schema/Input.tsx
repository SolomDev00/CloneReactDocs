import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="w-full border-[1px] border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none foucs:ring-1 focus:ring-[#149eca] rounded-md px-3 py-3 text-md"
      {...rest}
    />
  );
};

export default Input;
