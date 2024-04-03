import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Notfound from "./views/Notfound";
import Products from "./views/Products";
import Services from "./views/Services";
import SingleProduct from "./views/SingleProduct";

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
