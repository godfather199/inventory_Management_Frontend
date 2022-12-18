import { createContext, useEffect, useReducer } from "react";


const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const Context = createContext(INITIAL_STATE);

  const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload
            };

        case 'LOGOUT':
            return {
                user: null
            }
    
        default:
            return state
    }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};