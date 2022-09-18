import { createContext, useState, useEffect } from "react";
// Services
import { onAuthStateChangedListener } from "../services/firebase/firebase.service";

export const UserContext = createContext({
  currentuser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // Run this function once, only when the component runs.
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}