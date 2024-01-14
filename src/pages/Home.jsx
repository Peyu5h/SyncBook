import { useRef, useState } from "react";
import Header from "../components/Header";
import ClickOutside from "../helpers/ClickOutside";
const Home = () => {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  ClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      {visible && <div className="card w-64 h-64 bg-blue-500" ref={el}></div>}
    </div>
  );
};

export default Home;
