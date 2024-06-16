import { Radio } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ScanOptionTailProps = {
  index: number;
};
const ScanOptionTail = ({ index }: ScanOptionTailProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex mb-5 mt-5 justify-start p-5 shadow-2xl justify-start mt-10 rounded-b-2xl justify-between">
      <div className="ms-3 text-24 font-Inter">
        <p className="text-16"> {t(`scanPage.scanOption-${index}.title`)}</p>
        <span className="text-textBlue font-semibold">
          {t(`scanPage.scanOption-${index}.colorText`)}
        </span>{" "}
        <span className="font-bold">
          {t(`scanPage.scanOption-${index}.suffix`)}
        </span>
      </div>
      <div className="flex me-10">
        <Radio
          className="border-black"
          size="lg"
          value={index.toString()}
        ></Radio>
      </div>
    </div>
  );
};

export default ScanOptionTail;
<p></p>;
