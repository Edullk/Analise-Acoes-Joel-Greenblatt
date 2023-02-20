import React from "react";
import ListAcoes from "../components/listAcoes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="padding">
        <ListAcoes />
      </div>
    </div>
  );
};

export default App;
