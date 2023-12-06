import { Link } from "react-router-dom";
import styles from "./home.module.scss";
import PDF from "../resume.pdf";
export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>BERKAN BALA</h1>
        <p className={styles.detail}>
          Hello, I'm Berkan Bala from Turkey. I'm 28.I plan to continue my
          career as a Front End Developer.
        </p>
      </div>
      <div className={styles.contact}>
        <ul>
          <li>
            <Link to={PDF} target="_blank">
              cv
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/berkanbala" target="_blank">
              linkedin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/berkanbala" target="_blank">
              github
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/berkanbaala/" target="_blank">
              instagram
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/berkanbaala" target="_blank">
              twiter
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/BrknBala.7" target="_blank">
              facebook
            </Link>
          </li>
          <li>
            <Link to="https://www.twitch.tv/beerkaan" target="_blank">
              twitch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
