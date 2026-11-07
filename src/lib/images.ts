import { ImageUrl } from "@/utils/Functions";

export const images = {
  logo: ImageUrl("h-logo.png"),
  footerLogo: ImageUrl("footer-logo.png"),
  preHim: ImageUrl("him.png"),
  preMark: ImageUrl("center=logo.png"),
  preLaya: ImageUrl("laya.png"),
  hero: ImageUrl("hero-salt.jpg"),
  heritage: ImageUrl("heritage-salt.png"),
  mountains: ImageUrl("new-bg.png"),
  // mountains: ImageUrl("mountains.jpg"),
  saltLamp: ImageUrl("salt-lamp.jpg"),
  rooted: ImageUrl("rooted-nature.png"),
  yourBrand: ImageUrl("your-brand.png"),
  aboutMine: ImageUrl("about-img1.png"),
  aboutCrystals: ImageUrl("about-img2.png"),
  catalogueLeft: ImageUrl("h1.png"),
  catalogueRight: ImageUrl("h2.png"),
  catalogueCover: ImageUrl("catalogue-cover.png"),
  products: {
    edible: ImageUrl("product-edible.png"),
    bricks: ImageUrl("product-bricks.png"),
    lamp: ImageUrl("product-lamp.png"),
    industrial: ImageUrl("product-industrial.png"),
  },
  kitchen: {
    bowl: ImageUrl("kitchen-bowl.png"),
    shelf: ImageUrl("kitchen-shelf.png"),
    pack: ImageUrl("kitchen-pack.png"),
  },
  tiles: {
    lounge: ImageUrl("tiles-lounge.png"),
    spa: ImageUrl("tiles-spa.png"),
  },
  lampDecor: {
    glow: ImageUrl("lamp-glow.png"),
    bedroom: ImageUrl("lamp-bedroom.png"),
  },
  bulk: {
    warehouse: ImageUrl("bulk-warehouse.png"),
  },
  gallery: {
    crystals: ImageUrl("gi-1.png"),
    lamp: ImageUrl("gi-2.png"),
    mine: ImageUrl("gi-3.png"),
    store: ImageUrl("gi-4.png"),
    spa: ImageUrl("gi-5.png"),
  },
  galleryPage: {
    crystals: ImageUrl("gallery-crystals.png"),
    mine: ImageUrl("gallery-mine.png"),
    shelf: ImageUrl("gallery-shelf.png"),
    pack: ImageUrl("gallery-pack.png"),
  },
} as const;
