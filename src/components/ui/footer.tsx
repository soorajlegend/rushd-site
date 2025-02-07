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
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
            Features
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
            Pricing
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
            Quotes
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
            X
            </Link>
          </li>
          <li className="mr-4">
            <Link to="#" className="hover:underline me-4 md:me-6">
            LinkedIn
            </Link>
          </li>
          <li className="mr-4">
          <button className="mt-4 px-2 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Register Interest
          </button>
          </li>
          <li className="mr-4">
          <div className="text-gray-500 dark:text-gray-400">
            <p className="text-sm mb-1">
              <span className="font-medium">Email: </span>
              <a href="mailto:contact@rushd.com" className="hover:underline">
                contact@rushd.com
              </a>
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone: </span>
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
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