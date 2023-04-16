import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import type { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type TextInputProps = InputBaseProps & {
  type?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  register?: () => object;
};

const TextInput = ({
  type,
  className,
  required,
  label,
  placeholder,
  inputClassName,
  error,
  register,
  ...props
}: TextInputProps) => {
  const [viewPassword, setViewPassword] = useState(false);

  const onTogglePassword = useCallback(() => {
    setViewPassword((state) => !state);
  }, []);

  return (
    <div className={clsx('w-full flex flex-col gap-1 justify-items-center', className)}>
      {label ? (
        <label>
          {label}
          {required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}

      <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-700 focus-within:ring-1 ring-indigo-700 relative">
        <input
          className={clsx(
            'rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none',
            inputClassName
          )}
          placeholder={placeholder || label}
          type={viewPassword ? 'text' : type || 'text'}
          {...props}
          {...(register ? register() : {})}
        />

        {type === 'password' ? (
          <button type="button" onClick={onTogglePassword} className="py-2 px-3 absolute right-0">
            {!viewPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        ) : null}
      </div>
      {error?.message != null ? (
        <p className="text-red-500 text-sm">{error?.message?.toString()}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
