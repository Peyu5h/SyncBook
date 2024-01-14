import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Auth";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
      </Routes>
    </>
  );
};

export default App;
