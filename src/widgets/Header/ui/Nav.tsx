import { Link, NavLink } from "react-router-dom";
import cls from "./Nav.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface Props {
   className?: string;
}

export const Nav = ({ className }: Props) => {
   return (
      <nav className={classNames(cls.Nav, {}, [className])}>
         <NavLink
            to={"/res"}
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? cls.active : ""
            }
         >
            Ресейлерам
         </NavLink>
         <NavLink
            to={"/distr"}
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? cls.active : ""
            }
         >
            Дистрибьютерам
         </NavLink>
         <NavLink
            to={"/creator"}
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? cls.active : ""
            }
         >
            Производителям
         </NavLink>
      </nav>
   );
};
