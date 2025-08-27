import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { setLoginStatus } from "../features/auth/authSlice";
import { store } from "../store";

const SidebarMenu = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (prev: boolean) => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { loginStatus } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const logout = () => {
    toast.error("Logged out successfully");
    localStorage.removeItem("user");
    store.dispatch(setLoginStatus(false));
    navigate("/login");
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]);

  return (
    <>
      {(isSidebarOpen || isAnimating) && (
        <div
        className={`fixed top-0 left-0 w-[28rem] pt-[10px] pr-[10px] z-50 h-full transition-transform duration-300 ease-in-out bg-white shadow-lg transform border-r border-black 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        
        >
          <div className="flex justify-end mr-1 mt-1">
            <HiXMark
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          <div className="flex justify-center mt-2">
            <Link
              to="/"
              className="text-4xl font-light tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl"
            >
              zubair
            </Link>
          </div>
          <div className="flex flex-col px-[40px] items-center gap-1 mt-7">
            <Link
              to="/"
              className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
            >
              Men
            </Link>
            <Link
              to="/shop"
              className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
            >
              Women
            </Link>
            <Link
              to="/search"
              className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
            >
              Search
            </Link>
            {loginStatus ? (
              <>
                <button
                  onClick={logout}
                  className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
                >
                  Sign up
                </Link>
              </>
            )}
            <Link
              to="/cart"
              className="py-2  border-b border-secondaryBrown w-full block flex justify-center"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default SidebarMenu;
