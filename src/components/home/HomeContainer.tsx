import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "./Home";
import HomeFooter from "./foter/Foter";
import { useEffect, useRef } from "react";

const HomeContainer = () => {
  const navigate = useNavigate();
  const authWindowRef = useRef<Window | null>(null);

  function onChildWindowClose() {
    authWindowRef.current?.close?.(); // סוגר את חלון auth אם פתוח
    navigate("/loading");
  }

  const openAuth = () => {
    const windowFeatures = "left=500,top=500,width=320,height=320";
    authWindowRef.current = window.open(
      "https://staging.api.reclaimm.com/auth",
      "authWindow",
      windowFeatures,
    );
  };

  useEffect(() => {
    const bc = new BroadcastChannel("update-tabs");

    bc.onmessage = () => {
      onChildWindowClose();
    };

    return () => {
      bc.close();
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <NavBar onClick={openAuth} />
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-[1200px]">
          <Home onClick={openAuth} />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default HomeContainer;
