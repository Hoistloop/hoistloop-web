// Vendor
import { Link } from "@tanstack/react-router";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";

// Components
import SocialIcon from "@components/SocialIcon";

// Assets
import logo from "../../assets/hoistloop-logo.png";

export default function Footer() {
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
          {["Home", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="bg-transparent text-white hover:underline"
            >
              {item}
            </button>
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
          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() =>
              (window.location.href = "mailto:example@example.com")
            }
          >
            <PaintBrushIcon className="size-5" />
            hoistloop@email.com
          </button>
          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() => (window.location.href = "tel:+1234567890")}
          >
            <PaintBrushIcon className="size-5" />
            +54 342 111 1111
          </button>
          <button
            className="flex items-center gap-1 bg-transparent text-white hover:underline"
            onClick={() =>
              (window.location.href = "https://www.google.com/maps")
            }
          >
            <PaintBrushIcon className="size-5" />
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
