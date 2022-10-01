import type { NextPage } from "next";
import Link from "next/link";

const AdminPostsPage: NextPage = ({}) => {
  return (
    <main>
      <h1>Edit Post</h1>
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "Psymon" },
        }}
      >
        {" "}
        Psymons Profile
      </Link>
    </main>
  );
};

export default AdminPostsPage;
