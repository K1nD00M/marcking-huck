import { LoginForm } from "features/AuthUser";

interface Props {
   className?: string;
}

const AuthPage = ({ className }: Props) => {
   return (
      <div>
         <LoginForm />
      </div>
   )
}

export default AuthPage