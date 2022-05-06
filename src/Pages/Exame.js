import React, { useState } from "react";

export default function Exame() {
 
  const [theArray, setTheArray] = useState([]);
  const addEntryClick = () => {
    console.log(theArray)
      setTheArray(theArray);
  };
  return [
      <input type="number" onChange={addEntryClick}  />,
      <div>{theArray.map(entry =>
        <div>{entry}</div>
      )}
      </div>
  ];
}
