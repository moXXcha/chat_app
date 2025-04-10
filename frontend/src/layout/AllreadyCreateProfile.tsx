import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { isCreateProfile } from "../util/isCreateProfile";

type Props = { children: ReactNode };
const AllreadyCreateProfile = ({ children }: Props) => {
  if (isCreateProfile()) {
    return <Navigate to="/rooms" />;
  }
  return children;
};

export default AllreadyCreateProfile;
