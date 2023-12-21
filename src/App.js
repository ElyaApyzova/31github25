import React from "react";
import data from "./components/backend/Data/Data";
import Header from "./components/frontend/Header/Header";

function App() {
  const { productItems } = data;
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
