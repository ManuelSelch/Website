import React from "react"

import Card from "../components/Card"

const splitIntoColumns = (items, numCols) => {
    const columns = Array.from({ length: numCols }, () => []);
    const itemsPerColumn = Math.ceil(items.length / numCols);
    for (let i = 0; i < numCols; i++) {
      columns[i] = items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn);
    }
    return columns;
};

export default function Gallery({items}) {
    const columns = splitIntoColumns(items, 4); 
  
    return (
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {column.map(item => (
              <Card key={item.name} name={item.name} description={item.description} img={item.image}/>
            ))}
          </div>
        ))}
      </div>
    );
  };
  