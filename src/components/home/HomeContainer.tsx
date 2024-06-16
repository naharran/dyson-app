import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "./Home";
import HomeFooter from "./foter/Foter";
import { useEffect } from "react";

const HomeContainer = () => {
  const navigate = useNavigate();
  const bc = new BroadcastChannel("update-tabs");
  function onChildWindowClose() {
    navigate("/loading");
  }

  const openAuth = () => {
    const windowFeatures = "left=500,top=500,width=320,height=320";
    window.open(import.meta.env.VITE_AUTH_URL, "authWindow", windowFeatures);
  };
  useEffect(() => {
    bc.onmessage = () => {
      onChildWindowClose();
    };
  }, [bc]);
  return (
    <div className="flex flex-col h-full">
      <NavBar onClick={openAuth} />
      <div className="flex w-full justify-center">
        <div className="flex flex-col  w-[1200px]">
          <Home onClick={openAuth} />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default HomeContainer;
