import { Outlet, useLocation } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import LeftPane from "./LeftPane";
import StartMenu from "../pages/StartMenu";
import { useSelector } from "react-redux";

function AppLayout() {
  const { pathname } = useLocation();
  const toggle = useSelector((state) => state.toggle.toggle);
  const { questions: questionObject, status } = useSelector(
    (state) => state.question || {},
  );
  const { questionIndex } = useSelector((state) => state.question);

  return (
    <div
      className={`min-h-screen transition-all sm:pl-[4rem] md:pl-0 ${toggle ? "background-dark dark:bg-[#313E51]" : "background bg-[#F4F6FA]"}`}
    >
      <div className="xl:mx-auto xl:max-w-[90rem]">
        <nav>
          <ToggleButton />
        </nav>

        <main className="h-screen lg:flex lg:items-center lg:justify-around">
          {pathname === "/questions" ? (
            <LeftPane>
              {status === "loading"
                ? "Loading..."
                : questionObject?.questions?.[questionIndex]?.question
                  ? questionObject.questions[questionIndex].question
                  : "No question found"}

              {/* Which of these color contrast ratios defines the minimum WCAG 2.1
              Level AA requirement for normal text? */}
            </LeftPane>
          ) : (
            <LeftPane />
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
