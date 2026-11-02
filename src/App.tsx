import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/site/Preloader";
import { SiteLayout } from "./components/site/SiteLayout";
import { getBasename } from "./utils/Functions";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import WhyHimalaya from "./pages/WhyHimalaya.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import PrivateLabeling from "./pages/PrivateLabeling.tsx";
import Blog from "./pages/Blog.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";
import NotFound from "./pages/NotFound.tsx";

const productPages = [
  { path: "/products/edible-salt", title: "Edible Salt" },
  { path: "/products/salt-lamps", title: "Salt Lamps" },
  { path: "/products/salt-bricks", title: "Salt Bricks" },
  { path: "/products/industrial-salt", title: "Industrial Salt" },
];

const App = () => (
  <BrowserRouter basename={getBasename() || undefined}>
    <Preloader />
    <ScrollToTop />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {productPages.map((page) => (
          <Route key={page.path} path={page.path} element={<Products title={page.title} />} />
        ))}
        <Route path="/why-himalaya" element={<WhyHimalaya />} />
        <Route path="/private-labeling" element={<PrivateLabeling />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
