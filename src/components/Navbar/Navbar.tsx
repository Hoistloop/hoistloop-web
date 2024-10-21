// Vendor
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

// Components
import MobileIconMenu from "@components/MobileIconMenu/MobileIconMenu";

// Assets
import logo from "../../assets/hoistloop-logo.png";

// Consts
import routes from "constants/routes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouterState();

  return (
    <header className="flex items-center justify-between mobile:px-4 mobile:py-10 mobile:pb-5 laptop:max-w-screen-laptop laptop:px-20 laptop:py-5 desktop:max-w-screen-desktop desktop:px-[162px] desktop:py-[20px]">
      <Link
        to="/"
        className="h-auto mobile:w-[118px] desktop:w-[177px]"
      >
        <img
          src={logo}
          alt="logo"
        />
      </Link>
      <div
        className={`mobile:fixed mobile:top-0 ${
          open ? "mobile:left-0" : "mobile:left-[-12000px;]"
        } mobile:flex mobile:h-full mobile:w-4/5 mobile:flex-col mobile:gap-5 mobile:bg-neutral-800 mobile:px-12 mobile:py-24 mobile:transition-[left] mobile:duration-300 laptop:static laptop:flex laptop:w-auto laptop:flex-row laptop:bg-transparent laptop:p-0 desktop:items-center desktop:gap-3`}
      >
        {routes.map((route) => (
          <Link
            to={route.path}
            key={route.name}
            className={`font-medium transition duration-300 laptop:rounded-lg laptop:px-[22px] laptop:py-3 laptop:text-sm laptop:hover:bg-neutral-800 desktop:px-7 desktop:py-[14px] desktop:text-lg ${
              router.location.pathname === route.path ? "bg-neutral-800" : null
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>
      <div className="mobile:hidden laptop:block">
        <a
          href="#contact"
          className="rounded-lg bg-[#9EFF00] font-medium text-black laptop:px-5 laptop:py-3 laptop:text-sm desktop:px-6 desktop:py-4 desktop:text-lg"
        >
          Contact
        </a>
      </div>

      <div className="mobile:flex laptop:hidden">
        <div
          className="p-[6px} flex size-[46px] cursor-pointer items-center justify-center rounded-md bg-neutral-800"
          onClick={() => setOpen(!open)}
        >
          <MobileIconMenu
            color="#9EFF00"
            width={26}
            height={18}
          />
        </div>
      </div>
    </header>
  );
}
