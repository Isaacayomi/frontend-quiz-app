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
      className={`min-h-screen w-full transition-all md:pl-0 ${
        toggle ? "background-dark dark:bg-[#313E51]" : "background bg-[#F4F6FA]"
      }`}
    >
      <div className="xl:mx-auto xl:max-w-[90rem]">
        <nav>
          <ToggleButton />
        </nav>

        <main className="min-h-screen w-full lg:flex lg:items-center lg:justify-around">
          {pathname === "/questions" ? (
            <LeftPane>
              {status === "loading"
                ? "Loading..."
                : questionObject?.questions?.[questionIndex]?.question
                  ? questionObject.questions[questionIndex].question
                  : "No question found"}
            </LeftPane>
          ) : (
            <LeftPane />
          )}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-full lg:max-w-[40rem]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
