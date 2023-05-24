import { createContext, useState } from "react";

export const FavoriteContext = createContext();
export function FavoriteContextProvider({ children }) {
  const [state, setState] = useState("");
  return (
    <FavoriteContext.Provider value={{ state, setState }}>
      {children}
    </FavoriteContext.Provider>
  );
}
