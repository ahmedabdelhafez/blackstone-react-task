import axios from "axios";
import { ArticleResponseModel } from "../core/model/ArticleMoedl.interface";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getALlArticles = async () => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=6EqU7Z2poFGKg85qai32eHZKORmwJ9G7`
  );
  return response.data as ArticleResponseModel;
};

export const getAllArticlesByPeriod = async (periodId: number) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/${periodId}.json?api-key=6EqU7Z2poFGKg85qai32eHZKORmwJ9G7`
  );
  return response.data as ArticleResponseModel;
};
