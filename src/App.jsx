import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Auth";
import Home from "./pages/Home";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedIn from "./routes/NotLoggedIn";

const App = () => {
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
