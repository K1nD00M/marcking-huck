import { useForm } from "react-hook-form";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginFormInput } from "../model/types/form";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { authActions, authReducer } from "../model/slice/authSlice";
import { DynamicModuleLoader, ReducersList } from "shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getIsError } from "../model/selectors/authIsError";

interface Props {
   className?: string;
}

const initialReducers: ReducersList = {
   auth: authReducer,
};


export const LoginForm = ({ className }: Props) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormInput>();

   const dispatch = useAppDispatch();
   const isError = useSelector(getIsError)

   const onSubmit = (data: LoginFormInput) => {
      
      // Здесь можно отправить данные на сервер или выполнить другие действия с ними
      // ...

      // После успешной авторизации перенаправляем пользователя на другую страницу
   };

   return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Вход
                  </h2>
               </div>
               <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                     <div>
                        <label htmlFor="email-address" className="sr-only">
                           Email-адрес
                        </label>
                        <input
                           id="email-address"
                           {...register("email", {
                              required: "Введите email",
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                 message: "Неверный формат email",
                              },
                           })}
                           name="email"
                           type="email"
                           autoComplete="email"
                           required
                           className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                              errors.email
                                 ? "border-red-500 placeholder-red-500"
                                 : "border-gray-300 placeholder-gray-500"
                           } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                           placeholder="Email-адрес"
                           onChange={(event) =>
                              dispatch(
                                 authActions.setUsername(event.target.value)
                              )
                           }
                        />
                        {errors.email && (
                           <p
                              className="mt-2 text-sm text-red-600"
                              role="alert"
                           >
                              {errors.email.message}
                           </p>
                        )}
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Пароль
                        </label>
                        <input
                           id="password"
                           {...register("password", {
                              required: "Введите пароль",
                              minLength: {
                                 value: 6,
                                 message:
                                    "Пароль должен содержать не менее 6 символов",
                              },
                           })}
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                              errors.password
                                 ? "border-red-500 placeholder-red-500"
                                 : "border-gray-300 placeholder-gray-500"
                           } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                           placeholder="Пароль"
                           onChange={(event) =>
                              dispatch(
                                 authActions.setPassword(event.target.value)
                              )
                           }
                        />
                        {errors.password && (
                           <p
                              className="mt-2 text-sm text-red-600"
                              role="alert"
                           >
                              {errors.password.message}
                           </p>
                        )}
                     </div>
                  </div>

                  <div className="flex justify-between">
                     <button
                        type="submit"
                        className="group relative  flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Войти
                     </button>
                     { isError ? <span className="text-red-600">Неверные данные</span> : null}
                  </div>
               </form>
            </div>
         </div>
      </DynamicModuleLoader>
   );
};
