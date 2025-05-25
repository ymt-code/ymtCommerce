import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Carousel from "../../components/MyCarousel";
import ProductItem from "../../components/ProductItem";
import Affiliate from "../../components/Affiliate";
import ArticleCard from "../../components/ArticleCard";
import { articles } from "../../utils/content";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/products");
        if (!res.ok) throw Error("Something went wrong with fetching products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("خطا در دریافت محصولات:", err);
        setError(err?.message || "خطای ناشناخته‌ای رخ داد");
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        <Carousel />
        <h2 className="yekan text-5xl my-12 text-right max-md:text-center">
          محصولات
        </h2>

        {products ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center font-bold text-2xl py-18">
            در حال بارگذاری محصولات...
          </p>
        )}

        {error && (
          <p className="mt-8 text-center text-red-500 font-semibold">
            خطا: {error}
          </p>
        )}
      </Container>
      <Affiliate />
      <Container>
        <h2 className="yekan text-5xl my-12 text-right max-md:text-center">
          مقالات
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <ArticleCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
