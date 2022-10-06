import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { IUserContext } from "../interfaces/IUserContext";
import { defaultConfig } from "next/dist/server/config-shared";

function MyApp({ Component, pageProps }: AppProps) {
  const currentUserContext : IUserContext = {
    user: {},
    username: "Psymon"
  }
  
  return (
    <>
      <UserContext.Provider value={currentUserContext}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
