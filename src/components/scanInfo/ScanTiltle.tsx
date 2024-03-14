type ScanTitleProps = {
  emailNumber: number;
};
const ScanTitle = ({ emailNumber }: ScanTitleProps) => {
  return (
    <div className="flex text-16 text-black font-Rubik text-center mt-10">
      <p>
        {" "}
        Out of <span className="text-textBlue">{emailNumber}</span> emails
        processed...
      </p>
    </div>
  );
};

export default ScanTitle;
