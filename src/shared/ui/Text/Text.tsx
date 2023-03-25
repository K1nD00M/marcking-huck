import cls from './Text.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames'

export enum TextSize {
   M = 'm',
   L = 'l',
   XL = 'xl'
}

export enum TextAlign {
   LEFT = 'left',
   CENTER = 'center',
   RIGHT = 'right'
}
export enum TextBold {
   NORMAL = 'normal',
   SEMIBOLT = 'semibold',
   BOLD = 'bold',
}

interface Props {
   className?: string;
   body?: string;
   title?: string;
   items?: TextAlign;
   size?: TextSize;
   bold?: TextBold;
}

export const Text = (props: Props) => {
   const {
      className,
      body,
      title,
      items = TextAlign.LEFT,
      size = TextSize.M,
      bold = TextBold.NORMAL
   } = props

   const mods: Mods = {
      [cls[items]]: true,
      [cls[size]]: true,
      [cls[bold]]: true
   }

   return (
      <div className={classNames(cls.Text, mods, [className])}>
         {title && <p className={cls.title}>{title}</p>}
         {body && <p className={cls.body}>{body}</p>}
      </div>
   )
}