import { NewsletterInfo } from "../type";
import NewsLetter from "./NewsLetter";
type NewsLetterListProps = {
  data: NewsletterInfo[];
};
const NewsLetterList = ({ data }: NewsLetterListProps) => {
  const renderList = () => {
    const list: React.ReactNode[] = [];
    data.forEach((item, index) => {
      list.push(
        <NewsLetter
          key={index + item.domain}
          domain={item.domain}
          unsubscribe_link={item?.unsubscribe_link ?? ""}
          unsubscribe_status={item.unsubscribe_status}
        />,
      );
    });
    return list;
  };
  return <div className=" flex flex-col w-full ">{renderList()}</div>;
};

export default NewsLetterList;
