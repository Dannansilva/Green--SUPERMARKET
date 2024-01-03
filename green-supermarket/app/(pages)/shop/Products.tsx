import React from "react";
import { SlHandbag } from "react-icons/sl";


const Products = [
  {
    id: 1,
    name: <p className="">Apple</p>,
    image:
      "/assets/ShopPage/fruits/Green fresh apples on white background..png",
    price: "LKR 500.00",
    image2: <SlHandbag />,
    category: 1,
    quantity:1,
  },
  {
    id: 2,
    name: <p className="  ">Orange</p>,
    image: "/assets/ShopPage/fruits/Orange juicy ripe circle citrus.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 1,
    quantity:1,

  },
  {
    id: 3,
    name: <p className=" ">Mango</p>,
    image: "/assets/ShopPage/fruits/mango.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 1,
    quantity:1,

  },
  // {
  //   id: 4,
  //   name: <p className=" text-Lightgray hover:text-DarkGreen ">Banana</p>,
  //   image: "/assets/ShopPage/fruits/Closeup shot of a bunch of banana.png",
  //   price: "LKR 100.00",
  //   image2: <SlHandbag />,
  //   category: 1,
  // },
  // {
  //   id: 5,
  //   name: <p className=" text-Lightgray hover:text-DarkGreen ">Grapes</p>,
  //   image: "/assets/ShopPage/fruits/Grape on white background.png",
  //   price: "LKR 100.00",
  //   image2: <SlHandbag />,
  //   category: 1,
  // },
  // {
  //     id:6,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Pineapple</p>,
  //     image:"/assets/ShopPage/fruits/Ripe pineapple hala and slices flat lay on a white.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },{
  //     id:7,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Papaya</p>,
  //     image:"/assets/ShopPage/fruits/Papaya fruit isolated.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:8,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Dragon Fruit</p>,
  //     image:"/assets/ShopPage/fruits/Dragon fruit.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:9,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Pear</p>,
  //     image:"/assets/ShopPage/fruits/Juicy pears on a white surface.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:10,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Avocado</p>,
  //     image:"/assets/ShopPage/fruits/Avocado.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:11,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Kiwi</p>,
  //     image:"/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:12,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Peach</p>,
  //     image:"/assets/ShopPage/fruits/Fresh yellow apricots isolated on white.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:13,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Pomegranate</p>,
  //     image:"/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background-1.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:14,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Mangosteen</p>,
  //     image:"/assets/ShopPage/fruits/Fresh mangosteen on white.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:15,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Watermelon</p>,
  //     image:"/assets/ShopPage/fruits/Green avocados on a white surface.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:16,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Rambutan</p>,
  //     image:"/assets/ShopPage/fruits/Juicy food fresh fruit nutrition.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:17,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Star Fruit</p>,
  //     image:"/assets/ShopPage/fruits/Star fruit or carambola.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  // {
  //     id:18,
  //     name:<p className=" text-Lightgray hover:text-DarkGreen ">Strawberry</p>,
  //     image:"/assets/ShopPage/fruits/Strawberry.png",
  //     price:"LKR 100.00",
  //     image2: <SlHandbag/>
  // },
  {
    id: 6,
    name: <p className="">Tomatoes</p>,
    image: "/assets/ShopPage/vegetables/Fresh red tomatoes.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 2,
  },
  // {
  //   id: 7,
  //   name: <p className=" text-Lightgray hover:text-DarkGreen ">Potatoes</p>,
  //   image: "/assets/ShopPage/vegetables/Potato.png",
  //   price: "LKR 100.00",
  //   image2: <SlHandbag />,
  //   category: 2,
  // },
  {
    id: 8,
    name: <p className=" ">Cabbage</p>,
    image:
      "/assets/ShopPage/vegetables/Fresh cabbage vegetable isolated on a white background.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 2,
  },
  {
    id: 9,
    name: (
      <p className="">Sweet potatoes</p>
    ),
    image: "/assets/ShopPage/vegetables/Sweet potato.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 2,
  },
  {
    id: 10,
    name: (
      <p className="">Green Lettuce</p>
    ),
    image:
      "/assets/ShopPage/vegetables/White vegetable healthy fresh natural.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 2,
  },

  /* Bakey */
  {
    id: 11,
    name: <p className=" ">Bread</p>,
    image: "/assets/ShopPage/Bakery/Homemade crunchy bread with grains.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 3,
  },
  {
    id: 12,
    name: (
      <p className="  ">Garlic bread</p>
    ),
    image: "/assets/ShopPage/Bakery/Homemade crunchy bread with grains-1.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 3,
  },
  {
    id: 13,
    name: (
      <p className=" ">Hamburger bun</p>
    ),
    image: "/assets/ShopPage/Bakery/Fast food and junk food concept.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 3,
  },
  {
    id: 14,
    name: (
      <p className=" ">Submarine bun</p>
    ),
    image: "/assets/ShopPage/Bakery/Delicious sandwich.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 3,
  },
  {
    id: 15,
    name: (
      <p className=" ">Cinnamon roll</p>
    ),
    image: "/assets/ShopPage/Bakery/Cinnamon roll.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 3,
  },

  /* Meat & fish */
  {
    id: 16,
    name: <p className=" ">Chicken</p>,
    image: "/assets/ShopPage/meat/Raw chicken meat.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 4,
  },
  {
    id: 17,
    name: <p className="  ">Beef</p>,
    image: "/assets/ShopPage/meat/Raw steak on white paper.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 4,
  },
  {
    id: 18,
    name: <p className=" ">Mutton</p>,
    image: "/assets/ShopPage/meat/Raw steak on white paper-1.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 4,
  },
  {
    id: 19,
    name: <p className="">Pork</p>,
    image: "/assets/ShopPage/meat/Raw meat.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 4,
  },

  {
    id: 20,
    name: <p className=" ">Turkey</p>,
    image: "/assets/ShopPage/meat/turkey.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 4,
  },

  /* Spices */
  {
    id: 21,
    name: (
      <p className=" ">Chilli powder</p>
    ),
    image: "/assets/ShopPage/Spices/Chilli pepper on white surface.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 5,
  },
  {
    id: 22,
    name: (
<p>Curry powder</p>
    ),
    image: "/assets/ShopPage/Spices/currypowder.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 5,
   
  },
  {
    id: 23,
    name: (
      <p className=" ">Tumeric powder</p>
    ), 
    image: "/assets/ShopPage/Spices/tumericpowder.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 5,
  },
  {
    id: 24,
    name: <p className=" ">Pepper</p>,
    image: "/assets/ShopPage/Spices/pepper.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 5,
  },
  {
    id:25,
    name: <p className=" ">Salt</p>,
    image: "/assets/ShopPage/Spices/salt.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 5,
  },

  /* Stationary */

  {
    id: 26,
    name: (
      <p className=" ">
        Single ruled 80pg Book
      </p>
    ),
    image:
      "/assets/ShopPage/Stationary/Blank note book  mock up on white background ..png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 6,
  },
  {
    id: 27,
    name: <p className="  ">Pen</p>,
    image: "/assets/ShopPage/Stationary/pen.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 6,
  },
  {
    id: 28,
    name: <p className=" text-Lightgray hover:text-DarkGreen ">Pencil</p>,
    image: "/assets/ShopPage/Stationary/pencil.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 6,
  },
  {
    id: 29,
    name: <p className=" ">A4 papers</p>,
    image: "/assets/ShopPage/Stationary/A4papers.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 6,
  },
  {
    id: 30,
    name: (
      <p className=" ">Color pencils</p>
    ),
    image: "/assets/ShopPage/Stationary/Close-up of colored pencils.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 6,
  },

  /* detergents */

  {
    id: 31,
    name: <p className=" ">Body soap</p>,
    image:
      "/assets/ShopPage/Detergents/Single soap bar isolated on white background.png",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 7,

  },
  {
    id: 32,
    name: <p className="  ">Face cream</p>,
    image: "/assets/ShopPage/Detergents/skin-care-products-827153_640.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 7,

  },
  {
    id: 33,
    name: <p className=" ">Shampoo</p>,
    image: "/assets/ShopPage/Detergents/shampoo-827141_640.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 7,

  },
  {
    id: 34,
    name: <p className=" ">Face wash</p>,
    image: "/assets/ShopPage/Detergents/facewash.jpg",
    price: "LKR 100.00",
    image2: <SlHandbag />,
    category: 7,

  },

  // {
  //   id: 35,
  //   name: (
  //     <p className=" text-Lightgray hover:text-DarkGreen ">Toilet paper roll</p>
  //   ),
  //   image: "/assets/ShopPage/Detergents/paper-314344_640.jpg",
  //   price: "LKR 100.00",
  //   image2: <SlHandbag />,
  //   category: 7,
  // },
  
];

export default Products;
