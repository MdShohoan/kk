import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SeatInfoPage from "./pages/SeatInfoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
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
