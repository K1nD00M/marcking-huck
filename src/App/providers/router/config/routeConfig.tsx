import { AuthPage } from "pages/AuthPage";
import { DistrPage } from "pages/DistrPage";
import { MainPage } from "pages/MainPage";
import { ProPage } from "pages/ProPage";
import { ProductPage } from "pages/ProductPage";
import { ResPage } from "pages/ResPage";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
   authOnly?: boolean;
};

export enum AppRoutes {
   MAIN = "main",
   AUTH = "auth",
   PRODUCT = "product",
   RES = 'res',
   DISTR = 'distr',
   CREATOR = 'creator'
}

export const RoutePath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: "/",
   [AppRoutes.AUTH]: "/auth",
   [AppRoutes.PRODUCT]: "/product",
   [AppRoutes.RES]: "/res",
   [AppRoutes.DISTR]: "/distr",
   [AppRoutes.CREATOR]: '/creator'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePath.main,
      element: <MainPage />,
   },
   [AppRoutes.AUTH]: {
      path: RoutePath.auth,
      element: <AuthPage />,
   },
   [AppRoutes.PRODUCT]: {
      path: RoutePath.product,
      element: <ProductPage />,
   },
   [AppRoutes.RES]: {
      path: RoutePath.res,
      element: <ResPage />
   },
   [AppRoutes.DISTR]: {
      path: RoutePath.distr,
      element: <DistrPage />
   },
   [AppRoutes.CREATOR]: {
      path: RoutePath.creator,
      element: <ProPage />
   }
};
