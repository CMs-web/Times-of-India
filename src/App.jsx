import { useContext, useEffect } from "react";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import news from "./components/News";
import States from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Science from "./Pages/Science";
import Home from "./Pages/Home";
import Entertainment from "./Pages/Entertainment";
import Technology from "./Pages/Technology";
import Health from "./Pages/Health";
import Sports from "./Pages/Sports";

const App = () => {
  const { dispatch } = useContext(States);

  const fetchData = async (topic) => {
    try {
      const data = await news(topic);
      if (!data.status == "ok") return;
      dispatch({
        type: "GET_RES",
        payload: data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Heading />
        <h1 className="text-center font-serif text-5xl my-4">TIMES OF INDIA</h1>
        <Navbar fetchData={fetchData} />
        <Routes>
          <Route path="/" element={<Home fetchData={fetchData}/>} />
          <Route path="/science" element={<Science fetchData={fetchData}/>} />
          <Route path="/entertainment" element={<Entertainment fetchData={fetchData}/>} />
          <Route path="/technology" element={<Technology fetchData={fetchData}/>} />
          <Route path="/health" element={<Health fetchData={fetchData}/>} />
          <Route path="/sports" element={<Sports fetchData={fetchData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
