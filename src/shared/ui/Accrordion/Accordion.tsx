import { ReactNode, useRef, useState } from 'react';
import cls from './Accordion.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

interface Props {
   className?: string;
   title: string
   children: ReactNode;
}

export const Accordion = ({ className, title, children }: Props) => {
   const [isOpen, setIsOpen] = useState(false)
   const [contentHeight, setContentHeight] = useState(0);
   const contentRef = useRef<HTMLDivElement>(null);

   const open = () => {
      setIsOpen(!isOpen)
      setContentHeight(isOpen ? 0 : getContentHeight());
   }

   const getContentHeight = () => {
      return contentRef.current?.scrollHeight || 0;
   };

   const mods: Mods = {
      [cls.open]: isOpen
   }

   return (
      <div className={classNames(cls.Accordion, {}, [className])}>
         
         <button className={cls.title} onClick={open}>
            <div className='flex items-center'>
               <span className='mr-3'> {title} </span>
               {isOpen ? <MaterialIcon name='MdKeyboardArrowUp' /> : <MaterialIcon name='MdKeyboardArrowDown'/>}
            </div>
         </button>
         <div className={classNames(cls.content, mods, [])} style={{ height: contentHeight }} ref={contentRef}>
            {children}
         </div>
      </div>
   )
}