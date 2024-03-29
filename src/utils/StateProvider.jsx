import { createContext, useContext, useReducer } from "react";
import { initialstate } from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);

// export const useStateProvider = () => {
//   const context = useContext(StateContext);
//   if (!context) {
//     throw new Error("useStateProvider must be used within a StateProvider");
//   }
//   return context;
// };
