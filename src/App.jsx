import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SeatInfoPage from "./pages/SeatInfoPage";
import ElectionResultPage from "./pages/ElectionResultPage";
import DistrictNavigationPage from "./pages/DistrictNavigationPage";
import DistrictInfoPage from "./pages/DistrictInfoPage";
import SeatNavigationPage from "./pages/SeatNavigationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/districts",
      element: (
        <DistrictNavigationPage/>
      ),
    },
    {
      path: "/districts/:districtNo",
      element: (
        <DistrictInfoPage/>
      ),
    },
    {
      path: "/election-result",
      element: (
        <ElectionResultPage/>
      ),
    },
    {
      path: "/seats",
      element: <SeatNavigationPage/>,
    },
    {
      path: "/seats/:seatNo",
      element: <SeatInfoPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App
