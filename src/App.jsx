import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import StartMenu from "./pages/StartMenu";
import QuestionsPage from "./pages/QuestionsPage";

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
          path: "/questions",
          element: <QuestionsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
