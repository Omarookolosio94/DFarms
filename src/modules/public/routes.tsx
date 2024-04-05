import React from "react";

const Home = React.lazy(() => import("./views/Home"));
const About = React.lazy(() => import("./views/About"));
const Contact = React.lazy(() => import("./views/Contact"));
const Notfound = React.lazy(() => import("./views/Notfound"));
const Products = React.lazy(() => import("./views/Products"));
const Services = React.lazy(() => import("./views/Services"));
const SingleProduct = React.lazy(() => import("./views/SingleProduct"));

const routes = [
  {
    name: "Home",
    layout: "/",
    path: "home",
    icon: "",
    component: <Home />,
  },
  {
    name: "Single Products",
    layout: "/",
    path: "products/:productId",
    icon: "",
    component: <SingleProduct />,
  },
  {
    name: "Products",
    layout: "/",
    path: "products",
    icon: "",
    component: <Products />,
  },
  {
    name: "About",
    layout: "/",
    path: "about",
    icon: "",
    component: <About />,
  },
  {
    name: "Services",
    layout: "/",
    path: "services",
    icon: "",
    component: <Services />,
  },
  {
    name: "Contact",
    layout: "/",
    path: "contact",
    icon: "",
    component: <Contact />,
  },
  {
    name: "Notfound",
    layout: "/",
    path: "notfound",
    icon: "",
    component: <Notfound />,
  },
];

export default routes;
