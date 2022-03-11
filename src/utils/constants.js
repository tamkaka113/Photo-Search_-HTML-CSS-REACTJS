
import BannerOne from "../assets/banner-nd.jpg";
import BannerSecond from "../assets/banner-st.jpg";
import BannerThree from "../assets/banner-rd.jpg";

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
    title: "Choose your best furnitures",
    description: "Ready-made designs that leave our warehouse within 2 business days.",
    strong: " Furnitures",
    background: BannerOne,
  },
  {
    className: "banner-nd",
    title: "New Arrivals",
    description: "View our latest products. Shop our new designs today.",
    strong: " Create a home you love",
    background: BannerSecond,
  },
  {
    className: "banner-rd",
    title: "Quick Shop",
    description: "Find everything you need to outfit your home",
    strong: "Homewares",
    background: BannerThree,
  },
];

export const reviews = [
  {
    id: 1,
    img: 'https://static.onecms.io/wp-content/uploads/sites/6/2017/03/gettyimages-499362720-2000.jpg',
    name: 'Adam Sandler ',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    img: 'https://static.wikia.nocookie.net/disney/images/d/d8/Jennifer_Lawrence.jpg',
    name: 'Jenifer Lawrence',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    img: 'https://assets.popbuzz.com/2021/19/who-is-matt-cornett-1620904012-view-0.jpg',
    name: 'Matt Corner',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 4,
    img: 'https://static.onecms.io/wp-content/uploads/sites/6/2017/03/gettyimages-499362720-2000.jpg',
    name: 'Adam Sandler ',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
