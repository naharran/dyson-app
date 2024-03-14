import { Button } from "@chakra-ui/react";
import ReSlider from "../infra/ReSlider";
import TailContainer from "../tail/tailContainer";
import trash from "./../../assets/Trash_Icon.png";
import ScanTitle from "./ScanTiltle";

const ScanInfo = () => {
  return (
    <div className="flex flex-col items-center ms-5 me-5">
      <ScanTitle emailNumber={100} />
      <div className="flex flex-col w-full">
        <TailContainer
          imgSrc={trash}
          number={"55"}
          text={"emails where deleted."}
        />
        <TailContainer
          imgSrc={trash}
          number={"55"}
          text={"emails where deleted."}
        />
        <TailContainer
          imgSrc={trash}
          number={"55"}
          text={"emails where deleted."}
        />
        <TailContainer
          imgSrc={trash}
          number={"55"}
          text={"emails where deleted."}
        />
      </div>
      <div className="flex ms-3 me-3 flex-col items-center justify-center text-16 font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> Choose what you’d like to delete. </p>
        <ReSlider />
      </div>
      <div className="w-full ms-3 me-3 flex justify-center">
        <Button width={"88%"} variant={"round"} onClick={() => console.log()}>
          Clean my inbox
        </Button>
      </div>
    </div>
  );
};

export default ScanInfo;
