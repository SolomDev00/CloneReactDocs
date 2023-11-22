import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: IProps) => {
  return (
    <textarea
      className="w-full border-[1px] border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none foucs:ring-1 focus:ring-[#149eca] rounded-md px-3 py-3 text-md"
      rows={6}
      {...rest}
    />
  );
};

export default Textarea;
