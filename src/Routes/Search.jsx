
export default function Search() {
   const hanedlCancel = (e) => {
     e.preventDefault();
   };
  return (
    <div>
      <div className="min-h-screen bg_gre w-full flex justify-center items-center p-4 ">
        <div className="container mx-auto search_bg_ri rounded-lg p-8 w-full lg:w-3/5">
          <form>
            <h1 className="text-center font-bold text-white text-3xl md:text-4xl">
              Find the perfect Results
            </h1>
            <p className="mx-auto font-normal text-slate-200 text-sm my-6 max-w-lg"></p>
            <div className="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                className="text-base text-gray-400 flex-grow outline-none px-2 "
                type="text"
                placeholder="Search..."
              />
              <div className="flex  items-center justify-center  px-2 rounded-lg space-x-4 mx-auto ">
                <select
                  id="Com"
                  className="text-base text-gray-800 outline-none border-2 px-4 py-2  rounded-lg "
                >
                  <option value="Bert">Bert</option>
                  <option value="word2vec"> word2vec </option>
                </select>
                <button
                  onClick={hanedlCancel}
                  className="bg-indigo-500 hidden sm:flex text-white text-base rounded-lg px-4 py-2 font-thin"
                >
                  Search
                </button>
              </div>
            </div>

            <button
              onClick={hanedlCancel}
              className="bg-white  block w-full mt-3 font-bold sm:hidden text-gray-600 text-base rounded-lg px-4 py-2 "
            >
              Search
            </button>
            <div className="w-full rounded-xl bg-white mt-2 p-4 text-center text-gray-700">
              No results!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
