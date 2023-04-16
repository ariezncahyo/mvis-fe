import React, { useState } from "react";

type PropsSwitch = {
  name?: string,
  label?: string,
  value: boolean,
  onChange: any
}

const ToggleSwitch = ({ name, label, value, onChange }: PropsSwitch) => {
  return (
    <div>
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          className="sr-only peer"
          checked={value === true}
          onChange={onChange}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-indigo-700 dark:peer-focus:ring-indigo-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
      </label>
    </div>
  )
};

export { ToggleSwitch };
