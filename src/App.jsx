import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SeatInfoPage from "./pages/SeatInfoPage";
import ElectionResultPage from "./pages/ElectionResultPage";
import DistrictNavigationPage from "./pages/DistrictNavigationPage";

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
      path: "/election-result",
      element: (
        <ElectionResultPage/>
      ),
    },
    {
      path: "/seat/:seatNo",
      element: <SeatInfoPage />,
    },
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App
