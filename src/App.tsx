import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  MensWear,
  WomensWear
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
       {
        index: true,
        element: <MensWear />,
      },

    ],
  },
  {
    path: "/MensWear",
    element: <MensWear />,
    
  },
  {
    path: "/WomensWear",
    element: <WomensWear />,
    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
