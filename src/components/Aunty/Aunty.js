import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <div>
      <h2>Aunty</h2>
      <p>house={house}</p>
      <p>
        <small>Ring: {house}</small>
      </p>
      {house > 4 && <button onClick={handleHouseIncrease}>Aunty Magic</button>}
    </div>
  );
};

export default Aunty;
