export const NavItems = () => {
  const navItems = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#services" },
    { title: "About Us", href: "#about-us" },
    { title: "Pricing", href: "#pricing" },
  ];

  return (
    <ul className="flex flex-row gap-4">
      {navItems.map((item, key) => (
        <a
          key={key}
          href={item.href}
          className="text-link duration-100 hover:text-primary"
        >
          {item.title}
        </a>
      ))}
    </ul>
  );
};
