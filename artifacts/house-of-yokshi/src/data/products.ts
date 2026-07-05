import type { Product } from "@/hooks/use-shop";
import ringDiamond from "@/assets/products/ring-diamond.png";
import necklacePearl from "@/assets/products/necklace-pearl.png";
import earringsHoop from "@/assets/products/earrings-hoop.png";
import braceletChain from "@/assets/products/bracelet-chain.png";
import ringSignet from "@/assets/products/ring-signet.png";
import necklaceLayered from "@/assets/products/necklace-layered.png";
import earringsStud from "@/assets/products/earrings-stud.png";
import braceletCuff from "@/assets/products/bracelet-cuff.png";

export const products: Product[] = [
  {
    id: "p-1",
    name: "Lumière Diamond Ring",
    category: "Rings",
    price: 850,
    image: ringDiamond,
    tags: ["Bestseller", "New"],
    description: "A delicate 14k gold band featuring a single ethically sourced diamond. The perfect symbol of understated elegance."
  },
  {
    id: "p-2",
    name: "Aura Pearl Pendant",
    category: "Necklaces",
    price: 620,
    image: necklacePearl,
    tags: ["New"],
    description: "Lustrous freshwater pearl suspended on a fine 18k gold chain. A timeless classic reinvented."
  },
  {
    id: "p-3",
    name: "Solstice Gold Hoops",
    category: "Earrings",
    price: 340,
    image: earringsHoop,
    tags: ["Bestseller"],
    description: "Minimalist everyday hoops crafted from solid 14k gold. Lightweight and endlessly versatile."
  },
  {
    id: "p-4",
    name: "Whisper Chain Bracelet",
    category: "Bracelets",
    price: 280,
    image: braceletChain,
    tags: [],
    description: "An ultra-fine gold chain that catches the light with every movement. Designed for seamless stacking."
  },
  {
    id: "p-5",
    name: "Heritage Signet Ring",
    category: "Rings",
    price: 790,
    image: ringSignet,
    tags: ["Limited Edition"],
    description: "A bold yet refined signet ring inspired by vintage heirlooms. Solid 18k gold."
  },
  {
    id: "p-6",
    name: "Eclipse Layered Necklace",
    category: "Necklaces",
    price: 890,
    image: necklaceLayered,
    tags: ["Bestseller"],
    description: "Take the guesswork out of layering with this pre-styled double chain necklace."
  },
  {
    id: "p-7",
    name: "Verdant Emerald Studs",
    category: "Earrings",
    price: 450,
    image: earringsStud,
    tags: ["New"],
    description: "Tiny vibrant emeralds set in 14k gold prongs. A subtle pop of color for your ear stack."
  },
  {
    id: "p-8",
    name: "Zenith Cuff Bracelet",
    category: "Bracelets",
    price: 1100,
    image: braceletCuff,
    tags: ["Statement"],
    description: "A substantial architectural cuff in 18k gold vermeil. A true statement piece."
  }
];
