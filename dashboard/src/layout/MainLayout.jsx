import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   return (
//     <div>
//       <h1>MainLayout</h1>
//       <ErrorBoundary>
//         <Outlet />
//       </ErrorBoundary>
//     </div>
//   );
// };

// const ErrorBoundary = ({ children }) => {
//   try {
//     return children;
//   } catch (error) {
//     console.error("Error rendering Outlet:", error);
//     return <div>Something went wrong.</div>;
//   }
// };

// export default MainLayout;
