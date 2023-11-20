import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./header";
import About from "./About";
import Footer from "./Footer";
import Galery from "./Galery";
import Home from "./Home";
import Menu from "./Menu";
import News from "./News";
import Service from "./Service";
import Testi from "./Testi";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Header />,
    <Home />,
    <About />,
    <Menu />,
    <Service />,
    <Testi />,
    <News />,
    <Galery />,
    <Footer />

  )
  
}

export default App;
