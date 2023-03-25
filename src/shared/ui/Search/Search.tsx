import { MaterialIcon } from '../MaterialIcon/MaterialIcon';
import cls from './Search.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   className?: string;
}

export const Search = ({ className, ...otherProps }: Props) => {
   return (
      <div className={classNames(cls.Search, {}, [className])}>
         <MaterialIcon name='MdSearch' className={cls.icon} />
         <input className={cls.input} {...otherProps}/>
      </div>
   )
}