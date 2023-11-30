import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SeatInfoPage from "./pages/SeatInfoPage";
import ElectionResultPage from "./pages/ElectionResultPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
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
