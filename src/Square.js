import React, { useState } from "react";

export default function Square({ value, onclick }) {
  const [place, setPlace] = useState("X");

  return (
    <div className="box" onClick={onclick}>
      {value}
    </div>
  );
}
