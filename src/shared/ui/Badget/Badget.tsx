import { ReactNode } from 'react';
import cls from './Badget.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface Props {
   className?: string;
   children: ReactNode;
}

export const Badget = ({ className, children }: Props) => {
   return (
      <span className={classNames(cls.Badget, {}, [className])}>
         {children}
      </span>
   )
}