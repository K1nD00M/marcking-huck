import { Text, TextBold } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { TypeComment } from '../model/types/comment';
import { Comment } from './Comment';

interface Props {
   className?: string;
}

export const CommentList = ({ className }: Props) => {
   const list: TypeComment[] = [{name: 'Александр', title: 'Все было супер. Мы в восторге. Семья вся сытая!'}]
   return (
      <div className={classNames(cls.CommentList, {}, [className])}>
         <Text body='Отзывы' bold={TextBold.BOLD} />
         {list.map(item => (
            <Comment comment={item} />
         ))}
      </div>
   )
}