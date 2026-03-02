import Button from "@/components/Button/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'


const cx=classNames.bind(styles)

function MenuItem({ data, classes }) {
  console.log(data)
  return ( 
    <Button className={cx(classes)}>{data.icon} {data.content}</Button>
  );
}

export default MenuItem;