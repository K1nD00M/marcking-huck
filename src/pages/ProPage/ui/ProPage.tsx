import { NavComponent } from "widgets/NavComponent/ui/NavComponent";
import { useState } from 'react'
import { Block } from "shared/ui/Block/Block";
import { Text, TextBold } from "shared/ui/Text/Text";
import { Chart } from "shared/ui/Chart/Chart";
import post from 'shared/assets/post.png'
import graf1 from 'shared/assets/otz1.png'
import graf2 from 'shared/assets/otz2.png'
import cls from "./ProPage.module.scss";

interface Props {
   className?: string;
}

const data = [
   {
      name: '03-20-2023',
      quantity: 3900,
   },
   {
      name: "03-21-2023",
      quantity: 3200,
   },
   {
      name: "03-22-2023",
      quantity: 4100,
   },
   {
      name: "03-23-2023",
      quantity: 4000,
   },
   {
      name: "03-24-2023",
      quantity: 4200,
   },
   {
      name: "03-25-2023",
      quantity: 4400,
   },
   {
      name: "03-26-2023",
      quantity: 4000,
   },
];

const ProPage = ({ className }: Props) => {
   const option = [
      {text: 'Аналитика'},
      {text: 'Отзывы'},
   ]

   const [active, setActive] = useState(0)

   return (
      <>
         <NavComponent >
            <>
            {option.map((item, index) => (
               <span className={active === index ? cls.active : ''} key={index} onClick={() => setActive(index)}>{item.text}</span>
            ))}
            </>
         </NavComponent>
         {active === 0 && (
            <>
               <Block>
                  <Text title='Общее число продаж' bold={TextBold.BOLD} />
                  <div className="w-full h-56">
                     <Chart data={data} /> 
                  </div>
               </Block>
               <Block>
                  <Text title='Общее число продаж за сутки' bold={TextBold.BOLD} />
                  <div className="w-full h-56">
                     <Chart data={data} /> 
                  </div>
               </Block>
            </>
         )}
         {active === 1 && (
            <>
               <div className="flex justify-between">
                  <img src={graf1} />
                  <img src={graf2} />
               </div>
            </>
         )}
         {active === 2 && (
            <div className="flex justify-between">
               <img src={post} />
            </div>
         )}
      </>
   )
};

export default ProPage;
