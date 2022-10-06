import { User } from "firebase/auth";

export interface IUserContext {
    user: User | null;
    username: string;
  }