// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { DropdownInvestors } from "./DropdownInvestors";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const globeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
  const searchSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
  const burgerSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="m-4">
              <Link href="/" passHref>
                <span className="text-xl font-semibold cursor-pointer">
                  Republic
                </span>
              </Link>
            </div>

            <div
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
              className="hidden md:block"
            >
              <span className="cursor-pointer">Investors</span>
              <DropdownInvestors isVisible={isDropdownVisible} />
            </div>

            <div
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
              className="hidden md:block"
            >
              <span className="cursor-pointer">Businesses</span>
              <DropdownInvestors isVisible={isDropdownVisible} />
            </div>
            <div className="m-2 hidden md:block">
              <div className="flex items-center px-3 py-2 border rounded-3xl bg-gray-200">
                <input
                  className="outline-none bg-gray-200"
                  type="text"
                  placeholder="Search"
                />
                {searchSVG}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block"> {globeSVG}</div>
            <Link href="/login" passHref>
              <span className="cursor-pointer">Log in</span>
            </Link>
            <Link className="hidden md:block" href="/signup" passHref>
              <span className="cursor-pointer">Sign up</span>
            </Link>
            <div className="md:hidden">{burgerSVG}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
