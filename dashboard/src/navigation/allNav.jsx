import { MdOutlineDashboard, MdPayment } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaUserTimes } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdOutlineDashboard />,
    role: "admin",
  },
  {
    id: 2,
    title: "Orders",
    path: "/admin/dashboard/orders",
    icon: <FiShoppingCart />,
    role: "admin",
  },
  {
    id: 3,
    title: "Category",
    path: "/admin/dashboard/category",
    icon: <BiCategory />,
    role: "admin",
  },
  {
    id: 4,
    title: "Sellers",
    path: "/admin/dashboard/sellers",
    icon: <IoIosPeople />,
    role: "admin",
  },
  {
    id: 5,
    title: "Payment Request",
    path: "/admin/dashboard/payment-request",
    icon: <MdPayment />,
    role: "admin",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    path: "/admin/dashboard/deactive-sellers",
    icon: <FaUserTimes />,
    role: "admin",
  },
  {
    id: 7,
    title: "Sellers Request",
    path: "/admin/dashboard/seller-request",
    icon: <FaCodePullRequest />,
    role: "admin",
  },
  {
    id: 8,
    title: "Live Chat",
    path: "/admin/dashboard/live-chat",
    icon: <SiLivechat />,
    role: "admin",
  },
];
