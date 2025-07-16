import { Outlet } from "react-router-dom";
import ToggleButton from "./ToggleButton";

function AppLayout() {
  return (
    <div className="background bg-[#F4F6FA] sm:pl-[4rem] md:pl-0">
      <nav>
        <ToggleButton />
      </nav>
      <Outlet />
    </div>
  );
}

export default AppLayout;
