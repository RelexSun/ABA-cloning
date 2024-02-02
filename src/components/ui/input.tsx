import * as React from "react";

import { cn } from "@/lib/utils";
import { CiSearch } from "react-icons/ci";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <CiSearch className="absolute text-slate-400 left-5" size={24} />
        <input
          type={type}
          className={cn(
            "flex h-10 max-sm:h-[42px] lg:h-[52px] w-full rounded-md border border-cyan-500 bg-white px-14 py-2 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:shadow-2xl focus-visible:shadow-cyan-500/50  disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
