import classNames from "classnames";
import { createElement } from "react";

const Button = ({ children, variant, size, as = "button", ...props }) => {
  return createElement(
    as,
    {
      ...props,
      className: classNames(
        "h-10 rounded-md border border-zinc-300 transition duration-200 ease-out flex items-center justify-center",
        {
          "bg-white text-black":
            variant === "primary",
          "w-36 px-4 py-2": size === "large",
          "w-[264px]": size === "xlarge",
        },
      ),
    },
    children,
  );
};

export default Button;
