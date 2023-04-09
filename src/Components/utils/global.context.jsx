import { createContext, useReducer, useMemo } from "react";

export const initialState = {theme: localStorage.getItem("theme") === false || false, fav: JSON.parse(localStorage.getItem("favs")) || []};
export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "addFav":
      const newFav = [...state.fav, action.payload]
      localStorage.setItem("favs", JSON.stringify(newFav))
      return {...state, fav: newFav};

    case "changeTheme":
      localStorage.setItem("theme", !state.theme);
      document.body.classList.toggle("dark");
      return {...state, theme: !state.theme};

    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    const addFav = (newFav) => {
      dispatch({type: "addFav", payload: newFav})
    }
    
    const changeTheme = () => {
      dispatch({type: "changeTheme"})
    }

    return {state, addFav, changeTheme}
  }, [state])

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
