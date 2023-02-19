import { fetch } from "@remix-run/node";

export type NewsAPI_Story = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsAPI_StorySearchResponse_Success = {
  status: string;
  totalResults: number;
  articles: NewsAPI_Story[];
};

export const getStoriesForArtist = async (
  artistName: string
): Promise<NewsAPI_Story[]> => {
  const { NEWS_API_KEY } = process.env;
  const response = await fetch(
    `https://newsapi.org/v2/everything?q="${artistName}"&apiKey=${NEWS_API_KEY}&pageSize=${10}`
  );

  const data = await response.json();

  if (data.status === "error") {
    console.error(data.message);
    throw new Error(data.message);
  }

  const mockStories = [
    {
      source: { id: "my", name: "source" },
      author: "Connor Stevens",
      title: "Connors Cool Article",
      description: "Something cool about music",
      url: "https://google.com",
      urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF-4ONJONcc7hjIrSu4WtIx6zPr58czFEsPBAYrmEboATZZ7NYb6x7ZuZVGA1LhGKW5A&usqp=CAU",
      publishedAt: "2020-20-10:12:23:33",
      content: "SOmething idk a fuckin thing about",
    },
  ];

  // return mockStories;
  return data.articles;
};
