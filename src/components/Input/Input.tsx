import React from 'react';

import { EyeIcon, EyeOffIcon } from '../../assets/icons';
import { cn } from '../../libs';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className={cn('w-[384px]', className)}>
        <label htmlFor={label}></label>
        <div
          className={cn(
            'w-full py-3 px-4 flex justify-between items-center gap-4 border rounded',
            {
              'border-red-600': error,
            },
          )}
        >
          <input
            type={showPassword ? 'text' : type}
            className="border-none focus:outline-none"
            {...props}
            ref={ref}
          />
          {type === 'password' && (
            <button onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          )}
        </div>
        {error && <div className="text-red-600 text-xs">{error}</div>}
      </div>
    );
  },
);

//falsy : '', null, undefined, 0, false,
