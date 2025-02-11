"use client";

import "@/components/styles/footer.model.css";

export function Footer() {
  return (
    <footer className="w-full max-w-8xl bg-white rounded-lg shadow m-4 dark:bg-secondary">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left side - Contact info */}
          <div className="text-sm flex flex-wrap gap-6">
            <div className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Email: </span>
              <a href="mailto:Info@rushd.tech" className="hover:underline">
                Info@rushd.tech
              </a>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Whatsapp: </span>
              <a href="tel:+966534336584" className="hover:underline">
                +966 53 433 6584
              </a>
            </div>
            <div className="text-gray-500 dark:text-gray-400 flex gap-6">
              <a
                href="https://www.linkedin.com/company/rushdtech/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/userushd?s=21"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/userushd/profilecard/?igsh=Znd6cmVya2ZnaDlh"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
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
