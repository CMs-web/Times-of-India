import { useEffect } from "react";
import Hero from "../components/Hero";

const Entertainment = ({ fetchData }) => {
  useEffect(() => {
    fetchData("entertainment");
  }, []);

  return <Hero />;
};

export default Entertainment;
