import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="background bg-[#F4F6FA] sm:pl-[4rem] md:pl-0">
      <Outlet />
    </div>
  );
}

export default AppLayout;
