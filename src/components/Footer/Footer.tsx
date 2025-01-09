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
      <div className="flex flex-1 flex-row items-center justify-center gap-4">
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
          <SocialIcon
            href="mailto:example@example.com"
            icon={<FaFacebookSquare />}
          />
          <SocialIcon
            href="tel:+1234567890"
            icon={<FaInstagram />}
          />
          <SocialIcon
            href="https://www.google.com/maps"
            icon={<FaLinkedin />}
          />
        </div>
      </div>
      <div className="m-auto my-6 h-px w-9/12 max-w-screen-lg bg-neutral-800"></div>
      {/* Ajuste de margen */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-1 flex-row gap-4">
          <button className="flex items-center gap-1 bg-transparent text-white ">
            <CiMail className="size-6" />
            hoistloop@gmail.com
          </button>
          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() => window.open("https://wa.me/5491124090415", "_blank")}
          >
            <BsTelephone className="size-5" />
            +54 11 2409 0415
          </button>
          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() =>
              (window.location.href = "https://www.google.com/maps")
            }
          >
            <CiLocationOn className="size-6" />
            Argentina, Santa Fe
          </button>
          <div className="grid flex-1 justify-items-end">
            © 2024 HoistLoop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
