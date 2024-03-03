import Button from "../Button";
import { UnsubscribeStatus } from "../type";

type NewsLetterProps = {
  domain: string;
  unsubscribe_link: string;
  unsubscribe_status: UnsubscribeStatus;
};
const NewsLetter = ({
  domain,
  unsubscribe_link,
  unsubscribe_status,
}: NewsLetterProps) => {
  const openResubscribe = () => {
    window.open(unsubscribe_link);
  };
  return (
    <div className="flex w-full justify-evenly mt-5">
      <span> {domain}</span>
      <span>
        {" "}
        Unsubscribe status: {unsubscribe_status === 2 ? "true" : "false"}
      </span>
      <Button value="Resubscribe" onClick={() => openResubscribe()} />
    </div>
  );
};

export default NewsLetter;
