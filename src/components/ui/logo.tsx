import logo from "@/assets/logo.png";

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-10" alt="Rushd Logo" />
    </a>
  );
}
