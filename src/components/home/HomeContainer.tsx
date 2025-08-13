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
    const features = [
      "toolbar=no",
      "menubar=no",
      "status=no",
      "resizable=yes",
      "scrollbars=yes",
      "width=500",
      "height=600",
      "top=200",
      "left=300",
    ].join(",");

    authWindowRef.current = window.open(
      "http://localhost:8080/auth",
      `authWindow_${Date.now()}`, // שם חדש בכל פתיחה מונע reuse של חלון קיים
      features,
    );
  };

  useEffect(() => {
    const bc = new BroadcastChannel("update-tabs");
    console.log("use effect");
    bc.onmessage = () => {
      console.log("message recived");
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
