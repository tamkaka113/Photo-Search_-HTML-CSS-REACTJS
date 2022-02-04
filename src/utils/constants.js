import React from 'react'
import BannerOne from "../assets/banner-nd.jpg";
import BannerSecond from "../assets/banner-st.jpg";
import BannerThree from "../assets/banner-rd.jpg";
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const homeBannersData = [
  {
    className: "banner-st",
    title: "Enjoy your meal",
    description: "Good food is wise",
    strong: " medicine",
    background: BannerOne,
  },
  {
    className: "banner-nd",
    title: "Happy your special",
    description: "Love at first",
    strong: " bite",
    background: BannerSecond,
  },
  {
    className: "banner-rd",
    title: "Good food is good mood",
    description: "The belly rules the",
    strong: " mind",
    background: BannerThree,
  },
];

export const reviews = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
