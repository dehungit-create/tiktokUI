import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
  return ( 
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/94448f0027d8e171cf470a83dd817b20~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=e0bc8220&x-expires=1772352000&x-signature=u4%2BZp0xfed%2BZ3qyZimApSEOJsvw%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my2" alt="avatar"/>
      <div className={cx('infor')}>
        <h4 className={cx('user-name')}>
          <span>Hua Hung De</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>
        </h4>
        <span className={cx('user-id')}>hungdeit</span>
      </div>
    </div>
   );
}

export default AccountItem;