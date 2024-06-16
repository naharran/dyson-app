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
    <div className="flex w-full justify-between text-14 font-Rubik text-center text-black mt-5">
      <div className="overflow-hidden text-nowrap text-ellipsis w-[154px] flex">
        <span className="underline"> {domain}</span>
      </div>
      <div onClick={() => openResubscribe()}>
        {unsubscribe_status === UnsubscribeStatus.success ? (
          <span className="text-grey500"> SUBSCRIBE</span>
        ) : (
          <span className="text-red500"> UNSUBSCRIBE</span>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
