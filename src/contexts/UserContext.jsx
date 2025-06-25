import { createContext, useState } from "react";

export const UserContext = createContext();

// criar o Provider, que vai levar esse dado pra toda a app
export const UserProvider = ({ children }) => {
  // guardar o usuário logado (por enquanto, fixo
  const [user, setUser] = useState({ username: "jessjelly" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
