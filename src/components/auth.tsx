import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const bc = new BroadcastChannel("update-tabs");
  const [searchParams] = useSearchParams();
  const processStarted = searchParams.get("processStarted");
  useEffect(() => {
    if (processStarted) {
      bc.postMessage("close-tab");
    }
    window.close();
  }, []);

  return <div></div>;
};

export default Auth;
