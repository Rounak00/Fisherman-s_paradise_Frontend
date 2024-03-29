import { BarChart, Fish, FishOff } from "lucide-react";

import LOGO from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

const ASidebar = () => {
  const { user } = useContext(AuthContext);
  const Logout = () => {
    localStorage.removeItem("user");
    location.reload();
  };
  return (
    <div className="fixed">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
        <div>
          Hello Admin,{" "}
          <span className="text-orange-700 font-semibold">{user.name}</span>{" "}
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Analytics
              </label>
              </div>
              <div className="space-y-3 ">
              <Link to="/adminpage"
                className="flex transform items-center rounded-lg px-3 py-3
                text-gray-600 transition-colors duration-300 hover:bg-gray-100
                hover:text-gray-700"  >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className=" text-sm font-medium">DashBoard</span>
              </Link>
              
              <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                Functionalities
              </label>
              </div>
              <Link
                to="/adminapprove"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Fish className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Approve Fishermans</span>
              </Link>
              <Link
                to="/adminremove"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <FishOff className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Remove Fishermans</span>
              </Link>



            </div>
          </nav>
        </div>
        <Button className="bg-orange-700" onClick={Logout}>
          Log out
        </Button>
        <Link href="/">
          <img src={LOGO} alt="Logo" />
        </Link>
      </aside>
    </div>
  );
};

export default ASidebar;
