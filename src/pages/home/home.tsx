import { useEffect, useState } from "react";
import Articlecard from "../../components/Articlecard/Articlecard";
import { ArticleResponseModel } from "../../core/model/ArticleMoedl.interface";
import {
  getALlArticles,
  getAllArticlesByPeriod,
} from "../../services/nyServices";
import { useArticleStore } from "../../store/articleStore";
import { Spinner } from "flowbite-react";

const Home = () => {
  const [aricleList, setArticleList] = useState<ArticleResponseModel | null>(
    null
  );

  const articleStore = useArticleStore();

  useEffect(() => {
    getAllAricleData();
  }, []);

  const getAllAricleData = async () => {
    const data = await getALlArticles();
    articleStore.setArticles({
      ArticleList: data.results,
    });
    setArticleList(data);
  };
  const getAllArticleByPeriodApi = async (periodId: 1 | 7 | 30 = 1) => {
    setArticleList(null);
    const data = await getAllArticlesByPeriod(periodId);
    articleStore.setArticles({ ArticleList: [] });
    articleStore.setArticles({
      ArticleList: data.results,
    });
    setArticleList(data);
  };

  return (
    <div className="grid grid-cols-1 ">
      <div className="col-span-full bg-purple-50 py-4">
        <h1 className="text-center font-body text-3xl text-purple-900">
          NY Times Most Popular Articles
        </h1>
      </div>
      {!aricleList && (
        <div className="relative h-screen w-screen flex flex-row justify-center items-center bg-slate-400">
          <Spinner></Spinner>
        </div>
      )}
      {aricleList && (
        <>
          <div className="col-span-full my-3">
            <button
              onClick={() => getAllArticleByPeriodApi(1)}
              className="px-2 py-1 bg-purple-200 text-purple-900 font-bold min-w-14 mx-1 rounded-md shadow-sm"
            >
              1
            </button>
            <button
              onClick={() => getAllArticleByPeriodApi(7)}
              className="px-2 py-1 bg-purple-200 text-purple-900 font-bold min-w-14 mx-1 rounded-md shadow-sm"
            >
              7
            </button>
            <button
              onClick={() => getAllArticleByPeriodApi(30)}
              className="px-2 py-1 bg-purple-200 text-purple-900 font-bold min-w-14 mx-1 rounded-md shadow-sm"
            >
              30
            </button>
          </div>
          <div className="col-span-full grid grid-cols-3 gap-4 my-4 p-2">
            {aricleList &&
              aricleList.results.map((article) => (
                <Articlecard
                  article={article}
                  showReadMoreBtn={false}
                  showDetailsBtn={true}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
