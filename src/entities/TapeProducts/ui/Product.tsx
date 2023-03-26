import { Text, TextAlign, TextBold } from 'shared/ui/Text/Text';
import { itemTapeProduct } from '../model/types/TapeProducts';
import cls from './Product.module.scss'
import { Card, Button } from 'react-bootstrap'

interface Props {
   className?: string;
   product: itemTapeProduct
}

export const Product = ({ className, product }: Props) => {
   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={product.img} />
         <Card.Body className='flex flex-col justify-between text-xs'>
            <Card.Title>{product.price}Р</Card.Title>
            <Card.Text>
               {product.title}
            </Card.Text>
            <Button style={{fontSize: '12px', padding: '3px 5px', background: '#F6F42E', color: 'black', border: 'none'}}>Перейти</Button>
         </Card.Body>
      </Card>
   )
}