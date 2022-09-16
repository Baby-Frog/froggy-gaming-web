import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
import Nav from "./global/navigationBar/components/Nav";
import CategoryContainer from "./CategoryLayout/CategoryContainer/CategoryContainer";
import Footer from "./global/footer/Footer";
import ContactBar from "./global/FixedContactBar/ContactBar";
import NotFound from "./404NotFound/NotFound";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./global/ScrollToTopButton/ScrollToTopButton";
import News from "./News/NewsContainer/NewsContainer";
import ProductDetails from "./Products/productDetails/ProductDetails";
import { SearchProvider } from "./contexts/search-context";
import ProductList from "./Products/productList/ProductList";
import CartContainer from "./Cart/CartContainer/CartContainer";
import { CartProvider } from "./contexts/cart-context";
import LoginForm from "./Form/LoginForm";
import RegisterForm from "./Form/RegisterForm";
import UserForm from "./Form/UserForm";
import AdminContainer from "./Admin/AdminContainer/AdminContainer";
import AddProduct from "./Admin/AdminTable/AddProduct/AddProduct";
import AddCategory from "./Admin/AdminTable/AddCategory/AddCategory";
import AddBrand from "./Admin/AdminTable/AddBrand/AddBrand";
// import AdminContainer from "./Admin/AdminContainer/AdminContainer";

function App() {
  return (
    <>
      <CartProvider>
        <SearchProvider>
          <Nav></Nav>
          <ScrollToTop></ScrollToTop>
          {/* <AdminContainer></AdminContainer> */}
          <Routes>
            <Route path="/" element={<HomepageContainer />}></Route>
            <Route path="/danh-muc" element={<CategoryContainer />}></Route>
            <Route path="/tin-tuc" element={<News />}></Route>
            <Route path="/chi-tiet" element={<ProductList />}></Route>
            <Route path="/gio-hang" element={<CartContainer />}></Route>
            <Route path="/dang-nhap" element={<LoginForm />}></Route>
            <Route path="/dang-ky" element={<RegisterForm />}></Route>
            <Route
              path="/nguoi-dung"
              element={
                !localStorage.getItem("roles") ? <LoginForm /> : <UserForm />
              }
            ></Route>
            <Route path="/admin" element={<AdminContainer />}></Route>
            <Route path="/admin/them-san-pham" element={<AddProduct />}></Route>
            <Route path="/admin/them-danh-muc" element={<AddCategory />}></Route>
            <Route path="/admin/them-hang-san-xuat" element={<AddBrand />}></Route>
            {/* <Route
              path="/admin"
              element={
                localStorage.getItem("roles") === "ROLE_ADMIN" ? (
                  <AdminContainer />
                ) : (
                  <HomepageContainer />
                )
              }
            ></Route>
            <Route
              path="/admin/them-san-pham"
              element={
                localStorage.getItem("roles") === "ROLE_ADMIN" ? (
                  <AddProduct />
                ) : (
                  <LoginForm />
                )
              }
            ></Route>
            <Route
              path="/admin/them-san-pham"
              element={
                localStorage.getItem("roles") === "ROLE_ADMIN" ? (
                  <AddProduct />
                ) : (
                  <LoginForm />
                )
              }
            ></Route>
            <Route
              path="/admin/them-danh-muc"
              element={
                localStorage.getItem("roles") === "ROLE_ADMIN" ? (
                  <AddCategory />
                ) : (
                  <LoginForm />
                )
              }
            ></Route>
            <Route
              path="/admin/them-hang-san-xuat"
              element={
                localStorage.getItem("roles") === "ROLE_ADMIN" ? (
                  <AddBrand />
                ) : (
                  <LoginForm />
                )
              }
            ></Route> */}
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
