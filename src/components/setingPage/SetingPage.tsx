import { Button } from "@chakra-ui/react";
import { ReactComponent as StandBy } from "./../../assets/standBy.svg";

const SettingPage = () => {
  const startClanging = () => {
    console.log("cliongh");
  };
  return (
    <div className="flex flex-col h-full mt-10">
      <StandBy />
      <div className="flex flex-col mt-10 text-48 font-Rubik mb-10 text-black text-center ">
        <p>You’re all set!</p>
        <p className="text-16">
          {" "}
          time to <span className="text-textBlue">reclaim</span> your inbox.
        </p>
      </div>
      <div className="flex text-16 font-Rubik mb-5 text-black text-center flex-col-reverse grow items-center">
        <p className="mt-5">
          By clicking the button below, you give permission to delete emails.
          Don’t worry, you’ll be able to restore them.{" "}
        </p>
        <Button width={"88%"} variant={"round"} onClick={() => startClanging()}>
          Get started{" "}
        </Button>
      </div>
    </div>
  );
};

export default SettingPage;
