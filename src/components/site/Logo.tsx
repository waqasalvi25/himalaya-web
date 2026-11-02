import { images } from "@/lib/images";

type LogoProps = {
  tone?: "dark" | "light";
};

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="Himalaya"
      className={`him-logo-img him-logo-img-${tone}`}
    />
  );
}
