import Container from "../../components/Container";
import ArticleCard from "../../components/ArticleCard";
import { articles } from "../../utils/content";

const Articles = () => {
  return (
    <>
      <Container>
        <h2 className="yekan text-4xl md:text-5xl text-right max-md:text-center my-12">
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

export default Articles;
