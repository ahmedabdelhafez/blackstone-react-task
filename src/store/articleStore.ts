import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ArticleModel } from "../core/model/ArticleMoedl.interface";

interface IArticleState {
  ArticleList: ArticleModel[];
  selectedArticle?: ArticleModel | undefined;
}

interface IArticleActions {
  getArticle: (id: number) => ArticleModel | undefined;
  setArticles: (state: IArticleState) => void;
  setArticleItem: (article: ArticleModel) => void;
  getArticleItem: () => ArticleModel | undefined;
}

export const useArticleStore = create(
  persist<IArticleState & IArticleActions>(
    (set, get) => ({
      ArticleList: [],
      selectedArticle: undefined,
      getArticle: (id: number) => {
        return get().ArticleList.find((ele) => ele.id === id);
      },

      setArticles: (state) => {
        set({ ...state });
      },

      setArticleItem: (article) => {
        set({ selectedArticle: article });
      },

      getArticleItem: () => {
        return get().selectedArticle;
      },
    }),
    {
      name: "ny-article-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
