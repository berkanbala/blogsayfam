import classNames from "classnames";
import styles from "./footer.module.scss";
export const Footer = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      © 2023 | Designed By Beerkaan
    </div>
  );
};
interface Props {
  className: string;
}
