// Vendor
import { Link, useRouterState } from "@tanstack/react-router";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";

// Components
import SocialIcon from "@components/SocialIcon";

// Assets
import logo from "../../assets/hoistloop-logo.png";
// Consts
import routes from "constants/routes";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  const router = useRouterState();

  return (
    <footer className="flex w-full flex-col gap-6  border-t border-neutral-800 p-6">
      <div className="flex flex-1 flex-col items-center justify-center gap-12 md:flex-row md:gap-4">
        <Link
          to="/"
          className="h-auto w-[177px]"
        >
          <img
            className="h-auto w-[177px]"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="m-auto block h-px w-full bg-neutral-800 sm:hidden"></div>

        <div className="flex flex-row gap-4">
          {routes.map((route) => (
            <Link
              to={route.path}
              key={route.name}
              className={`bg-transparent text-white transition duration-300 hover:underline ${
                router.location.pathname === route.path ? "underline" : ""
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-2 rounded-xl border border-neutral-800 px-6 py-8">
          <div>Stay Connected</div>
          {/* <SocialIcon
            href="mailto:example@example.com"
            icon={<FaFacebookSquare />}
          /> */}
          <SocialIcon
            href="https://www.instagram.com/hoistloop/?igsh=MWEybmJpZGF0YXZxdA%3D%3D"
            icon={<FaInstagram />}
          />
          <SocialIcon
            href="https://www.linkedin.com/company/hoistloop/?viewAsMember=true"
            icon={<FaLinkedin />}
          />
        </div>
      </div>
      <div className="m-auto my-6 h-px w-full  bg-neutral-800 md:w-9/12"></div>
      {/* Ajuste de margen */}
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-1 flex-col items-center gap-10 md:w-9/12 md:flex-row md:gap-4">
          <button className="flex items-center gap-1 bg-transparent text-white">
            <CiMail className="size-6" />
            hoistloop@gmail.com
          </button>

          <div className="m-auto block h-px w-full bg-neutral-800 sm:hidden"></div>

          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() => window.open("https://wa.me/5491124090415", "_blank")}
          >
            <BsTelephone className="size-5" />
            +54 11 2409 0415
          </button>
          <div className="m-auto block h-px w-full bg-neutral-800 sm:hidden"></div>
          <button className="flex items-center gap-1 bg-transparent text-white">
            <CiLocationOn className="size-6" />
            Argentina, Santa Fe
          </button>
          <div className="m-auto block h-px w-full bg-neutral-800 sm:hidden"></div>
          <div className="grid flex-1 justify-items-center md:justify-items-end">
            © 2024 HoistLoop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
