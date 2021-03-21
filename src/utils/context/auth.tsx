import { createContext } from "react";

export interface Session {
  jwt?: string;
  user?: User;
}

export interface User {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: null;
  organization?: Organization;
  userType?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Organization {
  id?: number;
  name?: string;
  numberOfEmployees?: number;
  email?: string;
  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface AuthContextData extends Session {
  setSession: (session: Session) => void;
}

export const AuthContext = createContext<AuthContextData>({
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  setSession: () => {},
});
