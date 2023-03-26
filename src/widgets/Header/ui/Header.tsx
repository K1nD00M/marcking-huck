import cls from './Header.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Logo from 'shared/assets/logo.png'
import { Nav } from './Nav';

interface Props {
   className?: string;
}

export const Header = ({ className }: Props) => {
   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <div className={cls.container}>
            <img src={Logo} />
            <Nav />
         </div>
      </div>
   )
}