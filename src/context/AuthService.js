import { createContext, useCallback, useContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const authContext = createContext();

function AuthService({ children }) {
  const [currentUser, dispatch] = useReducer(AuthReducer, null);

  const loginAction = useCallback(() => {}, []);

  const logoutAction = useCallback(() => {}, []);

  const registerAction = useCallback(() => {}, []);

  return (
    <authContext.Provider
      value={{
        currentUser,
        loginAction,
        logoutAction,
        registerAction,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuthServiceState = () => {
  const values = useContext(authContext);

  return values;
};

export default AuthService;
