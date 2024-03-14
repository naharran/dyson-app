import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "./Home";
import HomeFooter from "./foter/Foter";

const HomeContainer = () => {
  const naviget = useNavigate();
  function onChildWindowClose() {
    naviget("/loading");
  }

  const openAuth = () => {
    const windowFeatures = "left=500,top=500,width=320,height=320";
    const childWindow = window.open(
      import.meta.env.VITE_AUTH_URL,
      "authWindow",
      windowFeatures,
    );
    const checkInterval = setInterval(() => {
      if (childWindow?.closed) {
        clearInterval(checkInterval);
        onChildWindowClose();
      }
    }, 1000);
  };
  return (
    <div className="flex flex-col h-full">
      <NavBar onClick={openAuth} />
      <Home onClick={openAuth} />
      <HomeFooter />
    </div>
  );
};

export default HomeContainer;
