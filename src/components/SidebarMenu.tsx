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
          className={
            isSidebarOpen
              ? "fixed top-0 left-0 w-64 z-50 h-full transition-transform duration-300 ease-in-out bg-brand-cream shadow-lg transform border-r border-brand-gold translate-x-0"
              : "fixed top-0 left-0 w-64 z-50 h-full transition-transform duration-300 ease-in-out bg-brand-cream shadow-lg transform border-r border-brand-gold -translate-x-full"
          }
        >
          <div className="flex justify-end mr-1 mt-1">
            <HiXMark
              className="text-3xl cursor-pointer text-brand-charcoal"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          <div className="flex justify-center mt-2">
            <Link
              to="/"
              className="text-4xl font-serif tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl text-brand-charcoal"
            >
              ELENZA
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1 mt-7">
            <Link
              to="/"
              className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
            >
              About
            </Link>
            <Link
              to="/search"
              className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
            >
              Search
            </Link>
            {loginStatus ? (
              <>
                <button
                  onClick={logout}
                  className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
                >
                  Sign up
                </Link>
              </>
            )}
            <Link
              to="/cart"
              className="py-2 border-y border-brand-gold w-full block flex justify-center font-sans text-brand-charcoal"
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
