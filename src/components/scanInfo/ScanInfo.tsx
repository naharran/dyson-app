//import InfoLoader from "./InfoLoader";
import ScanInfoContent from "./SacnInfoContent";

const ScanInfo = () => {
  return (
    <div className="flex flex-col items-center ms-5 me-5 h-full">
      {/* <InfoLoader /> */}
      <ScanInfoContent
        totalEmailNumber={"100"}
        totalNewsLetterEmail={"607"}
        totalEmailSize={"13"}
        totalNewsLetter={"102"}
      />
    </div>
  );
};

export default ScanInfo;
