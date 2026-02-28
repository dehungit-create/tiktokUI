
import { useState } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss'
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper/Popper';
import AccountItem from '@/components/AccountItem/AccountItem';


const cx = classNames.bind(styles)

function Header() {
  const [searchResult, setSearchResult] = useState([])

  return ( 
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
      
         <img src={images.logo} alt="TikTok" />
     
        <Tippy
          interactive
          visible={searchResult.length > 0}
          appendTo={document.body}
          content={
            <div className={cx('search-result')}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </PopperWrapper>
            </div>
          }
        >
          <div className={cx('search-bar')} tabIndex="-1">
            <input type="text" placeholder='Search accounts and videos'/>       
          
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner}/>
            </button>
            <span className={cx('search-bar-space-height')}></span>
          
            <Tippy content="Tìm kiếm" placement='right'>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
              </button>
            </Tippy>
          </div>
        </Tippy>

        <div className={cx('actions')}></div>
      </div>
    </header>
   );
}

export default Header;
