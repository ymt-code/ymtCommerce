import { useEffect, useState } from "react";

const useProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/products`);
        if (!res.ok) throw new Error("خطا در دریافت محصولات");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

export default useProduct;
