import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
import Nav from "./global/navigationBar/components/Nav";
import CategoryContainer from "./CategoryLayout/CategoryContainer/CategoryContainer";
import Footer from "./global/footer/Footer";
import ScrollToTopButton from "./global/ScrollToTop/ScrollToTop";
import ContactBar from "./global/FixedContactBar/ContactBar";

function App() {
  useEffect(() => {
    Aos.init({ disable: window.innerWidth < 1366 });
  }, []);
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route
          path="/froggy-gaming-web"
          element={<HomepageContainer />}
        ></Route>
        <Route path="/danh-muc" element={<CategoryContainer />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <ContactBar></ContactBar>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
