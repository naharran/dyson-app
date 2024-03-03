import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "./Home";

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
    <div className="bg-home flex flex-col h-full">
      <NavBar onClick={openAuth} />
      <Home onClick={openAuth} />
    </div>
  );
};

export default HomeContainer;
