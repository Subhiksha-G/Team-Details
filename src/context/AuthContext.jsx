import { createContext, useState } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Subhiksha', role: 'admin' });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};