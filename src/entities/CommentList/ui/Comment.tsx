import { Text, TextBold } from 'shared/ui/Text/Text';
import cls from './Comment.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { TypeComment } from '../model/types/comment';

interface Props {
   className?: string;
   comment: TypeComment
}

export const Comment = ({ className, comment }: Props) => {
   return (
      <div className={classNames(cls.Comment, {}, [className])}>
         <Text body={comment.name} bold={TextBold.SEMIBOLT}/>
         <Text body={comment.title}/>
      </div>
   )
}