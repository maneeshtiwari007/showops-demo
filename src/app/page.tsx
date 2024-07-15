import Image from "next/image";
import styles from "./page.module.css";
import CustomCallOut from "./components/common/CustomCallOut";

export default function Home() {
  return (
    <main>
      <CustomCallOut color="red">Get started by editing src/app/page.tsx</CustomCallOut>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
