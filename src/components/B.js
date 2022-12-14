import { Button } from "@mui/material";
import React from "react";
import Counter from "./Counter";

function B(props) {
  const { count, increment, name } = props; //Object distructuring es6 concept

  return (
    <div>
      <Button variant="contained" onMouseOver={increment}>
        B {name} {count} Times Hovered
      </Button>
    </div>
  );
}
export default Counter(B, 5);
