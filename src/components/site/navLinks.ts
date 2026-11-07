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
      { label: "Himalayan Pink Salt", href: "/products/himalayan-pink-salt" },
      { label: "Kitchen and Seasoning", href: "/products/kitchen-and-seasoning" },
      { label: "Salt Tiles & Panels", href: "/products/salt-tiles-panels" },
      { label: "Home Decor Salt Lamp", href: "/products/home-decor-salt-lamp" },
      { label: "Industrial & Bulk Salt", href: "/products/industrial-bulk-salt" },
    ],
  },
  { label: "Private Labeling", href: "/private-labeling" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About The Company", href: "/about" },
  { label: "Photos", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
];

export const footerInfoLinks = [
  { label: "FAQ's", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];
