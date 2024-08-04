import styles from "./page.module.css";
import Blogs from "@/app/components/Blogs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Blogs />
    </main>
  );
}
