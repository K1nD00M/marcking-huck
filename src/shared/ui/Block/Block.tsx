import cls from './Block.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode } from 'react'

interface Props {
   className?: string;
   children: ReactNode
}

export const Block = ({ className, children }: Props) => {
   return (
      <div className={classNames(cls.Block, {}, [className])}>
         {children}
      </div>
   )
}