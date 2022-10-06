import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() : JSX.Element {
  const { user, username } = useContext(UserContext)

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {/* User is signed-in and has username*/}
        {username && (
          <>
            <li>
              <Link href="/Admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
              <img src={user?.photoURL === null ? undefined : user?.photoURL } />
              </Link>
            </li>
          </>
        )}
        Psymons Blog
        {/* User is not signed in OR has not created username*/}
        {!username && (
          <>
            <li>
              <Link href={"/enter"}>
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
