import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { isAuthenticated } from "../util/auth";

type Props = { children: ReactNode };
const AllreadyLoginRoute = ({ children }: Props) => {
  if (isAuthenticated()) {
    return <Navigate to="/rooms" />;
  }
  return children;
};

export default AllreadyLoginRoute;
