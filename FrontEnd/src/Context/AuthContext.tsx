import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const login = async (username: string, password: string) => {
    const response = await axios.post("http://localhost:5000/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", username);
    setUser(username);
  };

  const register = async (username: string, password: string) => {
    await axios.post("http://localhost:5000/auth/register", {
      username,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;