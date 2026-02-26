import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Header() {
  return ( 
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
         <img src={images.logo} alt="TikTok" />
        </div>
        <div className={cx('search-bar')}>
          <input type="text" placeholder='Search accounts and videos'/>
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark}/>
          </button>
          <button className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner}/>
          </button>
          <span className={cx('search-bar-space-height')}></span>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
   );
}

export default Header;
