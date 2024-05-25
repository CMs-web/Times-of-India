const Heading = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString();
  return (
    <header className="border my-1 flex ">
      <div className="flex border-r-2 w-fit px-2">
        <p>Language</p>
        <select name="" id="">
          <option value="in">in</option>
          <option value="in">us</option>
        </select>
      </div>
      <div className="border-r-2 px-3">
        {formattedDate}
      </div>
    </header>
  );
};

export default Heading;
