import React, { useEffect } from "react";
import { useState } from "react";
export default function Upload() {
  const [data,setData] = useState([])
  console.log(data)
  const handelSubmit = (e)=> {
    setData(Array.from(e.target.files));
  }
  const hanedlCancel = (e,name) => {
    e.preventDefault()
    setData(data.filter((file) => file.name !== name));
  };
  


  const handelClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg_gre min-h-screen w-full ">
      <div className="flex items-center justify-center  py-12 px-8">
        <div className="mx-auto w-full lg:w-1/2  bg-white rounded-md">
          <form className="py-6 px-9">
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File with{" "}
                <span className="text-blue-400 ">word2vec</span>
              </label>

              <div className="mb-8">
                <input
                  onChange={handelSubmit}
                  type="file"
                  multiple
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border-[3px]
                    border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              {data?.map((file, i) => {
                return (
                  <div key={i} className="rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center gap-3 justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                        {file.name.length > 25
                          ? file.name.substring(0, 25) + " ..."
                          : file.name}
                      </span>
                      <button
                        onClick={(e) => hanedlCancel(e, file.name)}
                        className="text-[#07074D]"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                      <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={handelClick}
                className="hover:shadow-form w-full rounded-md search_bg_ri py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
