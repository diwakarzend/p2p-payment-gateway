import React from "react";

export default function Table({
  tableTitle = "",
  tableFilter = null,
  tableData = [],
  tableColumns = [],
}) {
  return (
    <div className="bg-white shadow-1 py-8 rounded-lg">
      <h2 className="text-18 px-8 font-semibold mb-8">{tableTitle}</h2>
      {tableFilter}
      <table className="w-full">
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th
                className=" bg-black py-4 px-8 text-13 text-white text-left font-semibold"
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              {Object.keys(data).map((key, index) => (
                <td className=" px-8 py-6 text-13" key={index}>
                  {data[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
