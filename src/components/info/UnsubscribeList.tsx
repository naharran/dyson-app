import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import TailContainer from "../tail/tailContainer";
import { ReactComponent as Icon3 } from "@assets/Icon_3.svg";
import { t } from "i18next";
import NewsLetterList from "./NewsLetterList";
import { NewsletterInfo } from "../type";
type UnsubscribeListProps = {
  totalNewsLettersFound: number;
  data: NewsletterInfo[];
};
const UnsubscribeList = ({
  totalNewsLettersFound,
  data,
}: UnsubscribeListProps) => {
  return (
    <div className="flex shadow-lg justify-start mt-10 rounded-b-2xl">
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
          <AccordionButton padding={"unset"}>
            <TailContainer
              Icon={Icon3}
              number={totalNewsLettersFound.toString() ?? "0"}
              text={t("info.unsubscribed")}
              useStyle={false}
            />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <NewsLetterList data={data} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UnsubscribeList;
