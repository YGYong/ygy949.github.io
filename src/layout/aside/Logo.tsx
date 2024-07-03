import { useSelector } from "react-redux";
import logo from "@/assets/images/logo.png";
export default function Logo() {
  const headerStore = useSelector((state: any) => {
    return state.headerReducer;
  });
  return (
    <div className="logo_menu">
      <img src={logo} alt="" />
      {headerStore.isCollapsed || <span>Ygyong</span>}
    </div>
  );
}
