import { useContext } from "react";
import States from "./Context";

const Hero = () => {
  const { response } = useContext(States);

  if (!response) {
    return (
      <div className="spinner">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
    );
  }

  const filereResponse = response.filter((item) => item.urlToImage);

  return (
    <>
      <main className="grid grid-cols-2 px-20 gap-x-20 my-10 gap-3">
        <div
          className={` box_shadow row-span-6 object-cover relative border-2`}
          style={{ backgroundImage: `url(${filereResponse[0]?.urlToImage})` }}
        >
          <h3 className="absolute bottom-4 text-wrapper">
            <a href={filereResponse[0]?.url} target="_blank">
              {filereResponse[0]?.description}
            </a>
          </h3>
        </div>
        <h2 className="border p-2">
          <a
            href={filereResponse[1]?.url}
            target="_blank"
            className="one-line-wrapper"
          >
            {filereResponse[1]?.description}
          </a>
        </h2>
        <h2 className="border p-2">
          <a
            href={filereResponse[2]?.url}
            target="_blank"
            className="one-line-wrapper"
          >
            {filereResponse[2]?.description}
          </a>
        </h2>
        <h2 className="border p-2">
          <a
            href={filereResponse[3]?.url}
            target="_blank"
            className="one-line-wrapper"
          >
            {filereResponse[3]?.description}
          </a>
        </h2>
        <h2 className="border p-2">
          <a
            href={filereResponse[4]?.url}
            target="_blank"
            className="one-line-wrapper"
          >
            {filereResponse[4]?.description}
          </a>
        </h2>
        <h2 className="border p-2">
          <a
            href={filereResponse[5]?.url}
            target="_blank"
            className="one-line-wrapper"
          >
            {filereResponse[5]?.description}
          </a>
        </h2>
      </main>

      {filereResponse.slice(5).map((item, index) => (
        <article
          className="flex justify-between items-center mx-20 mb-8 pl-2 py-1 border"
          key={index}
        >
          <div className="w-2/3">
            <h1 className=" text-wrapper text-lg font-semibold">
              <a href={item.url} target="_blank">
                {item.description}
              </a>
            </h1>

            <p className="pt-3 ">
              Source: {item.author} {item.source.name}
            </p>
            <p>Date: {item.publishedAt}</p>
          </div>

          <div className="bg-green-200">
            <img
              className=" hero_images"
              src={item.urlToImage}
              alt={"imgNotFound"}
            />
          </div>
        </article>
      ))}
    </>
  );
};

export default Hero;
