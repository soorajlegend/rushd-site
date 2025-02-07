"use client";

import "@/components/styles/footer.model.css";
import { Logo } from "./logo";
import { Button } from "./button";

export function NavbarMenu() {
  return (
    <nav className="sticky top-5  z-50 w-full max-w-7xl mx-auto bg-white rounded-lg shadow m-4 ">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <Logo />
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="mr-4">
            <a href="#header" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#features" className="hover:underline me-4 md:me-6">
              Features
            </a>
          </li>
          <li className="mr-4">
            <a href="#pricing" className="hover:underline me-4 md:me-6">
              Pricing
            </a>
          </li>
          <li className="mr-4">
            <a href="#quotes" className="hover:underline me-4 md:me-6">
              Quotes
            </a>
          </li>
          <li className="mr-4">
            <a href="#contact" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
        </ul>
        <Button size="lg" asChild>
          <a href="#start">Get Started</a>
        </Button>
      </div>
    </nav>
  );
}
