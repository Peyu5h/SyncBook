import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Auth";
import Home from "./pages/Home";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedIn from "./routes/NotLoggedIn";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const path = pathname.split("/");
  console.log(path);

  console.log(location);
  return (
    <>
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>

        <Route element={<NotLoggedIn />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
      </Routes>
    </>
  );
};

export default App;
