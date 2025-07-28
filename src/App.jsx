import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import StartMenu from "./pages/StartMenu";
import Options from "./ui/Options";
import ScorePage from "./pages/ScorePage";
import HTML_ICON from "./assets/images/icon-html.svg";
import CSS_ICON from "./assets/images/icon-css.svg";
import JAVASCRIPT_ICON from "./assets/images/icon-js.svg";
import ACCESSIBLITY_ICON from "./assets/images/icon-accessibility.svg";

const subjects = ["HTML", "CSS", "JavaScript", "Accessibility"];
const subjectIcons = [HTML_ICON, CSS_ICON, JAVASCRIPT_ICON, ACCESSIBLITY_ICON];

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <StartMenu subjects={subjects} subjectIcons={subjectIcons} />
          ),
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
