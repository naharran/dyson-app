import TailContainer from "../tail/tailContainer";
import { ReactComponent as Icon2 } from "@assets/Icon_2.svg";
import { ReactComponent as Trash } from "@assets/Icon trash.svg";
import { ReactComponent as Icon3 } from "@assets/Icon_3.svg";
import { useTranslation } from "react-i18next";
export type ScanDetailsProps = {
  totalNewsLetterMail: number;
  totalEmailSize: string;
  totalNewsLetterFound: number;
};
const ScanDetails = ({
  totalNewsLetterMail,
  totalEmailSize,
  totalNewsLetterFound,
}: ScanDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <TailContainer
        Icon={Trash}
        number={totalNewsLetterMail?.toString()}
        text={t("tails.trash.text")}
      />
      <TailContainer
        Icon={Icon2}
        number={totalEmailSize}
        text={t("tails.space.text")}
      />
      <TailContainer
        Icon={Icon3}
        number={totalNewsLetterFound?.toString()}
        text={t("tails.mail.text")}
      />
    </div>
  );
};

export default ScanDetails;
