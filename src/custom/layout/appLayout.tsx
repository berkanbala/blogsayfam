import { Outlet } from "react-router";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./appLayout.module.scss";
export const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
