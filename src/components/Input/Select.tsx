/* eslint-disable import/no-unused-modules */
import clsx from 'clsx';
import React from 'react';
import type { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

type InputBaseProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
export type SelectItem = {
  value: string | number;
  title: string | number;
};
type SelectProps = InputBaseProps & {
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  items?: SelectItem[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  register?: () => object;
};

const Select = ({
  className,
  required,
  label,
  placeholder,
  inputClassName,
  items,
  error,
  register,
  ...props
}: SelectProps) => {
  return (
    <div className={clsx('w-full flex flex-col gap-1 justify-items-center', className)}>
      {label ? (
        <label>
          {label}
          {required ? <span className="text-red-500">*</span> : null}
        </label>
      ) : null}

      <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-700 focus-within:ring-1 ring-indigo-700">
        <select
          className={clsx(
            'rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none',
            inputClassName
          )}
          placeholder={placeholder || label}
          {...props}
          {...(register ? register() : {})}
        >
          <option>{placeholder || `Pilih ${label}`}</option>
          {items?.map((item) => (
            <option value={item.value} key={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      {error?.message != null ? (
        <p className="text-red-500 text-sm">{error?.message?.toString()}</p>
      ) : null}
    </div>
  );
};

export default Select;
