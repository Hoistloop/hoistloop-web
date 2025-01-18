// Vendor
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

// Assets
import logo from "../../assets/hoistloop-logo.png";

// Consts
import routes from "constants/routes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouterState();

  return (
    <header className="w-full border-b border-gray-800">
      <nav className="m-auto flex w-full max-w-screen-laptop items-center justify-between px-[40px] py-[20px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="HoistLoop Logo"
            className="h-8 w-auto"
          />
        </Link>
        {/* Desktop Menu */}
        <div
          data-testid="menu"
          className="hidden sm:flex sm:flex-1 sm:justify-center sm:gap-6 lg:gap-8"
        >
          {routes
            .filter((route) => route.showNav)
            .map((route) => (
              <Link
                to={route.path}
                key={route.name}
                className={`font-medium transition duration-300 laptop:rounded-lg laptop:px-[22px] laptop:py-3 laptop:text-sm laptop:hover:bg-neutral-800 desktop:px-7 desktop:py-[14px] desktop:text-lg ${
                  router.location.pathname === route.path
                    ? "bg-neutral-800"
                    : null
                }`}
              >
                {route.name}
              </Link>
            ))}
        </div>
        {/* Contact Button */}
        <div className="hidden sm:block">
          <Link
            to="/contact"
            className="rounded-lg bg-[#2c70b1] px-5 py-3 text-sm font-medium text-white"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {open ? (
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {routes
              .filter((route) => route.showNav)
              .map((route) => (
                <Link
                  to={route.path}
                  key={route.name}
                  data-testid={route.name}
                  className={`block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                    router.location.pathname === route.path
                      ? "bg-gray-700 text-white"
                      : ""
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            <Link
              to="/contact"
              className="block rounded-lg bg-[#2c70b1] px-5 py-3 text-sm font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
