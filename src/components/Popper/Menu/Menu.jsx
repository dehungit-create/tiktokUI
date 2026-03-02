import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from "@/components/Popper/Popper";
import MenuItem from "./MenuItem";

const cx=classNames.bind(styles)

function Menu({ children, data }) {

  const renderItems = () => {
    return data.map((item, index) => {
      return <MenuItem key={index} data={item} classes='menu-item'/>
    })
  }
  console.log(data)

  return ( 
    <Tippy
      interactive
      delay={[0, 500]}
      placement='bottom-end'
      appendTo={document.body}
      content={
        <div className={cx('menu')} tabIndex="-1">
          <PopperWrapper className={cx('menu-wrapper')}>
            {renderItems()}
          </PopperWrapper>
        </div>
      }
    >
      {children}
    </Tippy>
   );
}

export default Menu;
