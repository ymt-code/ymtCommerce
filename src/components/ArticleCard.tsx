const ArticleCard = ({ image, title, summary, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-xl duration-300 border border-gray-200 m-3">
      <div className="flex justify-center items-center p-4 h-[200px] bg-gray-50">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{summary}</p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl text-sm font-medium transition duration-300 cursor-pointer">
          مطالعه مقاله
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
