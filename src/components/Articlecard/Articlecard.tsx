import { ArticleModel } from "../../core/model/ArticleMoedl.interface";
import { useNavigate } from "react-router-dom";
import { useArticleStore } from "../../store/articleStore";

type Props = {
  article: ArticleModel;
  showReadMoreBtn?: boolean;
  showDetailsBtn?: boolean;
};

const Articlecard = ({
  article,
  showReadMoreBtn = false,
  showDetailsBtn = false,
}: Props) => {
  const router = useNavigate();
  const articleStore = useArticleStore();
  const toNydetail = () => {
    articleStore.setArticleItem(article);
    router("/nydetails");
  };

  return (
    <div className="md:col-span-1 sm:col-span-full card w-full p-2 rounded-md shadow-md bg-purple-50 m-h-[250px]">
      <div className="card-header">
        <h1 className="m-0 text-base font-semibold text-purple-600">
          {article?.title}
        </h1>
        <div className="flex flex-row justify-between flex-wrap my-1">
          <div className="bg-yellow-500 text-purple-900 px-2 py-0.5 rounded shadow">
            {article.section}
          </div>
          <p className="my-1 text-xs font-medium text-purple-400">
            <span className="font-black"> Source: </span> {article.source}
          </p>
        </div>
      </div>
      <div className="card-body p-2">
        <p className="text-sm text-black font-normal">{article?.abstract}</p>
        <p className="my-1 text-xs font-light">
          <span className="font-black">Article By: </span>
          {article.byline}
        </p>
      </div>
      <div className="card-foot py-2 px-1">
        {showReadMoreBtn && (
          <button
            onClick={() => window.open(article.url, "_blank")}
            className="rounded-md shadow bg-purple-700 text-white font-medium min-w-24 px-3 py-1"
          >
            Read More
          </button>
        )}
      {showDetailsBtn &&   <button
          onClick={toNydetail}
          className="rounded-md shadow bg-purple-700 text-white font-medium min-w-24 px-3 py-1 mx-2"
        >
          Show Details
        </button>}
      </div>
    </div>
  );
};

export default Articlecard;
