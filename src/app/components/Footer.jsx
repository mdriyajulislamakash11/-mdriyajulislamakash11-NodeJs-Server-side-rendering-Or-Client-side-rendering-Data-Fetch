"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <footer className="bg-green-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Menu Links */}
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            <Link href="/about" className="hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <Link href="/jobs" className="hover:text-black">
              Jobs
            </Link>
            <Link href="/press" className="hover:text-black">
              Press Kit
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-..."></path>
              </svg>
            </a>

            <a href="#" className="hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897..."></path>
              </svg>
            </a>

            <a href="#" className="hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955..."></path>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} — All Rights Reserved | Your Website
            Name
          </p>
        </div>
      </footer>
    );
  } else {
    return <></>;
  }
};

export default Footer;
