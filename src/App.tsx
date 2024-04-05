import CustomLoader from "core/components/Loader";
import { scrollWindowToTop } from "core/helpers/generalHelpers";
import { ScrollToTop } from "core/helpers/scrollToTop";
import Public from "modules/public/Public";
import { Suspense } from "react";
import { ChevronUp } from "react-feather";
import { ReactNotifications } from "react-notifications-component";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />

        <ReactNotifications />

        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route path="/*" element={<Public />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>

        <button
          onClick={() => scrollWindowToTop()}
          className="hover:bg-opacity-1 fixed bottom-[10%] right-[10%] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-brand bg-opacity-[.7] text-[22px]"
        >
          <ChevronUp />
        </button>
        
      </Router>
    </>
  );
};

export default App;
