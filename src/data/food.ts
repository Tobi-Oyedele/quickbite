export interface Food {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const foods: Food[] = [
  {
    id: 1,
    name: "Jollof Rice",
    category: "Lunch",
    price: 8000,
    image: "/images/jollof-rice.jpg",
    description: "Classic Nigerian jollof rice cooked in rich tomato stew.",
  },
  {
    id: 2,
    name: "White Rice",
    category: "Lunch",
    price: 6000,
    image: "/images/white-rice.jpg",
    description: "White Rice and Stew with your choice of protein.",
  },
  {
    id: 3,
    name: "Pancakes",
    category: "Breakfast",
    price: 1500,
    image: "/images/pancakes.jpg",
    description: "Fluffy pancakes served with syrup and butter.",
  },
  {
    id: 4,
    name: "Akara",
    category: "Breakfast",
    price: 1500,
    image: "/images/akara.jpg",
    description:
      "Deep-fried bean cakes, crispy on the outside and fluffy inside.",
  },
  {
    id: 5,
    name: "Moi Moi",
    category: "Breakfast",
    price: 2000,
    image: "/images/moi-moi.png",
    description: "Steamed bean pudding with spices and vegetables.",
  },
  {
    id: 6,
    name: "Yam and Egg Sauce",
    category: "Breakfast",
    price: 3500,
    image: "/images/yam-and-egg-sauce.jpg",
    description: "Boiled yam served with savory egg and tomato sauce.",
  },
  {
    id: 7,
    name: "Pounded Yam and Egusi Soup",
    category: "Lunch",
    price: 9000,
    image: "/images/pounded-yam.jpg",
    description: "Smooth pounded yam served with rich melon seed soup.",
  },
  {
    id: 8,
    name: "Fried Rice",
    category: "Lunch",
    price: 7500,
    image: "/images/fried-rice.jpg",
    description:
      "Nigerian-style fried rice with vegetables and choice of protein.",
  },
  {
    id: 9,
    name: "Plantain and Egg",
    category: "Breakfast",
    price: 3000,
    image: "/images/plantain-and-egg.jpg",
    description: "Fried ripe plantains served with scrambled eggs.",
  },
  {
    id: 10,
    name: "Amala and Ewedu",
    category: "Lunch",
    price: 8500,
    image: "/images/amala.jpg",
    description: "Yam flour swallow with traditional jute leaf soup.",
  },
  {
    id: 11,
    name: "Bread and Akara",
    category: "Breakfast",
    price: 2000,
    image: "/images/bread-and-akara.jpg",
    description: "Soft bread paired with crispy bean cakes.",
  },
  {
    id: 12,
    name: "Ofada Rice and Ayamase Sauce",
    category: "Lunch",
    price: 9500,
    image: "/images/ayamase.png",
    description: "Local rice served with spicy green pepper sauce.",
  },
  {
    id: 13,
    name: "Pap and Akara",
    category: "Breakfast",
    price: 1800,
    image: "/images/pap.jpg",
    description: "Smooth cornmeal porridge served with bean cakes.",
  },
  {
    id: 14,
    name: "Efo Riro with Pounded Yam",
    category: "Lunch",
    price: 8800,
    image: "/images/efo-riro-pounded-yam.jpg",
    description: "Rich spinach stew with assorted meats and pounded yam.",
  },
  {
    id: 15,
    name: "Indomie and Egg",
    category: "Breakfast",
    price: 2200,
    image: "/images/indomie.jpg",
    description: "Quick instant noodles stir-fried with eggs and vegetables.",
  },
  {
    id: 16,
    name: "Toluwani's Famous Banana Bread",
    category: "Dessert",
    price: 9000,
    image: "/images/banana-bread.jpg",
    description:
      "Moist and sweet bread made with ripe bananas, perfect for breakfast or snacks.",
  },
];
