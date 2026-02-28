import classNames from "classnames/bind";
import { Link } from "react-router";
import styles from './Button.module.scss'

const cx= classNames.bind(styles)

function Button({ to, href, primary=false, outline=false, disable, rounded, className, size="m", text, children, onClick, ...passProps}) {
  let Comp = 'button'
  const props = {
    onClick,
    ...passProps
  }

  if (disable) {
    Object.keys(props).forEach( key => {
      if(key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    primary, outline, [size]: size, text, disable, rounded, [className]: className
  })
  console.log(size)

  return ( 
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;