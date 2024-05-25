const key = "d409303382da480bb6b3aee1b1270a97";

const news = async (topic = "indore") => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2024-04-08&sortBy=publishedAt&apiKey=${key}`
    );
    if (!res.ok) {
      throw new Error(`Error fetching news sources: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching news sources:", error);
    return [];
  }
};

export default news;
