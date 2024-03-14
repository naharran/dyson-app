type FactTailProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  title: string;
  text: string;
};
const FactTail = ({ Icon, title, text }: FactTailProps) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <Icon />
      <div className="flex flex-col font-Rubik text-black text-center mt-5">
        <p className="text-24">{title} </p>
        <p className="text-16">{text}</p>
      </div>
    </div>
  );
};

export default FactTail;
