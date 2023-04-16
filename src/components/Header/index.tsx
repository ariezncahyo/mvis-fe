/* eslint-disable react/prop-types */
import { Popover } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useEffect } from "react";

interface IHeader {
  setSidebar: any;
}

const Header: React.FC<IHeader> = ({ setSidebar }) => {
  return (
    <header className="relative bg-white shadow-sm h-16 z-20 flex flex-col justify-center px-3 mx-auto flex-center">
      <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div className="lg:hidden relative left-0 z-50 mr-5 flex h-auto">
          <div className="relative flex items-center w-full lg:w-64 h-full group"></div>
        </div>

        <div className="flex-1">{/*  */}</div>

        <div className="relative p-1 flex items-center justify-end ml-5 mr-4 sm:mr-0 sm:right-auto">
          <div className="block relative">
            <Popover className="relative">
              {/* <Popover.Button>
                <svg
                  width="30"
                  fill="currentColor"
                  height="30"
                  className="text-gray-800"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
              </Popover.Button> */}

              <Popover.Panel className="absolute">
                <div className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <p
                      className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                    ></p>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header
