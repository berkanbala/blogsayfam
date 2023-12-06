import classNames from "classnames";
import styles from "./header.module.scss";
import Logo from "../../media/logo1.png";
export const Header = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <img src={Logo} alt="" className={styles.logo} />
    </div>
  );
};
interface Props {
  className: string;
}
