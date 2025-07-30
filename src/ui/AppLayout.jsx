import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton";
import LeftPane from "./LeftPane";
import Loader from "./Loader";

function AppLayout() {
  const { pathname } = useLocation();
  const toggle = useSelector((state) => state.toggle.toggle);
  const {
    questions: questionObject,
    loading,
    questionIndex,
  } = useSelector((state) => state.question || {});

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

        <main className="min-h-screen w-full lg:flex lg:items-center lg:justify-center lg:gap-20">
          {pathname !== "/score" && (
            <div>
              {pathname === "/options" ? (
                <LeftPane>
                  {loading ? (
                    <Loader />
                  ) : questionObject?.questions?.[questionIndex]?.question ? (
                    questionObject.questions[questionIndex].question
                  ) : (
                    "No question found"
                  )}
                </LeftPane>
              ) : (
                <LeftPane />
              )}
            </div>
          )}

          <div className="flex w-full justify-center lg:justify-normal lg:pr-10">
            <div className="mx-auto w-full max-w-[40rem]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
