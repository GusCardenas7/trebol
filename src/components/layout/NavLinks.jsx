export default function NavLinks({ open }) {
  const navItems = [
    {
      id: 0,
      title: "Inicio",
      label: "Inicio",
      url: "/",
    },
    {
      id: 1,
      title: "Nosotros",
      label: "Nosotros",
      url: "/about",
    },
    {
      id: 2,
      title: "Desarrollo",
      label: "Desarrollo",
      url: "/products",
    },
    {
      id: 3,
      title: "Tecnología",
      label: "Tecnología",
      url: "/technology",
    },
    {
      id: 4,
      title: "Contacto",
      label: "Contacto",
      url: "/contact",
    },
    {
      id: 5,
      title: "FAQ'S",
      label: "FAQ'S",
      url: "/faq",
    },
  ];

  return (
    <div
      className={`bg-primary linear w-full flex-col items-end gap-4 overflow-hidden transition-all duration-300 ${
        open
          ? "mt-4 flex max-h-96 translate-y-0 opacity-100"
          : "mt-0 flex max-h-0 -translate-y-2 opacity-0"
      } md:flex md:max-h-none md:translate-y-0 md:flex-row md:items-center md:justify-end md:gap-4 md:p-0 md:opacity-100 md:transition-none`}
    >
      {navItems.map((link) => (
        <>
          <a
            key={link.id}
            onClick={() => setOpen(false)}
            aria-label={link.label}
            href={link.url}
            className="hover:opacity-80"
          >
            {link.title}
          </a>
        </>
      ))}
    </div>
  );
}
