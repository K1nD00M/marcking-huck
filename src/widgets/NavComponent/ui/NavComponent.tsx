import cls from './NavComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode } from 'react'

interface Props {
   className?: string;
   children: ReactNode
}

export const NavComponent = ({ className, children }: Props) => {
   return (
      <div className={classNames(cls.NavComponent, {}, [className])}>
         {children}
      </div>
   )
}