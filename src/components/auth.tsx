import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const processStarted = searchParams.get("processStarted");

  useEffect(() => {
    if (processStarted) {
      const bc = new BroadcastChannel("update-tabs");
      bc.postMessage("close-tab"); // נשאר כמו שהיה
      bc.close(); // מנקה מיד אחרי השליחה
    }

    // לא מנסים לסגור את החלון — זה יטופל בצד של ה-main window
  }, []);

  return <div>Authentication successful. You can close this window.</div>;
};

export default Auth;
