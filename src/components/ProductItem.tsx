interface IProduct {
  image_page: string;
  title: string;
  category: string;
  price: string;
}
const ProductItem = ({ image_page, title, category, price }: IProduct) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-xl duration-300 border border-gray-200 m-3">
      <div className=" flex justify-center items-center p-4 h-[200px]">
        <img
          src={image_page}
          alt={category}
          className="object-contain h-full"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-3">{category}</p>
        <p className="text-md font-bold text-green-600">قیمت: {price} تومان</p>
        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl text-sm font-medium transition duration-300 cursor-pointer">
          مشاهده محصول
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
