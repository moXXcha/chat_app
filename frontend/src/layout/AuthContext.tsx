import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

type Props = { children: ReactNode };
// 初期値として空のオブジェクトを渡す

interface CustomJwtPayload extends JwtPayload {
  userId: string; // JWTトークンに含まれているuserIdの型を定義
}

interface AuthContextType {
  userId: string | null;
}
const AuthContext = createContext<AuthContextType>({ userId: null });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // またはセッションストレージ
    if (token) {
      try {
        const decoded = jwtDecode<CustomJwtPayload>(token);
        setUserId(decoded.userId); // JWTからuserIdをセット
      } catch (error) {
        console.error("トークンのデコードに失敗しました", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId }}>{children}</AuthContext.Provider>
  );
};
