import { Outlet } from "react-router-dom";
import SideBar from "../components/navigation/SideBar";

export function RootLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
