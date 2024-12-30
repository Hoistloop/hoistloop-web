// Vendor
import { Link } from "@tanstack/react-router";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

// Components
import SocialIcon from '@components/SocialIcon';

// Assets
import logo from "../../assets/hoistloop-logo.png";

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="flex flex-col gap-4 w-full">
      <div className="flex flex-1 flex-row gap-4 justify-center items-center">
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
          {["Home", "Services", "Work", "Process", "About", "Careers", "Contact"].map((item) => (
            <button key={item} className="bg-transparent text-white hover:underline">
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-row gap-2 border border-neutral-800 rounded-xl py-8 px-6 justify-center items-center">
          <div>Stay Connected</div>
          <SocialIcon href="mailto:example@example.com" icon={<PaintBrushIcon/>} />
          <SocialIcon href="tel:+1234567890" icon={<PaintBrushIcon/>} />
          <SocialIcon href="https://www.google.com/maps" icon={<PaintBrushIcon/>} />
        </div>
      </div>

      <div className="h-px bg-neutral-800 my-6"></div>

      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex-1 flex flex-row gap-4">
            <button className="bg-transparent text-white hover:underline flex items-center gap-1" onClick={() => window.location.href = 'mailto:example@example.com'}>
              <PaintBrushIcon className="h-5 w-5" />
              hoistloop@email.com
            </button>
            <button className="bg-transparent text-white hover:underline flex items-center gap-1" onClick={() => window.location.href = 'tel:+1234567890'}>
              <PaintBrushIcon className="h-5 w-5" />
              +54 342 111 1111
            </button>
            <button className="bg-transparent text-white hover:underline flex items-center gap-1" onClick={() => window.location.href = 'https://www.google.com/maps'}>
              <PaintBrushIcon className="h-5 w-5" />
              Argentina, Santa Fe
            </button>
        </div>

        <div className="flex-1">© 2024 HoistLoop. All rights reserved.</div>
      </div>
    </footer>
  );
}
