import React, { useState } from "react";

type PropsSwitch = {
  name?: string,
  label?: string
}

const Pagination = ({ name, label }: PropsSwitch) => {
  return (
    <div className="flex place-content-center my-8">
      <div className="flex gap-4">
        <div className="flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-12 items-center justify-center rounded-full cursor-pointer">{`Prev`}</div>
        <div className="flex gap-2">
          {
            [...Array.from(Array(10).keys())].map((item, index) => {
              return (
                <div key={index} className="flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-8 items-center justify-center rounded-full cursor-pointer">{item+1}</div>
              )
            })
          }
        </div>
        <div className="flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-12 items-center justify-center rounded-full cursor-pointer">{`Next`}</div>
      </div>
    </div>
  )
};

export { Pagination };
