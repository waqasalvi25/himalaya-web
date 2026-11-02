export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Edible Salt", href: "/products/edible-salt" },
      { label: "Salt Lamps", href: "/products/salt-lamps" },
      { label: "Salt Bricks", href: "/products/salt-bricks" },
      { label: "Industrial Salt", href: "/products/industrial-salt" },
    ],
  },
  { label: "Private Labeling", href: "/private-labeling" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Himalaya", href: "/why-himalaya" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerProductLinks = [
  { label: "Edible Salt", href: "/products/edible-salt" },
  { label: "Salt Lamps", href: "/products/salt-lamps" },
  { label: "Salt Bricks", href: "/products/salt-bricks" },
  { label: "Industrial Salt", href: "/products/industrial-salt" },
  { label: "Private Label", href: "/contact" },
];
