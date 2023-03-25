export type LoginFormInput = {
   email: string;
   password: string;
   rememberMe: boolean;
}

export interface AuthSchema {
   isLoading: boolean,
   isError: boolean,
   username: string,
   password: string,
}

export interface authData {
   email: string,
   password: string
}