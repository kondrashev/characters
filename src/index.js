import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import "./App.scss";
import { context } from "./components/constants/Context";
import Navigation from "./components/Navigation";
import Characters from "./components/characters/Characters";
import Episodes from "./components/episodes/Episodes";

const store = createStore(rootReducer, applyMiddleware(thunk));
export const ApplictationContext = createContext();
const App = () => {
  const [values, setValues] = useState(context);
  return (
    <Provider store={store}>
      <ApplictationContext.Provider
        value={{
          values,
          setValues,
        }}
      >
        <div className="container_app">
          <Navigation />
          {values.showCharacters && <Characters />}
          {values.showEpisodes && <Episodes />}
        </div>
      </ApplictationContext.Provider>
    </Provider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
