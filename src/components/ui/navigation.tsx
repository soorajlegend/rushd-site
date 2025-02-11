"use client";

import "@/components/styles/footer.model.css";
import { Logo } from "./logo";
import { Button } from "./button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavbarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-5 z-50 w-full max-w-7xl mx-auto bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto p-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:gap-x-8">
            <ul className="flex items-center space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#header"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#quotes"
                  className="hover:text-gray-900 transition-colors"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
            <Button size="lg" asChild>
              <a href="#getStarted">Get Started</a>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 border-t border-gray-200 pt-4`}
        >
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#header"
                className="hover:text-gray-900 transition-colors block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-gray-900 transition-colors block"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-gray-900 transition-colors block"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#quotes"
                className="hover:text-gray-900 transition-colors block"
              >
                Quotes
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-900 transition-colors block"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <Button size="lg" className="w-full" asChild>
              <a href="#getStarted">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
