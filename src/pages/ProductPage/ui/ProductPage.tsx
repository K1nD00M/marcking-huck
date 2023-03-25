import { TapeProducts } from "entities/TapeProducts";
import { Accordion } from "shared/ui/Accrordion/Accordion";
import { Search } from "shared/ui/Search/Search";
import { Text, TextBold } from "shared/ui/Text/Text";
import cls from './ProductPage.module.scss'
import { Block } from "shared/ui/Block/Block";
import { Badget } from "shared/ui/Badget/Badget";
import { Button, ButtonType } from "shared/ui/Button/Button";

interface Props {
   className?: string;
}

const ProductPage = ({ className }: Props) => {
   return (
      <div>
         <Search className={cls.search} placeholder="Найти товар"/>
         <Block>
            <img 
               src="https://my-clothing-shop.ru/pictures/1022697081.jpg"
               alt=""
               className={cls.img}
            />
            <div className={`${cls.badget} mb-4`}>
               <Badget >
                  Участвует в акции
               </Badget>
            </div>
            
            <Text body={
               'Сметана для питания детей дошкольного и школьного возраста Сарафаново, массовая доля жира 15%, ПП стакан с крышкой под термозаварку'
               }
               bold={TextBold.SEMIBOLT}
            />

            <div className="flex justify-between mt-6">
               <Text body="95Р" bold={TextBold.BOLD}/>
               <Text body={`Осталось: 274 шт.`} bold={TextBold.SEMIBOLT} />
            </div>
         </Block>
         <Button  types={ButtonType.PRIMARY_MOB}>
            Оставить отзыв
         </Button>
         <Accordion title="Информация о продукте" className={cls.block}>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
            <Text title={'Состав'} body={'Молочка, ебать'}/>
         </Accordion>
         <TapeProducts title="От производителя" className={cls.block}/>
      </div>
   );
};

export default ProductPage;
