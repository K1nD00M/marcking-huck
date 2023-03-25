import { Text, TextAlign, TextBold } from 'shared/ui/Text/Text';
import { itemTapeProduct } from '../model/types/TapeProducts';
import cls from './Product.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button';

interface Props {
   className?: string;
   product: itemTapeProduct
}

export const Product = ({ className, product }: Props) => {
   return (
      <div className={classNames(cls.Product, {}, [className])}>
         <img 
            src="https://avatars.mds.yandex.net/i?id=1834c191b774e63cde2835ef7cc00976d1fad359-7571629-images-thumbs&n=13" 
            alt="" 
            className={cls.img}   
         />
         <Text body={product.title} className={cls.text}/>
         <Button>Перейти</Button>
      </div>
   )
}