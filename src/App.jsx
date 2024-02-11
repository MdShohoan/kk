import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SeatInfoPage from "./pages/SeatInfoPage";
import ElectionResultPage from "./pages/ElectionResultPage";
import DistrictNavigationPage from "./pages/DistrictNavigationPage";
import DistrictInfoPage from "./pages/DistrictInfoPage";
import SeatNavigationPage from "./pages/SeatNavigationPage";
import News from "./pages/News";
import VideoPage from "./pages/VideoPage";
import Religion from "./pages/Religion";
import UpazilaElectionHome from "./pages/UpazilaElectionHome";
import UpazilaNews from "./pages/UpazilaNews";
import UpazilaVideos from "./pages/UpazilaVideos";
import UpazilaInfo from "./pages/UpazilaInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/news",
      element: (
        <News />
      ),
    },
    {
      path: "/videos",
      element: (
        <VideoPage />
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
    {
      path: "/religion",
      element: <Religion/>,
    },
    {
      path: "/upazila-election",
      element: <UpazilaElectionHome/>,
    },
    {
      path: "/upazila-election/news",
      element: <UpazilaNews/>,
    },
    {
      path: "/upazila-election/videos",
      element: <UpazilaVideos/>,
    },
    {
      path: "/upazila-election/upazila/:id",
      element: <UpazilaInfo/>,
    },
    {
      path: "/*",
      element: <Navigate to={'/'}/>,
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App
