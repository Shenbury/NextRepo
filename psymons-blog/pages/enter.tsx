import { signInWithPopup } from "@firebase/auth";
import type { NextPage } from "next";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth, googleAuthProvider } from "../lib/firebase";

const EnterPage: NextPage = (props) => {
  const { user, username } = useContext(UserContext)
  
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"https://www.tramvietnam.com.au/wp-content/uploads/2021/07/Illustration-of-Google-icon-on-transparent-background-PNG.png"} /> Sign in with Google
    </button>
  );
}


// Sign out button
function SignOutButton() : JSX.Element {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}

export default EnterPage;
