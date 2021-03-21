/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { Routes } from "./Routes";
import { AuthContext, AuthContextData, Session } from "./utils/context";
import { coreService } from "./utils/api/axios";

const App: FunctionComponent = () => {
  const [isInitialized, setInitialized] = useState<boolean>(false);
  const [session, setSession] = useState<AuthContextData>({
    setSession: (newSession: Session) => {
      setSession({ ...session, ...newSession });
    },
  });
  useEffect(() => {
    initializeSession();
  }, []);
  const initializeSession = async (): Promise<void> => {
    // determine login state
    try {
      const newSession: any = await coreService.get("/users/me");

      setSession({
        ...session,
        ...newSession,
      });
    } catch (error) {
      console.debug("Not logged in", error);
    } finally {
      setInitialized(true);
    }
  };
  if (!isInitialized) {
    return <p>You are not authenticated</p>;
  }
  return (
    <AuthContext.Provider value={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
