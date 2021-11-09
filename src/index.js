import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { context } from "./components/constants/Context";
import Navigation from "./components/Navigation";

export const ApplictationContext = createContext();
const App = () => {
  const [values, setValues] = useState(context);
  return (
    <ApplictationContext.Provider
      value={{
        values: values,
        setValues: setValues,
      }}
    >
      <div className="container_app">
        <Navigation />
      </div>
    </ApplictationContext.Provider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
