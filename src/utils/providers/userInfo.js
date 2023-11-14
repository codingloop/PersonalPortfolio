import { createContext } from "react";
import PFInfo from "@/config/portfolio.json";

export const UserContext = createContext(PFInfo);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={PFInfo}>{children}</UserContext.Provider>;
};
