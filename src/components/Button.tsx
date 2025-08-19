import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-brand-gold text-brand-charcoal font-sans font-bold rounded-md px-6 py-2 hover:bg-yellow-800 w-full h-12 flex items-center justify-center max-md:text-base"
    >
      {text}
    </button>
  );
};
export default Button;