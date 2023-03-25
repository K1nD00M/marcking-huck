import { Text, TextBold } from 'shared/ui/Text/Text';
import { itemTapeProduct } from '../model/types/TapeProducts';
import { Product } from './Product';
import cls from './TapeProducts.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface Props {
   className?: string;
   title?: string
}

const prod: itemTapeProduct[] = [
   {id: '1', img: '', title: 'Скорикдлябfasdfasdfadsfasdfasdfыстрого приготовления', price: '94', remains: '291'},
   {id: '2', img: '', title: 'Скорик для быстрого приготовления',  price: '93', remains: "491"},
   {id: '3', img: '', title: 'Скорик для быстрого приготовления',  price: '91', remains: '29'},
]

export const TapeProducts = ({ className, title }: Props) => {
   return (
      <div className={classNames(cls.TapeProducts, {}, [className])}>
         <Text body={title} bold={TextBold.SEMIBOLT} />
         <div className={cls.tape}>
            {prod.map(item => (
               <Product product={item} key={item.id} /> 
            ))}
         </div>
      </div>
   )
}