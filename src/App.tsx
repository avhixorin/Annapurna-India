import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";

const App = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="fixed top-0 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="pt-10 md:pt-20">
        <Outlet />
      </div>
    <Footer />
      
    </div>
  );
};

export default App;