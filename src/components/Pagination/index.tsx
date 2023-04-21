import React, { ReactEventHandler, useState } from "react";

type PropsSwitch = {
  pagination: any,
  filter: any,
  setFilter: ReactEventHandler
}

const Pagination = ({ pagination, filter, setFilter }: PropsSwitch) => {
  let total = pagination?.total;
  let limit = pagination?.limit;
  let page = pagination?.page;
  let total_page = Math.ceil(total/limit);

  return (
    <div className="flex place-content-center my-8">
      <div className="flex gap-4">
        <div className={`flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-12 items-center justify-center rounded-full cursor-pointer
          ${page <= 1 ? 'pointer-events-none bg-gray-500' : ''}
        `}
          onClick={()=> setFilter({
            ...filter,
            page: page-=1
          })}
        >{`Prev`}</div>
        <div className="flex gap-2">
          {
            [...Array.from(Array(total_page || 0).keys())].map((item, index) => {
              let pages = item+1;
              return (
                <div key={index} className={`flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-8 items-center justify-center rounded-full cursor-pointer border-2 border-primary-500
                  ${pages == page ? 'border-2 border-yellow-500 text-yellow-500' : ''}
                `}
                  onClick={()=> setFilter({
                    ...filter,
                    page: pages
                  })}
                >{pages}</div>
              )
            })
          }
        </div>
        <div className={`flex text-white hover:bg-primary-700 bg-primary-500 p-1 w-12 items-center justify-center rounded-full cursor-pointer
          ${page >= total_page ? 'pointer-events-none bg-gray-500' : ''}
        `}
          onClick={()=> setFilter({
            ...filter,
            page: page+=1
          })}
        >{`Next`}</div>
      </div>
    </div>
  )
};

export { Pagination };
