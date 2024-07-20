import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import Home from "./home";
import {
  getALlArticles,
  getAllArticlesByPeriod,
} from "../../services/nyServices";
import { useArticleStore } from "../../store/articleStore";

// Mock the API services
jest.mock("../../services/nyServices");
jest.mock("../../store/articleStore");

const mockArticles = {
  results: [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
  ],
};

describe("Home component", () => {
  let setArticlesMock: jest.Mock;

  beforeEach(() => {
    (getALlArticles as jest.Mock).mockResolvedValue(mockArticles);
    (getAllArticlesByPeriod as jest.Mock).mockResolvedValue(mockArticles);

    setArticlesMock = jest.fn();
    (useArticleStore as any).mockReturnValue({
      setArticles: setArticlesMock,
    });
  });

  test("renders loading spinner initially", () => {
    render(<Home />);
    expect(screen.getByRole("status")).toBeTruthy();
  });

  test("renders articles after data is loaded", async () => {
    render(<Home />);

    await waitFor(() => expect(screen.getByText("Article 1")).toBeTruthy());

    mockArticles.results.forEach((article) => {
      expect(screen.getByText(article.title)).toBeTruthy();
    });
  });

  test("renders buttons and fetches data for different periods", async () => {
    render(<Home />);

    await waitFor(() => expect(screen.getByText("Article 1")).toBeTruthy());

    const button1 = screen.getByText("1");
    const button7 = screen.getByText("7");
    const button30 = screen.getByText("30");

    fireEvent.click(button1);
    expect(setArticlesMock).toHaveBeenCalledWith({ ArticleList: [] });
    await waitFor(() => expect(screen.getByText("Article 1")).toBeTruthy());

    fireEvent.click(button7);
    expect(setArticlesMock).toHaveBeenCalledWith({ ArticleList: [] });
    await waitFor(() => expect(screen.getByText("Article 1")).toBeTruthy());

    fireEvent.click(button30);
    expect(setArticlesMock).toHaveBeenCalledWith({ ArticleList: [] });
    await waitFor(() => expect(screen.getByText("Article 1")).toBeTruthy());
  });
});
