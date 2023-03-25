import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames'

export enum ButtonType {
   DEFAULT = 'default',
   PRIMARY_MOB = 'primary-mob'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   types?: ButtonType;
}

export const Button = ({ className, children, types = ButtonType.DEFAULT, ...otherProps }: Props) => {
   const mods: Mods = {
      [cls[types]]: true
   }

   return (
      <button className={classNames(cls.Button, mods, [className])} {...otherProps}>
         {children}
      </button>
   )
}