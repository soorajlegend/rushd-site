"use client";

import "@/components/styles/footer.model.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full max-w-8xl bg-white rounded-lg shadow m-4 dark:bg-secondary">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left side - Contact info */}
          <div className="text-sm flex flex-wrap gap-x-6">
            <div className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Email: </span>
              <a href="mailto:contact@rushd.com" className="hover:underline">
                contact@rushd.com
              </a>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Phone: </span>
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Right side - Copyright */}
          <div className="mt-4 md:mt-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Rushd™. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}