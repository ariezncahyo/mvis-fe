/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unused-modules */
import React from 'react';

export type TFormatFn = (
  data: any,
  row: any,
  idx: number
) => string | number | React.ReactNode | undefined | null;

export type THeader = {
  title: string;
  key?: string;
  format?: TFormatFn;
};

type Props = {
  headers: THeader[];
  rows?: object[];
};

const Table = ({ headers, rows }: Props) => {
  return (
    <div className="w-full rounded overflow-x-auto shadow-lg border">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 bg-gray-300">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key || header.title}
                scope="col"
                className="px-6 py-4 text-md font-medium"
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, idx) => {
            const cols = headers.map((header, headerIdx) => {
              let value = header.key ? row[header.key] : null;
              if (header.format) {
                value = header.format(value, row, idx);
              }
              return { key: header.key || headerIdx, value };
            });

            return (
              <tr className="bg-white border-b" key={idx}>
                {cols.map((col) => (
                  <td
                    key={col.key}
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap"
                  >
                    {col.value || '-'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
