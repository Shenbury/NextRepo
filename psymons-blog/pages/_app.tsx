import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { IUserContext } from "../interfaces/IUserContext";
import { useUserData } from "../lib/hooks";

async function MyApp({ Component, pageProps }: AppProps) {
  const currentUserContext: IUserContext = {
    user: {},
    username: "Psymon",
  };

  const userData = await useUserData();

  currentUserContext.user = userData.user ? userData.user : null;
  currentUserContext.username = userData.username ? userData.username : "";

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
