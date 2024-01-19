import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Auth/Auth";

export default function LoggedInRoute() {
  const user = useSelector((state) => state.user);
  return user ? <Outlet /> : <Login />;
}
