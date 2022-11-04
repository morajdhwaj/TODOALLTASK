import React from "react";
import Insert from "./Insert";
import List from "./List";

const App = () => {
  return (
    <div className="  flex flex-col items-center space-y-5 pt-20">
      <Insert />
      <List />
    </div>
  );
};

export default App;
