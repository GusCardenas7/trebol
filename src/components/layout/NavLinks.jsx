import { navItems } from "../../lib/utils/navItems.js";

export default function NavLinks({ open }) {
  return (
    <div
      className={`bg-primary linear w-full flex-col items-end gap-4 overflow-hidden transition-all duration-500 ${
        open
          ? "mt-4 flex max-h-96 translate-y-0 opacity-100"
          : "mt-0 flex max-h-0 -translate-y-2 opacity-0"
      } md:flex md:max-h-none md:translate-y-0 md:flex-row md:items-center md:justify-end md:gap-4 md:p-0 md:opacity-100 md:transition-none`}
    >
      {navItems.map((link) => (
        <a
          key={link.id}
          aria-label={link.label}
          href={link.url}
          className="inline-block w-fit hover:opacity-80"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
