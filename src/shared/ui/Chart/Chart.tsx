import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from "recharts";
import cls from "./Chart.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";

interface Props {
   className?: string;
   data: any;
   children?: ReactNode;
}

export const Chart = ({ className, data, children = '' }: Props) => {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <XAxis dataKey="name" />
            <YAxis />
            <Line
               type="monotone"
               dataKey="quantity"
               stroke="#F6F42E"
               activeDot={{ r: 8 }}
            />
            {children}
         </LineChart>
      </ResponsiveContainer>
   );
};
