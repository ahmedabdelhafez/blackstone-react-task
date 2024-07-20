import React, { useEffect } from "react";
import { useArticleStore } from "../../../store/articleStore";
import Articlecard from "../../../components/Articlecard/Articlecard";

const NyDetails = () => {
  const articleStorer = useArticleStore();

  useEffect(() => {
    if (articleStorer.selectedArticle) {
      console.log(articleStorer.selectedArticle);
    }
  }, []);

  return (
    <section className="grid grid-cols-1">
      <div className="col-span-full">
        <h3 className="m-0 font-semibold text-purple-800 text-lg">
          Ny Details
        </h3>
      </div>
      <div className="col-span-full">
        {articleStorer.selectedArticle && (
          <Articlecard
            article={articleStorer.selectedArticle}
            showReadMoreBtn={true}
            showDetailsBtn={false}
          />
        )}
      </div>
    </section>
  );
};

export default NyDetails;
