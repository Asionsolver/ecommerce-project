import { IoIosPeople } from "react-icons/io";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Charts from "react-apexcharts";
import { Link } from "react-router-dom";
import adminLogo from "../../assets/images/admin.jpg";
const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [31, 40, 28, 51, 42, 109, 100, 109, 100, 109, 100, 109],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41, 32, 34, 52, 41, 32],
      },
      {
        name: "Sellers",
        data: [21, 42, 55, 42, 44, 62, 51, 42, 44, 62, 51, 42],
      },
    ],
    options: {
      color: ["#181ee8", "#038000"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
              chart: {
                height: "550px",
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$4343</h2>
            <span className="text-md  font-medium">Total Size</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-white shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md  font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <MdProductionQuantityLimits className="text-white shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">60</h2>
            <span className="text-md  font-medium">Sellers</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <IoIosPeople className="text-white shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$434</h2>
            <span className="text-md  font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
            <FaShoppingCart className="text-white shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7 ">
        <div className="w-full lg:w-7/12 lg:pr-3 ">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Charts
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pr-4 mt-6 lg:mt-0 ">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-lightGray">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-lightGray pb-3">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm text-lightGray">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-lightGray">
              <ol className="relative border-1 border-slate-600 ml-4">
                {[1, 2, 3].map((item, id) => (
                  <li key={id} className="mb-3 ml-6">
                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                      <img
                        className="w-full rounded-full h-full shadow-lg"
                        src={adminLogo}
                        alt="admin-logo"
                      />
                    </div>
                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <Link className="text-md font-normal sm:order-last sm:mb-0">
                          Admin
                        </Link>
                        <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                          2 day ago
                        </time>
                      </div>
                      <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                        How are you?
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#6a5fdf] w-full p-4 rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-lightGray">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-lightGray">View All</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-lightGray ">
            <thead className="text-sm text-lightGray uppercase border-b border-slate-700">
              <tr>
                <th className="py-3 px-4 " scope="col">
                  Order Id
                </th>
                <th className="py-3 px-4 " scope="col">
                  Price
                </th>
                <th className="py-3 px-4 " scope="col">
                  Payment Status
                </th>
                <th className="py-3 px-4 " scope="col">
                  Order status
                </th>
                <th className="py-3 px-4 " scope="col">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, id) => (
                <tr key={id}>
                  <td
                    className="py-3 px-4 font-medium whitespace-nowrap"
                    scope="row"
                  >
                    #34346
                  </td>
                  <td
                    className="py-3 px-4 font-medium whitespace-nowrap"
                    scope="row"
                  >
                    $42
                  </td>
                  <td
                    className="py-3 px-4 font-medium whitespace-nowrap"
                    scope="row"
                  >
                    Pending
                  </td>
                  <td
                    className="py-3 px-4 font-medium whitespace-nowrap"
                    scope="row"
                  >
                    Pending
                  </td>
                  <td
                    className="py-3 px-4 font-medium whitespace-nowrap"
                    scope="row"
                  >
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
