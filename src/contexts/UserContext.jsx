import { createContext } from 'react';

export const UserProvider = ({ children }) => {
  const loggedInUser = { name: 'obi', id: 1 }; // valor inicial, fixo

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
