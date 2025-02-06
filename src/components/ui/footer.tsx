"use client";

import "@/components/styles/footer.model.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full max-w-8xl bg-white rounded-lg shadow m-4 dark:bg-secondary">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Rushd™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
