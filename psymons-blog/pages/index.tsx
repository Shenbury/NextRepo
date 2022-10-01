import type { NextPage } from "next";
import Loader from "../components/Loader";
import styles from "../styles/Home.module.css";
import toast from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Loader show={true} />
      <button onClick={() => toast.success("Hello Toast!")}> Toast Me </button>
    </div>
  );
};

export default Home;
