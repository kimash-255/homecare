import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <p className="text-sm flex items-center">
              <i className="fa fa-map-marker-alt mr-2"></i>
              415 NE 108th Ave, Portland, Oregon, ZIP 97220
            </p>
            <p className="text-sm flex items-center">
              <i className="fa fa-headset mr-2"></i>
              Call us:{" "}
              <Link href="tel:2059608084" className="ml-1 underline">
                205-960-8084
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-sm">
              <i className="fab fa-facebook-square"></i>
            </Link>
            <Link href="#" className="text-sm">
              <i className="fab fa-pinterest-p"></i>
            </Link>
            <Link href="#" className="text-sm">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-2.png"
                alt="Tronis"
                width={200}
                height={60}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <div className="relative group">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Services Details
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
                <li>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    News Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    News Details
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggler */}
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            <i className="lnr-icon-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 lg:hidden`}
      >
        <div className="bg-white h-full w-4/5 max-w-sm flex flex-col py-4">
          <button
            className="ml-auto mr-4 text-gray-700"
            onClick={closeMobileMenu}
          >
            <i className="fa fa-times text-2xl"></i>
          </button>
          <nav className="flex flex-col space-y-4 mt-8 px-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <div>
              <button className="text-gray-700 hover:text-blue-600 w-full text-left">
                Services
              </button>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    Services Details
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button className="text-gray-700 hover:text-blue-600 w-full text-left">
                Blog
              </button>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    News Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    News Details
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
