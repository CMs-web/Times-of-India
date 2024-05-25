import { useEffect } from "react";
import Hero from "../components/Hero";

const Home = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Hero />;
};

export default Home;
