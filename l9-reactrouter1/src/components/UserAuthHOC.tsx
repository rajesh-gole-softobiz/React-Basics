import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../redux/configureStore";

export default function UserAuthHOC({ children }: any) {
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [user]);

  console.log("user", user);

  return children;
}
