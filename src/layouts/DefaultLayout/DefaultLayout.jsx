import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss"
import Header from "@/layouts/Header/Header";
import SideBar from "@/layouts/SideBar/SideBar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return ( 
    <div className={cx("wrapper")}>
      <Header/>
      <div className={cx("container")}>
        <SideBar/>
        <div className={cx("main")}>
          {children}
        </div>
      </div>
    </div>
   );
}

export default DefaultLayout;