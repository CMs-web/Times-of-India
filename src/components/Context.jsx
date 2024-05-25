import { createContext, useReducer } from "react";

const States = createContext();

export const StatesProvider = ({children}) => {
  const initialStates = {
    response: [],
  };

  const contextReducer = (states, action) => {
    switch (action.type) {
      case "GET_RES":
        return {
          ...states,
          response: action.payload,
        };

      default:
        return states;
    }
  };

  const [states, dispatch] = useReducer(contextReducer, initialStates)

  return <States.Provider value={{...states, dispatch}}>{children}</States.Provider>;
};

export default States;
