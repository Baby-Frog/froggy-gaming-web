import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
import Nav from "./global/navigationBar/components/Nav";
import CategoryContainer from "./CategoryLayout/CategoryContainer/CategoryContainer";
import Footer from "./global/footer/Footer";
import ContactBar from "./global/FixedContactBar/ContactBar";
import NotFound from "./404NotFound/NotFound";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./global/ScrollToTopButton/ScrollToTopButton";
import News from "./News/NewsContainer/NewsContainer";
// import CartContainer from "./Cart/CartContainer/components/CartContainer";
import ProductDetails from "./Products/productDetails/ProductDetails";
import { SearchProvider } from "./contexts/search-context";
import ProductList from "./Products/productList/ProductList";
import CartContainer from "./Cart/CartContainer/CartContainer";
import { CartProvider } from "./contexts/cart-context";
import LoginForm from "./Login/LoginForm";

function App() {
  useEffect(() => {
    Aos.init({ disable: window.innerWidth < 1366 });
  }, []);
  return (
    <>
      <CartProvider>
        <SearchProvider>
          <Nav></Nav>
          <ScrollToTop></ScrollToTop>
          {/* <CartContainer></CartContainer> */}
          <Routes>
            <Route path="/" element={<HomepageContainer />}></Route>
            <Route path="/danh-muc" element={<CategoryContainer />}></Route>
            <Route path="/tin-tuc" element={<News />}></Route>
            <Route path="/chi-tiet" element={<ProductList />}></Route>
            <Route path="/gio-hang" element={<CartContainer />}></Route>
            <Route path="/dang-nhap" element={<LoginForm />}></Route>
            <Route path="/san-pham/:proId" element={<ProductDetails />}></Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <ContactBar></ContactBar>
          <ScrollToTopButton></ScrollToTopButton>
          <Footer></Footer>
        </SearchProvider>
      </CartProvider>
    </>
  );
}

export default App;
