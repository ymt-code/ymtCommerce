import { useEffect, useState } from "react";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";
import { Loader } from "lucide-react";

const Store = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
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

  const filteredProducts = products?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <div className="text-center my-12">
        <h2 className="yekan text-5xl text-right max-md:text-center mb-4">
          محصولات
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          با افتخار مجموعه‌ای از محصولات با کیفیت، قیمت مناسب و از برندهای معتبر
          برای شما فراهم کردیم. با جستجو یا مرور دسته‌بندی‌ها، بهترین انتخاب رو
          داشته باش.
        </p>
        <input
          type="text"
          placeholder="جستجوی محصول..."
          className="mt-6 w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {products === null && (
        <div className="flex justify-center items-center py-12">
          <Loader className="animate-spin" size={48} />
        </div>
      )}

      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        products && (
          <p className="text-center font-bold text-2xl py-16 text-gray-400">
            محصولی با این عنوان یافت نشد.
          </p>
        )
      )}

      {error && (
        <p className="mt-8 text-center text-red-500 font-semibold">
          خطا: {error}
        </p>
      )}
    </Container>
  );
};

export default Store;
