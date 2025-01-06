import { useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowDownFromLine } from "react-icons/lu";
import Pagination from "../Pagination";
const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-majorelleBlue rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-majorelleBlue border border-slate-700 rounded-md text-lightGray"
          >
            <option value="5">5</option>
            <option value="5">10</option>
            <option value="5">20</option>
          </select>

          <input
            className="px-4 py-2 border border-slate-700 text-lightGray rounded-md focus:border-indigo-500 outline-none bg-violetBlue"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="relative overflow-x-auto mt-5">
          <div className="w-full text-sm text-left text-lightGray ">
            <div className="text-sm text-lightGray uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold ">Order Id</div>
                <div className="py-3 w-[13%] font-bold ">Price</div>
                <div className="py-3 w-[18%] font-bold ">Payment Status</div>
                <div className="py-3 w-[18%] font-bold ">Order status</div>
                <div className="py-3 w-[18%] font-bold ">Active</div>
                <div className="py-3 w-[8%] font-bold ">
                  <LuArrowDownFromLine />
                </div>
              </div>
            </div>

            {[1, 2, 3, 4, 5].map((item, id) => (
              <div key={id} className=" text-lightGray ">
                <div className="flex justify-between items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-bold whitespace-nowrap">
                    #0200f8
                  </div>
                  <div className="py-3 w-[13%] font-bold whitespace-nowrap">
                    $45
                  </div>
                  <div className="py-3 w-[18%] font-bold whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-bold whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-bold whitespace-nowrap">
                    <Link>View</Link>
                  </div>
                  <div
                    onClick={() => setShow(!show)}
                    className="py-3 w-[8%] font-bold whitespace-nowrap"
                  >
                    <LuArrowDownFromLine />
                  </div>
                </div>
              </div>
            ))}

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#8288ed]" : "hidden"
              }
            >
              {[1, 2].map((item, id) => (
                <div key={id} className=" text-lightGray ">
                  <div className="flex justify-between items-start border-b border-slate-700">
                    <div className="py-3 w-[25%] font-bold whitespace-nowrap pl-3">
                      #0200f8
                    </div>
                    <div className="py-3 w-[13%] font-bold whitespace-nowrap">
                      $45
                    </div>
                    <div className="py-3 w-[18%] font-bold whitespace-nowrap">
                      Pending
                    </div>
                    <div className="py-3 w-[18%] font-bold whitespace-nowrap">
                      Pending
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bottom-4 right-4 flex justify-end items-center mt-5">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
