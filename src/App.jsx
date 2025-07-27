import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import StartMenu from "./pages/StartMenu";
import Options from "./ui/Options";
import ScorePage from "./pages/ScorePage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <StartMenu />,
        },

        {
          path: "/options",
          element: <Options />,
        },
        {
          path: "/score",
          element: <ScorePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
