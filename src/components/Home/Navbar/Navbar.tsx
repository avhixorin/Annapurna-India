import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setToggle(false);
    const currentPath = window.location.pathname;
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (currentPath !== "/") {
      navigate("/");
    }
  };

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    window.location.href = "https://forms.gle/or5ZH4S16Ex4qeVm7";
  };

  return (
    <>
      <nav
        className={`${
          scrolled ? "bg-white shadow-md" : "bg-gray-100"
        } fixed w-full z-50 transition-all duration-300 p-4 flex justify-between items-center font-lato`}
      >
        {/* Logo */}
        <div className="text-2xl md:w-1/4 font-bold text-gray-800">
          <img
            src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520033/logo_LS_lmzpjq.png"
            alt="logo"
            className="h-8 m-1 md:h-10 hover:cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>

        {/* Navigation Links (Hidden on smaller screens) */}
        <div className="justify-center w-1/2 flex-1 hidden md:flex font-roboto">
          <ul className="flex flex-row space-x-6 text-slate-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-slate-800" : "hover:text-red-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-slate-800" : "hover:text-red-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  isActive ? "text-slate-800" : "hover:text-red-600"
                }
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-slate-800" : "hover:text-red-600"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Register Button (Hidden on smaller screens) */}
        <div className="space-x-4 md:w-1/4 flex justify-end hidden md:flex">
          <button
            className="px-2 py-1 text-white bg-blue-600 rounded md:py-2 md:px-4 hover:bg-blue-700"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>

        {/* Hamburger Menu (Visible on smaller screens) */}
        <div className="flex items-center md:hidden">
          <svg
            onClick={() => setToggle(!toggle)}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              color: "black",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
          </svg>
        </div>
      </nav>
      {toggle && <SideBar toggle={toggle} setToggle={setToggle} />}
    </>
  );
};

export default Navbar;
