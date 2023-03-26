import { TapeProducts } from "entities/TapeProducts";
import { Accordion } from "shared/ui/Accrordion/Accordion";
import { Search } from "shared/ui/Search/Search";
import { Text, TextBold } from "shared/ui/Text/Text";
import cls from "./ProductPage.module.scss";
import { Block } from "shared/ui/Block/Block";
import { Badget } from "shared/ui/Badget/Badget";
import { Button, ButtonType } from "shared/ui/Button/Button";
import { Modal, FloatingLabel, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getProduct } from "entities/Product/model/services/getProduct";
import { useSelector } from "react-redux";
import { getProductData } from "entities/Product/model/selectors/getData";
import axios from "axios";

interface Props {
   className?: string;
}

const ProductPage = ({ className }: Props) => {
   const [show, setShow] = useState(false);
   const [comment, setComment] = useState('')
   const [product, setProduct] = useState({})

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const onChangeComment = (value: string) => setComment(value)

   useEffect(() => {
      const add = async () => {
         const response = await axios('http://localhost:8000/product')
         setProduct(response.data)
      }
      add()
   }, []);

   return (
      <div>
         <Search className={cls.search} placeholder="Найти товар" />
         <Block>
            <img
               src="https://my-clothing-shop.ru/pictures/1022697081.jpg"
               alt=""
               className={cls.img}
            />
            <div className={`${cls.badget} mb-4`}>
               <Badget>Участвует в акции</Badget>
            </div>

            <Text
               body={
                  product.title
               }
               bold={TextBold.SEMIBOLT}
            />

            <div className="flex justify-between mt-6">
               <Text body={`${product.price}Р`} bold={TextBold.BOLD} />
               <Text body={`Осталось: ${product.q} шт.`} bold={TextBold.SEMIBOLT} />
            </div>
         </Block> 
         <Button types={ButtonType.PRIMARY_MOB} onClick={handleShow}>
            Оставить отзыв
         </Button>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Напишите отзыв к товару</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel
                  controlId="floatingTextarea"
                  label="Отзыв"
                  className="mb-3"
               >
                  <Form.Control
                     as="textarea"
                     placeholder="Оставьте комментарий о товаре"
                     value={comment}
                     onChange={(event) => onChangeComment(event.target.value)}
                  />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={handleClose}>Закрыть</Button>
               <Button>Отправить</Button>
            </Modal.Footer>
         </Modal>
         <Accordion title="Информация о продукте" className={cls.block}>
            {product.info.map(item => (
               <Text body={item.body} title={item.title} />
            ))}
         </Accordion>
         <TapeProducts title="От производителя" className={cls.block} />
      </div>
   );
};

export default ProductPage;
