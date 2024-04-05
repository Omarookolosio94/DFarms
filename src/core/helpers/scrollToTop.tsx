import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollWindowToTop } from "./generalHelpers";

export const ScrollToTop = () => {
  const location = useLocation();

  const { pathname, search } = location;

  useEffect(() => {
    scrollWindowToTop();
  }, [pathname, search]);

  return null;
};
