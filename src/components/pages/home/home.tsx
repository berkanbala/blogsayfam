import styles from "./home.module.scss";
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
            <a href="">cv</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/berkanbala" target="blank">
              linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/berkanbala" target="blank">
              github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/berkanbaala/" target="blank">
              instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/berkanbaala" target="blank">
              twiter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/BrknBala.7" target="blank">
              facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/beerkaan" target="blank">
              twitch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
