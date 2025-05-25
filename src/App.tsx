import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Layout from "./components/Layout";
import Product from "./components/Product";
import About from "./pages/about/About";
import Articles from "./pages/articles/Articles";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
};

export default App;
