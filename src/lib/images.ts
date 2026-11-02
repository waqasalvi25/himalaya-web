import { ImageUrl } from "@/utils/Functions";

export const images = {
  logo: ImageUrl("h-logo.png"),
  preHim: ImageUrl("him.png"),
  preMark: ImageUrl("center=logo.png"),
  preLaya: ImageUrl("laya.png"),
  hero: ImageUrl("hero-salt.jpg"),
  heritage: ImageUrl("heritage-salt.png"),
  mountains: ImageUrl("mountains.jpg"),
  saltLamp: ImageUrl("salt-lamp.jpg"),
  rooted: ImageUrl("rooted-nature.png"),
  yourBrand: ImageUrl("your-brand.png"),
  catalogueLeft: ImageUrl("h1.png"),
  catalogueRight: ImageUrl("h2.png"),
  products: {
    edible: ImageUrl("product-edible.png"),
    bricks: ImageUrl("product-bricks.png"),
    lamp: ImageUrl("product-lamp.png"),
    industrial: ImageUrl("product-industrial.png"),
  },
  gallery: {
    crystals: ImageUrl("gi-1.png"),
    lamp: ImageUrl("gi-2.png"),
    mine: ImageUrl("gi-3.png"),
    store: ImageUrl("gi-4.png"),
    spa: ImageUrl("gi-5.png"),
  },
} as const;
