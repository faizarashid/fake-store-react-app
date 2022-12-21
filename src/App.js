import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <div className="Container">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
