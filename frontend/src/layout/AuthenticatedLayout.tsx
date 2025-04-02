import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <div className="bg-base100">
      <header className="h-16 w-full bg-base-300 flex items-center fixed top-0 z-30">
        <Link to="/rooms" className="text-3xl ml-4">
          <img src="/svg/home.svg" className="h-10 w-10" />
        </Link>
        <Link to="/room/create" className="text-3xl ml-4">
          <img src="/svg/talk_plus.svg" className="h-10 w-10" />
        </Link>
        <Link to="/login" className="text-3xl ml-4">
          <img src="/svg/logout.svg" className="h-10 w-10" />
        </Link>
      </header>
      {children}
    </div>
  );
};

export default AuthenticatedLayout;
