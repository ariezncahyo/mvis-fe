import clsx from 'clsx';
import React from 'react';
import type { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

type InputBaseProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
type TextInputProps = InputBaseProps & {
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  register?: () => object;
};

const TextArea = ({
  className,
  required,
  label,
  placeholder,
  inputClassName,
  error,
  register,
  ...props
}: TextInputProps) => {
  return (
    <div className={clsx('w-full flex flex-col gap-1 justify-items-center', className)}>
      {label ? (
        <label>
          {label}
          {required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}

      <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-700 focus-within:ring-1 ring-indigo-700">
        <textarea
          className={clsx(
            'rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none',
            inputClassName
          )}
          placeholder={placeholder || label}
          {...props}
          {...(register ? register() : {})}
        />
      </div>
      {error?.message != null ? (
        <p className="text-red-500 text-sm">{error?.message?.toString()}</p>
      ) : null}
    </div>
  );
};

export default TextArea;
