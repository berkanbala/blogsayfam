import classNames from "classnames";
import styles from "./header.module.scss";
export const Header = (props: Props) => {
  const { className } = props;

  return <div className={classNames(className, styles.container)}>header</div>;
};
interface Props {
  className: string;
}
