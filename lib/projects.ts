export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    slug: "enqore",
    title: "Enqore",
    year: "2024",
    description: "Website for a Microsoft Business Applications and Advanced Analytics partner.",
    image: "/enqore.webp",
    url: "https://enqore.se",
  },
  {
    slug: "husbilslandet",
    title: "Husbilslandet",
    year: "2024",
    description: "Website for a Swedish motorhome retailer.",
    image: "/husbilslandet.webp",
    url: "https://husbilslandet.se",
  },
  {
    slug: "audiovision",
    title: "Audiovision",
    year: "2023",
    description: "Website for a leading Pro AV and audio distributor.",
    image: "/audiovision.webp",
    url: "https://audiovision.se",
  },
  {
    slug: "flex",
    title: "Flex",
    year: "2023",
    description: "Website for a modern office solutions provider.",
    image: "/flex.webp",
    url: "https://flex.se/",
  },
  {
    slug: "gibon",
    title: "Gibon",
    year: "2022",
    description: "Website for an IT partner operating across Sweden.",
    image: "/gibon.webp",
    url: "https://gibon.se",
  },
  {
    slug: "rabiega",
    title: "Domaine Rabiega",
    year: "2022",
    description: "Website for a vineyard and hotel in Provence.",
    image: "/rabiega.webp",
    url: "https://rabiega.com",
  },
];
