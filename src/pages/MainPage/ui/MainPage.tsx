import cls from './MainPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface Props {
   className?: string;
}

const MainPage = ({ className }: Props) => {
   return (
      <div className={classNames(cls.MainPage, {}, [className])}>

      </div>
   )
}

export default MainPage