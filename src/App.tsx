import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/site/Preloader";
import { SiteLayout } from "./components/site/SiteLayout";
import { getBasename } from "./utils/Functions";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import HimalayanPinkSalt from "./pages/HimalayanPinkSalt.tsx";
import KitchenAndSeasoning from "./pages/KitchenAndSeasoning.tsx";
import SaltTilesPanels from "./pages/SaltTilesPanels.tsx";
import HomeDecorSaltLamp from "./pages/HomeDecorSaltLamp.tsx";
import IndustrialBulkSalt from "./pages/IndustrialBulkSalt.tsx";
import WhyHimalaya from "./pages/WhyHimalaya.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import RequestQuote from "./pages/RequestQuote.tsx";
import DownloadCatalog from "./pages/DownloadCatalog.tsx";
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
        <Route path="/products/himalayan-pink-salt" element={<HimalayanPinkSalt />} />
        <Route path="/products/kitchen-and-seasoning" element={<KitchenAndSeasoning />} />
        <Route path="/products/salt-tiles-panels" element={<SaltTilesPanels />} />
        <Route path="/products/home-decor-salt-lamp" element={<HomeDecorSaltLamp />} />
        <Route path="/products/industrial-bulk-salt" element={<IndustrialBulkSalt />} />
        {productPages.map((page) => (
          <Route key={page.path} path={page.path} element={<Products title={page.title} />} />
        ))}
        <Route path="/why-himalaya" element={<WhyHimalaya />} />
        <Route path="/private-labeling" element={<PrivateLabeling />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-a-quote" element={<RequestQuote />} />
        <Route path="/download-catalog" element={<DownloadCatalog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
