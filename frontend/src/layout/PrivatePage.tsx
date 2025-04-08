import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../util/auth"; // 認証チェック関数をインポート
import { ReactNode } from "react";

type Props = { children: ReactNode };
const PrivatePage = ({ children }: Props) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivatePage;
