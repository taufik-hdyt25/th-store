export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string; // URL icon
  items: { name: string; price: string; image: string }[];
};
export const categories: Category[] = [
  {
    id: "games",
    name: "Games",
    slug: "pulsa",
    icon: "https://img.icons8.com/fluency/96/smartphone.png",
    items: [
      {
        name: "Pulsa Telkomsel 25K",
        price: "Rp 26.500",
        image: "https://img.icons8.com/fluency/96/sim-card.png",
      },
      {
        name: "Pulsa XL 50K",
        price: "Rp 51.000",
        image: "https://img.icons8.com/fluency/96/sim-card-chip.png",
      },
      {
        name: "Pulsa Indosat 100K",
        price: "Rp 101.000",
        image: "https://img.icons8.com/fluency/96/sim-card.png",
      },
    ],
  },
  {
    id: "pulsa",
    name: "Pulsa",
    slug: "pulsa",
    icon: "https://img.icons8.com/fluency/96/controller.png",
    items: [
      {
        name: "Mobile Legends Diamonds",
        price: "Rp 15.000",
        image: "https://img.icons8.com/fluency/96/joystick.png",
      },
      {
        name: "PUBG UC",
        price: "Rp 20.000",
        image: "https://img.icons8.com/fluency/96/sniper-rifle.png",
      },
      {
        name: "Valorant Points",
        price: "Rp 50.000",
        image: "https://img.icons8.com/fluency/96/crosshair.png",
      },
    ],
  },
  {
    id: "emoney",
    name: "eMoney",
    slug: "emoney",
    icon: "https://img.icons8.com/fluency/96/wallet.png",
    items: [
      {
        name: "GoPay",
        price: "Rp 10.000",
        image: "https://img.icons8.com/fluency/96/g.png",
      },
      {
        name: "OVO",
        price: "Rp 25.000",
        image: "https://img.icons8.com/fluency/96/o.png",
      },
      {
        name: "Dana",
        price: "Rp 50.000",
        image: "https://img.icons8.com/fluency/96/wallet.png",
      },
    ],
  },
  {
    id: "token-listrik",
    name: "Token Listrik",
    slug: "token-listrik",
    icon: "https://img.icons8.com/fluency/96/electricity.png",
    items: [
      {
        name: "Token PLN 50K",
        price: "Rp 51.500",
        image: "https://img.icons8.com/fluency/96/lightning-bolt.png",
      },
      {
        name: "Token PLN 100K",
        price: "Rp 101.000",
        image: "https://img.icons8.com/fluency/96/lightning-bolt.png",
      },
    ],
  },
];
